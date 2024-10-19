import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAppointment } from "../../../../../../types/appoiment.type";
import {
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
} from "../../../prescription.service";
import { ServicePicker } from "../../../../../../components/service-picker";

type EditPrescriptionModalProps = {
  appointment: IAppointment;
};

export const EditPrescriptionModal = ({
  appointment,
}: EditPrescriptionModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });

  const [calculationUnits, setCalculationUnits] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [services, setServices] = useState<string[]>([]);

  const [selectedPet, setSelectedPet] = useState<any>()

  const [prescriptionDetails, setPrescriptionDetails] = useState<any[]>([])



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
    if (appointment.pets) {
      setSelectedPet((appointment as any).pets[0].id);
    }
    return () => { };
  }, [appointment]);


  const onSubmit: SubmitHandler<any> = (data) => { };

  return (
    <dialog id="make_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-5xl">
        <div className="my-1 text-center text-3xl font-bold">
          Make Prescription
        </div>
        <div role="tablist" className="tabs tabs-lifted">
          <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Presctiption" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            <div className="flex gap-x-3">
              <div className="w-1/2 space-y-2">
                <label className="space-y-2">
                  <div>Pets:</div>
                  <select
                    className="select select-bordered w-full"
                    onChange={(e) => setSelectedPet(e.target.value)}
                  >
                    {appointment?.pets?.map((val, index) => (
                      <option key={index + 10} value={val.id}>
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
                        prescriptionDetails?.map((val, index) =>
                          <tr key={index}>
                            <th>#{index + 1}</th>
                            <td>{val.medicine}</td>
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
                      className="select select-bordered"
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
                    console.log({
                      appointment_id: appointment.id,
                      details: {
                        pet_id: selectedPet,
                        medicines: prescriptionDetails,
                        diagnosis: getValues("diagnosis"),
                        note: getValues("note")
                      }
                    });
                    // console.log();

                  }}>Save</button>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className="tab"
            aria-label="Medical history"
            defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
            Medical history
          </div>

        </div>

      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog >
  );
};
