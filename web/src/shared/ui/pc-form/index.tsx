import { PetCareInputText } from "./form-control/ip-text";

export type FormField = {
  label: string;
  value: string;
  type: string;
};

type PetCareFormProps = {
  fields: FormField[];
};

const FormControl: any = {
  text: PetCareInputText,
  password: PetCareInputText,
};

export const PetCareForm = ({ fields }: PetCareFormProps) => {
  return (
    <div className="flex flex-col gap-y-5">
      {fields.map((val, index) =>
        FormControl[val.type]({
          label: val.label,
          type: val.type,
          index: index,
        }),
      )}
    </div>
  );
};
