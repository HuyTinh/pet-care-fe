import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IAppointment } from "../../../../../../types/appoiment.type";
import {
  useGetAllCalculationUnitQuery,
  useGetAllMedicineQuery,
} from "../../../prescription.service";

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
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });

  const [calculationUnits, setCalculationUnits] = useState([]);

  const [medicines, setMedicines] = useState([]);

  const {
    data: calculationUnitData,
    isFetching: isFetchingCalculationUnitData,
  } = useGetAllCalculationUnitQuery();

  const { data: medicinesData, isFetching: isFetchingMedicinesData } =
    useGetAllMedicineQuery();

  useEffect(() => {
    setCalculationUnits(calculationUnitData?.data);
    return () => { };
  }, [calculationUnitData?.data]);

  useEffect(() => {
    setMedicines(medicinesData?.data);
    return () => { };
  }, [medicinesData?.data]);

  const onSubmit: SubmitHandler<any> = (data) => { };

  return (
    <dialog id="make_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-5xl">
        <div className="my-2 text-center text-3xl font-bold">
          Make Prescription
        </div>
        <div className="flex gap-x-3">
          <div className="w-1/2 space-y-2">
            <label className="space-y-2">
              <div>Pets:</div>
              <select
                className="select select-bordered w-full"
              >
                {appointment?.pets?.map((val, index) => (
                  <option key={index + 10} value={val.id}>
                    {val.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="overflow-x-auto h-56 border rounded-xl">
              <table className="table table-zebra">
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
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                    <td>
                      <button className="btn btn-sm btn-outline">x</button>
                    </td>
                  </tr>
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
              <button className="w-full btn btn-sm">Add</button>
            </div>
          </div>
          <div className="flex-1">
            <label className="space-y-2 bg- w-full">
              <div>Diagnosis:</div>
              <textarea className="textarea textarea-bordered w-full" placeholder="Bio"></textarea>
            </label>
          </div>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
