import { useForm } from "react-hook-form";
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

    </div>
  );
};
