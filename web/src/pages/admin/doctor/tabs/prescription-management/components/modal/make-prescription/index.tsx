import { memo, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { IAppointment } from "../../../../../../../../@types/appoiment.type";
import {
  useCreatePrescriptionMutation,
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
} from "../../../../../prescription.service";
import { ServicePicker } from "../../../../../../../../shared/ui/service-picker";
import _ from "lodash"
import { toast } from "react-toastify";
import { Editor } from "@tinymce/tinymce-react";


type MakePrescriptionModalProps = {
  appointment: IAppointment;
};

export const MakePrescriptionModal = memo(({
  appointment,
}: MakePrescriptionModalProps) => {
  const {
    register,
    getValues,
  } = useForm<any>({
    mode: "all",
  });

  const [calculationUnits, setCalculationUnits] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [services, setServices] = useState<any>([]);

  const editorRef = useRef<any>(null);

  const [selectedPet, setSelectedPet] = useState<any>()

  const [prescriptionDetails, setPrescriptionDetails] = useState<any[]>([])

  const [createPrescription] = useCreatePrescriptionMutation()

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

    if (appointment.services) {
      setServices((appointment as any).services)
    }
    return () => { };
  }, [appointment]);


  return (
    <dialog id="make_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-5xl">
        <div className="my-1 text-center text-3xl font-bold">
          Make Prescription
        </div>
        <div className="flex flex-col gap-x-3">
          <div className="space-y-2">
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
            <div className="flex flex-col gap-y-2">
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
                <label className="space-y-2 w-full">
                  <div>Note:</div>
                  <textarea className="textarea textarea-bordered w-full" placeholder="Bio" {...register("note")}></textarea>
                </label>
              </div>
            </div>
            <div>
              <button className="w-full btn btn-sm" onClick={() => {
                const prescription_detail = { ...getValues("prescription_detail") }

                setPrescriptionDetails([...prescriptionDetails, {
                  ...prescription_detail,
                  price: prescription_detail.quantity * (medicines as any)?.find((val: any) => val.name === prescription_detail.medicine)?.price
                }]);

              }}>Add medicine</button>
            </div>
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
          </div>
          <div className="flex-1 space-y-2">
            <ServicePicker services={services} setServices={setServices} />
            <div>
              <label>Result:</label>
              <Editor
                apiKey='3q3fwbtk8nu12pn587p8vzmlmkr41h24xg6zarcl7lk08iw9'
                onInit={(_evt, editor) => editorRef.current = editor}
                initialValue=""
                init={{
                  height: 375,
                  menubar: false,
                  plugins: [
                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                  ],
                  toolbar: 'undo redo | blocks | ' +
                    'bold italic forecolor | alignleft aligncenter ' +
                    'alignright alignjustify | bullist numlist outdent indent | ' +
                    'removeformat | help',
                  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                }}
              />
            </div>
            <div className="flex gap-x-2 pt-2">
              <label className="space-y-2 w-full">
                <div>Diagnosis:</div>
                <textarea className="textarea textarea-bordered w-full" placeholder="Bio" {...register("diagnosis")}></textarea>
              </label>
            </div>
            <div>
              <button className="btn" onClick={() => {
                createPrescription({
                  appointment_id: appointment.id,
                  services: services.map((val: any) => val.name),
                  details: [{
                    pet_id: selectedPet,
                    medicines: [...prescriptionDetails].map(val => {
                      return _.omit({
                        ...val,
                        medicine_id: (medicines.find((v: any) => v.name == val.medicine) as any)?.id,
                        calculation_id: (calculationUnits.find((v: any) => v.name == val.calculate_unit) as any)?.id,
                        total_money: val.price * val.quantity
                      }, ["medicine", "calculate_unit", "price"])
                    }),
                    diagnosis: getValues("diagnosis"),
                    note: getValues("note")
                  }],
                  total_money: [...prescriptionDetails].reduce((sum, val) => {
                    return sum + (val.price * val.quantity)
                  }, 0) + [...services].reduce((sum, val) => {
                    return sum + (val as any).price
                  }, 0)
                }).then(() => {
                  toast.success("Create prescription successful", {
                    position: "top-right"
                  })
                });
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
});