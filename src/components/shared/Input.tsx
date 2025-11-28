import { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  error: string | undefined;
  register: UseFormRegisterReturn;
  readonly?: boolean;
}

const Input = ({ type, label, name, placeholder, error, register, readonly= false }: InputProps) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <input type={type} id={name} placeholder={placeholder} {...register} readOnly={readonly} />
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default Input;
