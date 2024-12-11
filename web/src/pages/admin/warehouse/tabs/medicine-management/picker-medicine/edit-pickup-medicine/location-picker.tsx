import { MdCancel, MdOutlineErrorOutline } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { ILocation } from "../../../../../../../@types/medicine.type"; 

type LocationPickerProps = {
  location: ILocation[];
  setLocation: React.Dispatch<React.SetStateAction<ILocation[]>>;
  areas: string[];
  rowLocations: string[];
  columnLocations: string[];
  allLocationsData: ILocation[]; // The complete location data
};

export const LocationPicker = ({
  location,
  setLocation,
  areas,
  allLocationsData, // Use the complete location data to transform
}: LocationPickerProps) => {
  const { register, reset, handleSubmit, formState: { errors } } = useForm<ILocation>();
  const [expand, setExpand] = useState(false);
  const [rowLocationsMap, setRowLocationsMap] = useState<
    Record<string, string[]>
  >({});
  const [columnLocationsMap, setColumnLocationsMap] = useState<
    Record<string, Record<string, string[]>>
  >({});

  const [selectedArea, setSelectedArea] = useState("");
  const [selectedRowLocations, setSelectedRowLocations] = useState<string[]>(
    [],
  );
  const [selectedColumnLocations, setSelectedColumnLocations] = useState<
    string[]
  >([]);

  useEffect(() => {
    const rowMap: Record<string, Set<string>> = {};
    const columnMap: Record<string, Record<string, Set<string>>> = {};

    allLocationsData.forEach((location) => {
      const { area, row_location, column_location } = location;

      // Initialize row_map for each area
      if (!rowMap[area]) {
        rowMap[area] = new Set();
      }
      rowMap[area].add(row_location);

      // Initialize column_map for each (area, row_location)
      if (!columnMap[area]) {
        columnMap[area] = {};
      }
      if (!columnMap[area][row_location]) {
        columnMap[area][row_location] = new Set();
      }
      columnMap[area][row_location].add(column_location);
    });

    // Convert sets to arrays
    setRowLocationsMap(
      Object.fromEntries(
        Object.entries(rowMap).map(([key, value]) => [key, Array.from(value)]),
      ),
    );
    setColumnLocationsMap(
      Object.fromEntries(
        Object.entries(columnMap).map(([area, rows]) => [
          area,
          Object.fromEntries(
            Object.entries(rows).map(([row, cols]) => [row, Array.from(cols)]),
          ),
        ]),
      ),
    );
  }, [allLocationsData]);

  const onSubmit = (data: ILocation) => {
    addLocation(data);
  };

  const addLocation = (data: ILocation) => {
    const foundLocation = allLocationsData.find(
      (loc) =>
        loc.area === data.area &&
        loc.row_location.toString() === data.row_location.toString() &&
        loc.column_location.toString() === data.column_location.toString(),
    );

    // Kiểm tra nếu không tìm thấy vị trí
    if (!foundLocation) {
      console.error("Location not found");
      return;
    }

    const newItem = {
      ...data,
      id: foundLocation.id, // Chắc chắn rằng id không undefined
    };

    setLocation((prevState) => [...prevState, newItem]);
    reset({
      id: "",
      area: "",
      status: true,
      row_location: "",
      column_location: "",
    });
  };

  const handleAreaChange = (area: string) => {
    setSelectedArea(area);
    setSelectedRowLocations(rowLocationsMap[area] || []);
    setSelectedColumnLocations([]);
    reset({ row_location: "", column_location: "" }); // Reset row and column selections
  };

  const handleRowChange = (row: string) => {
    if (selectedArea) {
      setSelectedColumnLocations(columnLocationsMap[selectedArea][row] || []);
    }
    reset({ column_location: "" }); // Reset column selection
  };

  return (
    <motion.div className="overflow-hidden w-5/6">
      <div className="space-y-2">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Location:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!location?.length ? (
                <span className="flex cursor-default items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                  Inbox
                  <div className="avatar" onClick={(e) => e.stopPropagation()}>
                    <MdCancel />
                  </div>
                </span>
              ) : (
                location.map((p, index) => (
                  <div className="flex" key={p.id}>
                    <div className="flex cursor-pointer items-center">
                      <span>Area: </span>
                      <span className="ml-1 flex items-center gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                        <span>{p.area}</span>
                        <div
                          className="avatar"
                          onClick={() => {
                            setLocation((prevState) =>
                              prevState.filter(
                                (_, petIndex) => petIndex !== index,
                              ),
                            );
                          }}
                        >
                          <MdCancel />
                        </div>
                      </span>
                    </div>
                    <div className="ml-5 flex cursor-pointer items-center">
                      <span>Row location: </span>
                      <span className="flex cursor-pointer items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                        <span>{p.row_location}</span>
                        <div
                          className="avatar"
                          onClick={() => {
                            setLocation((prevState) =>
                              prevState.filter(
                                (_, petIndex) => petIndex !== index,
                              ),
                            );
                          }}
                        >
                          <MdCancel />
                        </div>
                      </span>
                    </div>
                    <div className="ml-5 flex cursor-pointer items-center">
                      <span>Column location: </span>
                      <span className="flex cursor-pointer items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                        <span>{p.column_location}</span>
                        <div
                          className="avatar"
                          onClick={() => {
                            setLocation((prevState) =>
                              prevState.filter(
                                (_, petIndex) => petIndex !== index,
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
            <div className="input input-bordered flex flex-1 items-center gap-2 relative">
              <select
                className="w-full text-sm outline-none"
                {...register("area", { validate: value => value !== "" || "Area is empty!", })}
                onChange={(e) => handleAreaChange(e.target.value)}
              >
                <option value="">Select an area</option>
                {areas.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
              {errors?.area && (
                <span className="badge badge-error absolute bottom-[-30px] left-0 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.area as any)?.message}
                </span>
              )}

            </div>
            <div className="input input-bordered flex flex-1 items-center gap-2">
              <select
                className="w-full text-sm outline-none"
                {...register("row_location", {
                  required: "Row location is required",
                })}
                onChange={(e) => handleRowChange(e.target.value)}
              >
                <option value="">Select row location</option>
                {selectedRowLocations.map((row) => (
                  <option key={row} value={row}>
                    {row}
                  </option>
                ))}
              </select>
            </div>
            <div className="input input-bordered flex flex-1 items-center gap-2">
              <select
                className="w-full text-sm outline-none"
                {...register("column_location", {
                  required: "Column location is required",
                })}
              >
                <option value="">Select column location</option>
                {selectedColumnLocations.map((col) => (
                  <option key={col} value={col}>
                    {col}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end gap-x-2 px-2">
            <div className="space-x-2">
              <button
                className="btn"
                type="button"
                onClick={handleSubmit(onSubmit)} // Sử dụng handleSubmit
              >
                Add
              </button>
              <button className="btn" type="reset" onClick={() => reset()}>
                Clear
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};
