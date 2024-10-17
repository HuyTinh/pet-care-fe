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
    return () => {};
  }, [calculationUnitData?.data]);

  useEffect(() => {
    setMedicines(medicinesData?.data);
    return () => {};
  }, [medicinesData?.data]);

  const onSubmit: SubmitHandler<any> = (data) => {};

  return (
    <dialog id="make_prescription_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-2xl">
        <div className="my-2 text-center text-3xl font-bold">
          Make Prescription
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          {appointment?.pets?.map((val, index) => (
            <div className="collapse bg-base-200" key={index}>
              <input type="checkbox" className="peer" />
              <div className="collapse-title">
                {`Name: `}
                <span className="font-bold underline">{val.name}</span> |{" "}
                {`Age: `}
                <span className="font-bold underline">{val.age}</span> |{" "}
                {`Weight: `}
                <span className="font-bold underline">{val.weight}</span> |{" "}
                {`Species: `}
                <span className="font-bold underline">{val.species}</span>
              </div>
              <div className="collapse-content">
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
                        Choose medicine
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
                        Choose quantity
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
                        Choose calculation unit
                      </option>
                      {calculationUnits?.map((val, index) => (
                        <option key={index}>{(val as any).name}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>
            </div>
          ))}
          <div>
            <button className="btn btn-outline">Save</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
