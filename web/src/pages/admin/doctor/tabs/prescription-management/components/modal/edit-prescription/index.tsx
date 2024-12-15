import { memo, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  useCreatePrescriptionMutation,
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
  useGetAllVeterinaryCareQuery,
} from "../../../../../prescription.service";
import _ from "lodash"
import { Editor } from "@tinymce/tinymce-react";
import { toast } from "react-toastify";

type EditPrescriptionModalProps = {
  prescription: any;
};

export const EditPrescriptionModal = memo(({
  prescription,
}: EditPrescriptionModalProps) => {
  const {
    register,
    getValues,
  } = useForm<any>({
    mode: "all",
  });

  const [calculationUnits, setCalculationUnits] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const [veterinaryCares, setVeterinaryCares] = useState([]);

  const editorRef = useRef<any>(null);

  const [selectedPet, setSelectedPet] = useState<any>()

  const [prescriptionMedicines, setPrescriptionMedicines] = useState<any[]>(
    prescription?.details[0]?.medicines.map((val: any) => {
      return {
        medicine: val.name,
        quantity: val.quantity,
        calculate_unit: val.calculate_unit
      }
    }))

  const [prescriptionVeterinaryCares, setPrescriptionVeterinaryCares] = useState<any[]>(
    []
  )

  console.log(prescription?.details[0]?.medicines.map((val: any) => {
    return {
      medicine: val.name,
      quantity: val.quantity,
      calculate_unit: val.calculate_unit
    }
  }));


  const [createPrescription] = useCreatePrescriptionMutation()

  const {
    data: calculationUnitData
  } = useGetAllCalculationUnitQuery();

  const { data: medicinesData } =
    useGetAllMedicineQuery();

  const { data: veterinaryCareData } = useGetAllVeterinaryCareQuery();

  useEffect(() => {
    setCalculationUnits(calculationUnitData?.data);
    return () => { };
  }, [calculationUnitData?.data]);

  useEffect(() => {
    setMedicines(medicinesData?.data);
    return () => { };
  }, [medicinesData?.data]);

  useEffect(() => {
    setVeterinaryCares(veterinaryCareData?.data);
    return () => { };
  }, [veterinaryCareData?.data]);

  useEffect(() => {
    if (prescription?.appointment.pets) {
      setSelectedPet((prescription?.appointment as any).pets[0]?.id);
    }

    if (prescription?.details) {
      setPrescriptionMedicines(
        prescription?.details[0]?.medicines.map((val: any) => {
          return {
            medicine: val.name,
            quantity: val.quantity,
            calculate_unit: val.calculate_unit,
            note: val.note
          }
        })
      )

      setPrescriptionVeterinaryCares(
        prescription?.details[0]?.veterinary_cares.map((val: any) => {
          return {
            veterinary_care: val.veterinary_care,
            result: val.result
          }
        }))
    }

    return () => { };
  }, [prescription]);


  return (
    <dialog id="edit_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box border-2 border-black w-full max-w-7xl overflow-x-hidden">
        <div className="my-1 text-center text-3xl font-bold">
          Make Prescription
        </div>
        <div className="flex flex-col gap-x-3">
          <div className="space-y-5">
            <label className="space-y-2">
              <div>Pets:</div>
              <select
                className="select select-bordered w-full"
                onChange={(e) => setSelectedPet(e.target.value)}
              >
                {prescription?.appointment?.pets?.map((val: any, index: any) => (
                  <option key={index + 10} value={val.id}>
                    {val.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="divider divider-start font-bold text-lg underline">Medicine:</div>
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
                  <textarea className="textarea textarea-bordered w-full" placeholder="Bio" {...register("prescription_detail.note")}></textarea>
                </label>
              </div>
            </div>
            <div>
              <button className="w-full btn btn-sm" onClick={() => {
                const prescription_detail = { ...getValues("prescription_detail") }

                setPrescriptionMedicines([...prescriptionMedicines, {
                  ...prescription_detail,
                  price: prescription_detail.quantity * (medicines as any)?.find((val: any) => val.name.trim() === prescription_detail.medicine)?.price
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
                    prescriptionMedicines?.map((val, index) =>
                      <tr key={index}>
                        <th>#{index + 1}</th>
                        <td>{val.medicine}</td>
                        <td>{val.quantity}</td>
                        <td>{val.calculate_unit}</td>
                        <td>
                          <button className="btn btn-sm btn-outline"
                            onClick={() => setPrescriptionMedicines((prevState) => {
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
          <div className="divider divider-start font-bold text-lg underline">Services:</div>
          <div className="overflow-x-auto h-56 border rounded-xl">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Service</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  prescriptionVeterinaryCares?.map((val, index) =>
                    <tr key={index}>
                      <th>#{index + 1}</th>
                      <td>{val.veterinary_care}</td>
                      <td>
                        <button className="btn btn-sm btn-outline"
                          onClick={() => setPrescriptionVeterinaryCares((prevState) => {
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
          <div className="flex-1 space-y-2">
            <label className="form-control flex-1">
              <div className="label">
                <span className="label-text">Veterinary Cares:</span>
              </div>
              <select
                className="select select-bordered"
                defaultValue={""}
                {...register("veterinary_cares")}
              >
                <option value={""} disabled>
                  Choose...
                </option>
                {veterinaryCares?.map((val, index) => (
                  <option key={index}>{(val as any).name}</option>
                ))}
              </select>
            </label>
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
            <div>
              <button className="w-full btn btn-sm" onClick={() => {
                const veterinary_care_id = getValues("veterinary_cares")

                const veterinary_care = _.omit(veterinaryCares.find((val: any) => val.name.trim() === veterinary_care_id), [
                  "description", "status"
                ]);

                setPrescriptionVeterinaryCares((prevState) => [...prevState, {
                  veterinary_care: (veterinary_care as any).name,
                  total_money: (veterinary_care as any).price,
                  result: editorRef.current.getContent()
                }])

              }}>Add service</button>
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
                  appointment_id: prescription.appointment.id,
                  details: [{
                    pet_id: selectedPet,
                    pet_medicines: [...prescriptionMedicines].map(val => {

                      return _.omit({
                        ...val,
                        medicine_id: (medicines.find((v: any) => v.name.trim() == val.medicine) as any)?.id,
                        calculation_id: (calculationUnits.find((v: any) => v.name == val.calculate_unit) as any)?.id,
                        total_money: val.price * val.quantity
                      }, ["medicine", "calculate_unit", "price"])
                    }),
                    pet_veterinary_cares: prescriptionVeterinaryCares,
                    diagnosis: getValues("diagnosis"),
                  }],
                  total_money: [...prescriptionMedicines].reduce((sum, val) => {
                    return sum + (val.price * val.quantity)
                  }, 0) + [...prescriptionVeterinaryCares].reduce((sum, val) => {
                    return sum + (val as any).total_money
                  }, 0)
                }).then(() => {
                  (document.getElementById("make_prescription_modal") as any).close()
                  setTimeout(() => toast.success("Create prescription successful", {
                    position: "top-right"
                  }), 100)
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
