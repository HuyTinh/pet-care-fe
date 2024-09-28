import { useForm } from "react-hook-form";
import { PetCareModalContainer } from "../../../../../../components/pc-modal";
import { useEffect, useState } from "react";

export const ClientChangePasswordModal = ({ email }: { email: string }) => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const nextStep = () => {
    setLoading(true);
    setTimeout(() => {
      setStep(step + 1);
    }, 2500);
  };

  useEffect(() => {
    setLoading(false);
  }, [step]);

  const { register } = useForm<any>({
    mode: "onChange",
  });

  return (
    <div>
      <PetCareModalContainer size={"md"} onClose={() => setStep(1)}>
        {loading && (
          <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/10">
            <div>
              <span className="loading loading-spinner loading-lg text-neutral"></span>
            </div>
          </div>
        )}
        <div className="flex flex-1 flex-col items-center">
          {step === 1 && (
            <div className="flex w-full gap-x-5">
              <label className="form-control w-full space-y-5">
                <div className="label text-center">
                  <span className="label-text w-full text-xl font-bold">
                    Verify your Email
                  </span>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    disabled
                    {...register("email")}
                    value={email}
                  />
                  <button
                    className="btn btn-neutral"
                    onClick={() => nextStep()}
                  >
                    Verify
                  </button>
                </div>
              </label>
            </div>
          )}
          {step === 2 && (
            <div className="flex w-full gap-x-5">
              <label className="form-control w-full space-y-5">
                <div className="label">
                  <span className="label-text w-full text-center text-xl font-bold">
                    Otp
                  </span>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    {...register("otp")}
                  />

                  <button
                    className="btn btn-neutral"
                    onClick={() => nextStep()}
                  >
                    Resend
                  </button>
                </div>

                <button className="btn btn-neutral" onClick={() => nextStep()}>
                  Verify
                </button>
              </label>
            </div>
          )}
          {step === 3 && (
            <div className="w-full space-y-5">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Old Password:</span>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    {...register("old_password")}
                  />
                </div>
                {/* <button
                  className="btn btn-neutral"
                  onClick={() => setStep(step + 1)}
                >
                  Verify
                </button> */}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">New Password:</span>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    {...register("new_password")}
                  />
                </div>
                {/* <button
                  className="btn btn-neutral"
                  onClick={() => setStep(step + 1)}
                >
                  Verify
                </button> */}
              </label>
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Confirm Password:</span>
                </div>
                <div className="flex gap-x-5">
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full"
                    {...register("confirm_password")}
                  />
                </div>
              </label>
              <button className="btn btn-neutral w-full">
                Change Password
              </button>
            </div>
          )}
        </div>
        {/* {(tabs[formState as keyof Tabs] as Function)(setFormState)} */}
      </PetCareModalContainer>
    </div>
  );
};
