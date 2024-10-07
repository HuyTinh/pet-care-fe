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
    reset({
      name: "",
      weight: "",
      age: "",
      species: "",
    });
  };

  return (
    <motion.div className="overflow-hidden">
      <form action="" className="space-y-2">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Pets:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!pets?.length ? (
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
                pets.map((p, index) => (
                  <span
                    className="flex cursor-pointer items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold"
                    key={index}
                    onClick={() => {
                      reset(p);
                    }}
                  >
                    {p.name}
                    <div
                      className="avatar"
                      onClick={() => {
                        setPets((prevState) =>
                          prevState.filter((_, petIndex) => petIndex !== index),
                        );
                      }}
                    >
                      <MdCancel />
                    </div>
                  </span>
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
              <select
                className="select select-bordered w-full"
                {...register("species", {
                  required: "Spieces is empty!",
                })}
              >
                <option value={""}>Species?</option>
                {(specieData?.data as any[])?.map((val, index) => (
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
        </motion.div>
      </form>
    </motion.div>
  );
};
