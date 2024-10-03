import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IPet } from "../types/pet.type";
import { useGetSpeciesQuery } from "../pages/admin/receptionist/appointment.service";

type PetPickerProps = {
  pets: IPet[];
  setPets: React.Dispatch<React.SetStateAction<IPet[]>>;
};

export const PetPicker = ({ pets, setPets }: PetPickerProps) => {
  const { register, getValues, reset } = useForm<IPet>();
  const { data: specieData } = useGetSpeciesQuery();

  const [expand, setExpand] = useState(false);
  const addPets = (data: IPet) => {
    setPets((prevState) => [...prevState, data]);
    reset();
  };

  return (
    <motion.div
      className="h-16 overflow-hidden py-2"
      animate={{
        height: expand ? "auto" : "6rem",
      }}
    >
      <form action="" className="space-y-5">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Pets:</span>
            <div className="flex h-fit flex-1 items-center gap-x-2">
              {!pets?.length ? (
                <button className="btn btn-sm rounded-badge" type="button">
                  Inbox
                  <div
                    className="avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MdCancel />
                  </div>
                </button>
              ) : (
                pets.map((p, index) => (
                  <button
                    className="btn btn-sm rounded-badge"
                    key={index}
                    type="button"
                    onClick={() => {
                      reset(p);
                    }}
                  >
                    {p.name}
                    <div
                      className="avatar"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(p.name);
                      }}
                    >
                      <MdCancel />
                    </div>
                  </button>
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
        <div className="space-y-2">
          <div className="flex justify-between gap-x-2 px-2">
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Name"
                {...register("name")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Age"
                {...register("age")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <input
                type="text"
                className="w-full text-sm"
                placeholder="Weight"
                {...register("weight")}
              />
            </label>
          </div>
          <div className="flex justify-between gap-x-2 px-2">
            <label className="flex flex-1 items-center">
              {/* <input
                type="text"
                className="w-full text-sm"
                placeholder="Species"
                {...register("species")}
              /> */}
              <select
                className="select select-bordered w-full"
                {...register("species", {
                  required: "Spieces is empty!",
                })}
              >
                <option value={""}>Species?</option>
                {(specieData?.result as any[])?.map((val, index) => (
                  <option key={index} value={val.name}>
                    {val.name}
                  </option>
                ))}
              </select>
            </label>
            <div className="space-x-2">
              <button
                className="btn"
                type="button"
                onClick={() => addPets(getValues())}
              >
                Add
              </button>
              <button className="btn" type="reset">
                Clear
              </button>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  );
};
