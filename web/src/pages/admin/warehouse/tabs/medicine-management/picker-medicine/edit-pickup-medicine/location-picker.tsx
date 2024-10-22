import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ILocation } from "../../../../../../../types/medicine.type";


type LocationPickerProps = {
  location: ILocation[];
  setLocation: React.Dispatch<React.SetStateAction<ILocation[]>>;
};

export const LocationPicker = ({ location, setLocation }: LocationPickerProps) => {
  const { register, getValues, reset } = useForm<ILocation>();

  const [expand, setExpand] = useState(false);
  const addLocation = (data: ILocation) => {
    setLocation((prevState) => [...prevState, data]);
    reset({
      id: "",
      area: "",
      status: true,
      row_location: "",
      column_location: ""
    });
  };

  return (
    <motion.div className="overflow-hidden">
      <form action="" className="space-y-2">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Location:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!location?.length ? (
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
                location.map((p, index) => (
                  <>
                    <div className="flex">
                      <div className="flex cursor-pointer items-center">
                        <span>Area: </span>
                        <span
                          className="flex items-center gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold ml-1"
                          key={index}
                          onClick={() => {
                            reset(p);
                          }}
                        >
                          <span>
                            {p.area}
                          </span>

                          <div
                            className="avatar"
                            onClick={() => {
                              setLocation((prevState) =>
                                prevState.filter((_, petIndex) => petIndex !== index),
                              );
                            }}
                          >
                            <MdCancel />
                          </div>
                        </span>
                      </div>
                      <div className="flex cursor-pointer items-center ml-5">
                        <span>Row location: </span>
                        <span
                          className="flex cursor-pointer items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold"
                          key={index}
                          onClick={() => {
                            reset(p);
                          }}
                        >
                          <span>
                            {p.row_location}
                          </span>

                          <div
                            className="avatar"
                            onClick={() => {
                              setLocation((prevState) =>
                                prevState.filter((_, petIndex) => petIndex !== index),
                              );
                            }}
                          >
                            <MdCancel />
                          </div>
                        </span>
                      </div>
                      <div className="flex cursor-pointer items-center ml-5">
                        <span>Column location: </span>
                        <span
                          className="flex cursor-pointer items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold"
                          key={index}
                          onClick={() => {
                            reset(p);
                          }}
                        >
                          <span>
                            {p.column_location}
                          </span>

                          <div
                            className="avatar"
                            onClick={() => {
                              setLocation((prevState) =>
                                prevState.filter((_, petIndex) => petIndex !== index),
                              );
                            }}
                          >
                            <MdCancel />
                          </div>
                        </span>
                      </div>
                    </div>

                  </>
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
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Area"
                {...register("area")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
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
            </label>
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
      </form>
    </motion.div>
  );
};
