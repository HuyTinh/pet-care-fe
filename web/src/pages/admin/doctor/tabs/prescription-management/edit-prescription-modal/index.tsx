import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
} from "../../../prescription.service";
import { ServicePicker } from "../../../../../../components/service-picker";
import _ from "lodash"


type EditPrescriptionModalProps = {
  prescription: any;
};

export const EditPrescriptionModal = ({
  prescription,
}: EditPrescriptionModalProps) => {
  const {
    register,
    getValues,
    reset
  } = useForm<any>({
    mode: "all",
  });

  const [calculationUnits, setCalculationUnits] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [services, setServices] = useState<string[]>([]);

  const [_, setSelectedPet] = useState<any>()

  const [prescriptionDetails, setPrescriptionDetails] = useState<any[]>([])

  const [petPrescription, setPetPrescription] = useState<any>()

  const {
    data: calculationUnitData
  } = useGetAllCalculationUnitQuery();

  const { data: medicinesData } =
    useGetAllMedicineQuery();

  useEffect(() => {
    setCalculationUnits(calculationUnitData?.data);
    return () => { };
  }, [calculationUnitData?.data]);

  useEffect(() => {
    setMedicines(medicinesData?.data);
    return () => { };
  }, [medicinesData?.data]);


  useEffect(() => {
    if (prescription?.appointment.pets) {
      setSelectedPet((prescription.appointment as any).pets[0].id);

    }

    if (prescription?.appointment.services) {
      setServices((prescription.appointment as any).services)
    }

    if (prescription?.details) {
      setPrescriptionDetails(prescription?.details[0].medicines)
      setPetPrescription(prescription?.details[0])
    }

    return () => { };
  }, [prescription]);


  useEffect(() => {
    reset(petPrescription)
  }, [petPrescription])
  console.log(prescription);


  return (
    <dialog id="edit_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-3xl">
        <div className="my-1 text-center text-3xl font-bold">
          Edit Prescription
        </div>
        <div className="flex gap-x-3">
          <div className="space-y-2">
            <label className="space-y-2">
              <div>Pets:</div>
              <select
                className="select select-bordered w-full"
                onChange={(e) => setSelectedPet(e.target.value)}
              >
                {prescription?.appointment?.pets?.map((val: any, index: any) => (
                  <option key={index}>
                    {val.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="overflow-x-auto h-56 border rounded-xl">
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Medicine</th>
                    <th>Quantity</th>
                    <th>Calculation Unit</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    petPrescription?.medicines.map((val: any, index: any) =>
                      <tr key={index}>
                        <th>#{index + 1}</th>
                        <td>{val.name}</td>
                        <td>{val.quantity}</td>
                        <td>{val.calculate_unit}</td>
                        <td>
                          <button className="btn btn-sm btn-outline"
                            onClick={() => setPrescriptionDetails((prevState) => {
                              return prevState.filter((_, i) => i != index)
                            })}
                          >x</button>
                        </td>
                      </tr>
                    )
                  }
                </tbody>
              </table>
            </div>
            <div className="flex gap-x-2">
              <label className="form-control flex-1">
                <div className="label">
                  <span className="label-text">Medicine</span>
                </div>
                <select
                  className="select select-bordered"
                  defaultValue={""}
                  {...register("prescription_detail.medicine")}
                >
                  <option value={""} disabled>
                    Choose...
                  </option>
                  {medicines?.map((val, index) => (
                    <option key={index}>{(val as any).name}</option>
                  ))}
                </select>
              </label>
              <label className="form-control flex-1">
                <div className="label">
                  <span className="label-text">Quantity</span>
                </div>
                <select
                  className="select select-bordered w-full"
                  defaultValue={""}
                  {...register("prescription_detail.quantity")}
                >
                  <option value={""} disabled>
                    Choose...
                  </option>
                  {[...Array(50).keys()]?.map((val, index) => (
                    <option key={index}>{(val as any) + 1} </option>
                  ))}
                </select>
              </label>
              <label className="form-control flex-1">
                <div className="label">
                  <span className="label-text">Calculation Unit</span>
                </div>
                <select
                  className="select select-bordered"
                  defaultValue={""}
                  {...register("prescription_detail.calculate_unit")}
                >
                  <option value={""} disabled>
                    Choose...
                  </option>
                  {calculationUnits?.map((val, index) => (
                    <option key={index}>{(val as any).name}</option>
                  ))}
                </select>
              </label>
            </div>
            <div>
              <button className="w-full btn btn-sm" onClick={() => {
                let prescription_detail = { ...getValues("prescription_detail") }

                setPrescriptionDetails([...prescriptionDetails, {
                  ...prescription_detail,
                  price: prescription_detail.quantity * (medicines as any)?.find((val: any) => val.name === prescription_detail.medicine).price
                }]);

              }}>Add medicine</button>
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <label className="space-y-2 bg- w-full">
              <div>Diagnosis:</div>
              <textarea className="textarea textarea-bordered w-full" placeholder="Bio" {...register("diagnosis")}></textarea>
            </label>
            <label className="space-y-2 bg- w-full">
              <div>Note:</div>
              <textarea className="textarea textarea-bordered w-full" placeholder="Bio" {...register("note")}></textarea>
            </label>
            <ServicePicker services={services} setServices={setServices} />
            <div>
              <button className="btn" onClick={() => {
                // createPrescription({
                //   appointment_id: appointment.id,
                //   services: services,
                //   details: [{
                //     pet_id: selectedPet,
                //     medicines: [...prescriptionDetails].map(val => {
                //       return _.omit({
                //         ...val,
                //         medicine_id: (medicines.find((v: any) => v.name == val.medicine) as any).id,
                //         calculation_id: (calculationUnits.find((v: any) => v.name == val.calculate_unit) as any).id,
                //         total_money: val.price * val.quantity
                //       }, ["medicine", "calculate_unit", "price"])
                //     }),
                //     diagnosis: getValues("diagnosis"),
                //     note: getValues("note")
                //   }],
                //   total_money: [...prescriptionDetails].reduce((sum, val) => {
                //     return sum + (val.price * val.quantity)
                //   }, 0)
                // }).then(() => {
                //   toast.success("Create prescription successful", {
                //     position: "top-right"
                //   })
                // });
                // console.log();

              }}>Save</button>
            </div>
          </div>
        </div>

      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog >
  );
};
