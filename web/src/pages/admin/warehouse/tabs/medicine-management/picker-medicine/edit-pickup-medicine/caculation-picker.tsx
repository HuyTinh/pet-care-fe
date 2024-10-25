import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ICalculationUnit } from "../../../../../../../types/medicine.type";
import { useGetCaculationunitQuery } from "../../../../medicine.service";
import { toast } from "react-toastify";

type CaculationPickerProps = {
  caculation: ICalculationUnit[];
  setCaculation: React.Dispatch<React.SetStateAction<ICalculationUnit[]>>;
};
interface IUnitApiResponse {
  code: number;
  data: IUnitData[];
}
interface IUnitData {
  id: string;
  name: string;
  status: boolean;
}
export const CaculationPicker = ({
  caculation,
  setCaculation,
}: CaculationPickerProps) => {
  const { register, getValues, reset } = useForm<ICalculationUnit>();
  const [expand, setExpand] = useState(false);
  const { data: unitResponse } = useGetCaculationunitQuery<{
    data: IUnitApiResponse;
  }>();

  const addLocation = (data: ICalculationUnit) => {
    // Tìm unit được chọn từ response API
    const selectedUnit = unitResponse?.data.find(
      (unit) => unit.name === data.name,
    );

    if (selectedUnit) {
      // Kiểm tra trùng
      const isDuplicate = caculation.some(
        (item) => item.id === selectedUnit.id || item.name === data.name,
      );

      if (!isDuplicate) {
        const newItem = {
          ...data,
          id: selectedUnit.id, // Lấy id từ API
        };

        setCaculation((prev) => [...prev, newItem]);
        reset({
          id: "",
          name: "",
          status: true,
        });
      } else {
        toast.error("This unit already exists!");
      }
    }
  };

  return (
    <motion.div className="overflow-hidden">
      <div className="space-y-2">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Unit:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!caculation?.length ? (
                <span className="flex cursor-default items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                  Inbox
                  <div
                    className="avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MdCancel />
                  </div>
                </span>
              ) : (
                caculation.map((p: any, index: any) => (
                  <div key={p.id} className="flex">
                    <div className="flex cursor-pointer items-center">
                      <span
                        className="ml-1 flex items-center gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold"
                        onClick={() => {
                          reset(p);
                        }}
                      >
                        <span>{p.name}</span>

                        <div
                          className="avatar"
                          onClick={(e) => {
                            e.stopPropagation();
                            setCaculation((prevState: any) =>
                              prevState.filter(
                                (_: any, petIndex: any) => petIndex !== index,
                              ),
                            );
                          }}
                        >
                          <MdCancel />
                        </div>
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
          <div>
            <button
              className="btn btn-sm rounded-badge"
              type="button"
              onClick={() => setExpand(!expand)}
            >
              <motion.div
                animate={{
                  rotate: expand ? 180 : 0,
                }}
              >
                <FaAngleDown />
              </motion.div>
            </button>
          </div>
        </div>
        <motion.div
          className="space-y-2 overflow-hidden"
          animate={{
            height: expand ? "auto" : "0",
          }}
        >
          <div className="flex justify-between gap-x-2 px-2 py-1">
            {/* <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Name"
                {...register("name")}
              />
            </label> */}
            <label className="flex flex-1 items-center">
              <select
                className="select select-bordered w-full"
                {...register("name", {
                  required: "Name is empty!",
                })}
              >
                <option value={""}>Caculation unit?</option>
                {(unitResponse?.data as any[])?.map((val) => (
                  <option key={val.id} value={val.name}>
                    {val.name}
                  </option>
                ))}
              </select>
            </label>
            {/* <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Row location"
                {...register("row_location")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Column location"
                {...register("column_location")}
              />
            </label> */}
          </div>
          <div className="flex justify-end gap-x-2 px-2">
            <div className="space-x-2">
              <button
                className="btn"
                type="button"
                onClick={() => addLocation(getValues())}
              >
                Add
              </button>
              <button className="btn" type="reset">
                Clear
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
