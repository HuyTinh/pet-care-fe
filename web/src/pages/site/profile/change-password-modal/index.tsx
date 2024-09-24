import { useForm } from "react-hook-form";
import { PetCareModalContent } from "../../../../components/pc-modal";
import { useState } from "react";

export const ClientChangePasswordModal = ({ email }: { email: string }) => {
  const [step, setStep] = useState(1);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  });

  return (
    <div>
      <PetCareModalContent>
        <div className="flex flex-1 flex-col items-center py-10">
          <div className="flex gap-x-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Email:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full"
                readOnly
                {...register("email")}
                value={email}
              />
            </label>
            <button className="btn btn-neutral">Verify</button>
          </div>
        </div>
        {/* {(tabs[formState as keyof Tabs] as Function)(setFormState)} */}
      </PetCareModalContent>
    </div>
  );
};
