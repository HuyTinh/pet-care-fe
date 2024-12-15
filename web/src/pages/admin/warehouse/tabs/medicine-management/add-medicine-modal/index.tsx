import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import {
  ICalculationUnit,
  ILocation,
} from "../../../../../../../@types/medicine.type";
import { LocationPicker } from "../picker-medicine/edit-pickup-medicine/location-picker";
import { CaculationPicker } from "../picker-medicine/edit-pickup-medicine/caculation-picker";
import {
  useCreateMedicineMutation,
  useGetLocationQuery,
  useGetManufactureQuery,
} from "../../../medicine.service";
import { toFormData } from "../../../../../../shared/helped/form-data";
import { toast } from "react-toastify";

interface IManufacturer {
  id: number;
  name: string;
  status: boolean;
}

export const AddMedicineModal = () => {
  const [location, setLocation] = useState<ILocation[]>([]);
  const [caculation, setCaculation] = useState<ICalculationUnit[]>([]);
  const [createMedicine] = useCreateMedicineMutation(); // Sử dụng mutation

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm<any>({});
  const [image_url, setImage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const { data } = useGetManufactureQuery();
  const manufacturers: IManufacturer[] = data?.data || [];
  const { data: locationResponse } = useGetLocationQuery();
  const locations: ILocation[] = locationResponse?.data || []; // Chú ý thay đổi thành ILocation[] để xử lý mảng
  // Tạo mảng cho areas, rowLocations, columnLocations
  const areas = [...new Set(locations.map((location) => location.area))];
  const rowLocations = [
    ...new Set(locations.map((location) => location.row_location)),
  ];
  const columnLocations = [
    ...new Set(locations.map((location) => location.column_location)),
  ];
  const [selectedType, setSelectedType] = useState<string>("MEDICINE");

  // const [imageError, setImageError] = useState<string | null>(
  //   "Vui lòng chọn một tệp hình ảnh!",
  // );

  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      // setImageError(null);
      const reader = new FileReader();
      reader.onload = () => {
        setImage((reader as any)?.result);
        setImageFile(file); // Cập nhật file ảnh mới
        setValue("image_url", (reader as any)?.result);
        clearErrors("image_url");
      };
      reader.readAsDataURL(file);
    } else {
      // setImageError("Vui lòng chọn một tệp hình ảnh!");
    }
  };
  const onSubmit = async (data: any) => {
    const locationIds = location.map((loc) => loc.id);
    const caculationIds = caculation.map((ca) => ca.id);
    // Gộp thêm thông tin từ state
    // console.log(imageFile);

    // if (!imageFile) {
    //   setImageError("Vui lòng chọn một tệp hình ảnh!");
    //   return;
    // }

    try {
      await createMedicine(
        toFormData({
          ...data,
          locations: locationIds,
          calculationUnits: caculationIds,
          image_url: imageFile,
          manufactureId: number(data.manufacture_id),
        }),
      ).unwrap();
      // Đóng modal
      const modal: any = document.getElementById("add_medicine_modal");
      modal.close();
      // Xóa dữ liệu form
      reset(); // Hàm reset của react-hook-form để xóa dữ liệu
      setImage(""); // Xóa ảnh đã chọn
      setLocation([]); // Xóa danh sách location
      setCaculation([]); // Xóa danh sách caculation
      setImageFile(null); // Xóa file hình ảnh
      // setImageError(null);
      toast.success("Add medicine successfull !");
    } catch (err) {
      console.error("Failed to create medicine:", err);
    }
  };

  return (
    <dialog id="add_medicine_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-4xl border-2 border-black">
        <div className="text-center text-3xl">Add Medicine</div>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
        >
          <div className="ml-5 mt-5 flex justify-evenly gap-x-10">
            <div className="avatar flex max-h-max w-max flex-col items-center justify-center border-solid">
              <div className="h-[250px] w-52 rounded-xl border border-blue-400">
                {image_url ? (
                  <div className="mt-5 flex !w-full justify-center">
                    <img className="" src={image_url} alt="Selected" />
                  </div>
                ) : (
                  <div className="mt-24 flex items-center justify-center">
                    <img
                      className="!w-16"
                      src="src/shared/assets/images/picture.png"
                      alt="Default"
                    />
                  </div>
                )}
              </div>
              <div>
                <input
                  type="file"
                  className="absolute inset-0 cursor-pointer opacity-0"
                  onChange={handleImageChange}
                />
                <input
                  type="hidden"
                  value={image_url}
                  {...register("image_url", { required: "Image is empty!" })}
                />
                {errors.image_url && (
                  <span className="badge badge-error mt-2 gap-2 text-white">
                    <MdOutlineErrorOutline />
                    {(errors?.image_url as any).message}
                  </span>
                )}
              </div>
            </div>
            <div className="flex w-1/2 flex-col">
              <label className="form-control w-full max-w-md">
                <div className="label">
                  <span className="label-text font-bold">Name:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-md"
                  {...register("name", {
                    required: "Name is empty!",
                  })}
                />
                {errors?.name && (
                  <span className="badge badge-error mt-2 gap-2 text-white">
                    <MdOutlineErrorOutline />
                    {(errors?.name as any).message}
                  </span>
                )}
              </label>
              <div className="flex w-full justify-center gap-x-10">
                <label className="form-control w-full max-w-md">
                  <div className="label">
                    <span className="label-text font-bold">Quantity:</span>
                  </div>
                  <input
                    type="number"
                    defaultValue={0}
                    step={1}
                    className="input input-bordered w-full max-w-md"
                    {...register("quantity", {
                      validate: (value) => value != 0 || "Quantity can't be 0!",
                    })}
                    min={0}
                  />
                  {errors.quantity && (
                    <span className="badge badge-error mt-2 gap-2 text-white">
                      <MdOutlineErrorOutline />
                      {(errors?.quantity as any).message}
                    </span>
                  )}
                </label>
                <label className="form-control w-full max-w-md justify-between">
                  <div className="label">
                    <span className="label-text font-bold">Price:</span>
                  </div>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-md"
                    {...register("price", {
                      required: "Price is empty!",
                    })}
                  />
                  {errors?.price && (
                    <span className="badge badge-error mt-2 gap-2 text-white">
                      <MdOutlineErrorOutline />
                      {(errors.price as any)?.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="mb-5 flex gap-10">
                <label className="form-control w-full max-w-md">
                  <div className="label">
                    <span className="label-text font-bold">Manufacturer:</span>
                  </div>
                  <select
                    className="select select-bordered w-full max-w-md"
                    {...register("manufacture_id", {
                      validate: (value) =>
                        value !== "" || "Manufactures is empty!",
                    })}
                  >
                    <option value="">Select a manufacturer</option>
                    {manufacturers.map((manufacturer) => (
                      <option key={manufacturer.id} value={manufacturer.id}>
                        {manufacturer.name}
                      </option>
                    ))}
                  </select>
                  {errors?.manufacture_id && (
                    <span className="badge badge-error mt-2 gap-2 text-white">
                      <MdOutlineErrorOutline />
                      {(errors.manufacture_id as any)?.message}
                    </span>
                  )}
                </label>
                <label className="form-control w-full max-w-md">
                  <div className="label">
                    <span className="label-text font-bold">Types:</span>
                  </div>
                  <select
                    value={selectedType}
                    {...register("types", {
                      validate: (value) => value !== "" || "Types is empty!",
                    })}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="select select-bordered w-full max-w-md"
                  >
                    <option value="MEDICINE">Medicine</option>
                    <option value="SURGICAL_INSTRUMENTS">
                      Surgical Instruments
                    </option>
                    <option value="CONSUMABLES">Consumables</option>
                    <option value="TREATMENT_TOOLS">Treatment Tools</option>
                  </select>
                </label>
              </div>
            </div>
          </div>
          <div className="flex gap-x-10">
            <label className="form-control w-full max-w-md justify-between">
              <div className="label">
                <span className="label-text font-bold">Status:</span>
              </div>
              <select
                className="select select-bordered"
                {...register("status")}
              >
                {["ACTIVE", "INACTIVE"]?.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-bold">Date Import</span>{" "}
                <span className="label-text">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("dateImport")}
                value={new Date().toISOString().split("T")[0]}
                readOnly
              />
            </label>
          </div>
          <div className="flex gap-x-10 py-2">
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-bold">Manufacture Date</span>{" "}
                <span className="label-text not-italic">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("manufacturingDate", {
                  required: "Manufacturing Date is empty!",
                })}
              />
              {errors?.manufacturingDate && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.manufacturingDate as any)?.message}
                </span>
              )}
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-bold"> Expiry Date</span>{" "}
                <span className="label-text">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("expiryDate", {
                  required: "Expiry Date is empty!",
                })}
              />
              {errors?.expiryDate && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.expiryDate as any)?.message}
                </span>
              )}
            </label>
          </div>
          <div className="mt-3 flex justify-evenly gap-x-5">
            <LocationPicker
              location={location}
              setLocation={setLocation}
              areas={areas}
              rowLocations={rowLocations}
              columnLocations={columnLocations}
              allLocationsData={locations}
            />
            <CaculationPicker
              caculation={caculation}
              setCaculation={setCaculation}
            />
          </div>
          <div className="mt-5 flex justify-end">
            <button type="submit" className="btn btn-outline font-bold">
              Add
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
