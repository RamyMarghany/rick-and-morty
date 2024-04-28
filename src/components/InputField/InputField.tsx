import { StyledInput } from "./InputField.styled";
interface InputFieldProps {
  id: string;
  label?: string;
  type: string;
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField: React.FC<InputFieldProps> = ({
  id,
  label,
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div>
      {label && <label htmlFor={id}>{label}:</label>}
      <StyledInput
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
