import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IPet } from "../../../../../../types/pet.type";

type PetPickerProps = {
  pets: IPet[];
  setPets: React.Dispatch<React.SetStateAction<IPet[]>>;
};

export const PetPicker = ({ pets, setPets }: PetPickerProps) => {
  const { register, getValues, reset } = useForm<IPet>();

  const [expand, setExpand] = useState(false);
  const addPets = (data: IPet) => {
    setPets((prevState) => [...prevState, data]);
    reset();
  };

  return (
    <motion.div
      className="h-16 space-y-5 overflow-hidden py-2"
      animate={{
        height: expand ? "auto" : "6rem",
      }}
    >
      <div className="flex w-full items-center rounded-lg border p-2">
        <div className="flex flex-1 flex-col">
          <span className="pb-2">Pets:</span>
          <div className="flex h-fit flex-1 items-center gap-x-2">
            {!pets.length ? (
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
      <div className="space-y-5">
        <div className="flex justify-between gap-x-5 px-2">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Name"
              {...register("name")}
            />
          </label>
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Age"
              {...register("age")}
            />
          </label>
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Weight"
              {...register("weight")}
            />
          </label>
        </div>
        <div className="flex justify-between gap-x-5 px-2">
          <label className="input input-bordered flex flex-1 items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Species"
              {...register("species")}
            />
          </label>
          <div className="space-x-5">
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
    </motion.div>
  );
};
