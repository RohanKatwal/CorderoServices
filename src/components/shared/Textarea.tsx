import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  error: string | undefined;
  register: UseFormRegisterReturn;
}

const Textarea = ({
  label,
  name,
  placeholder,
  error,
  register,
}: InputProps) => {
  return (
    <div className="form-input message">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <textarea id={name} placeholder={placeholder} {...register}></textarea>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default Textarea;
