import { UseFormRegisterReturn } from "react-hook-form";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  label: string;
  name: string;
  placeholder?: string;
  options: SelectOption[];
  error: string | undefined;
  register: UseFormRegisterReturn;
}

const Select = ({
  label,
  name,
  placeholder = "Please Select an Option",
  options,
  error,
  register,
}: SelectProps) => {
  return (
    <div className="form-input">
      <label htmlFor={name}>
        {label} <span>*</span>
      </label>
      <select id={name} {...register}>
        <option value="">{placeholder}</option>
        {options.map((item) => (
          <option key={item.label} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
      {error && <span className="form-error">{error}</span>}
    </div>
  );
};

export default Select;
