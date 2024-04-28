import { StyledDropdown } from "./Dropdown.styled";
interface InputFieldProps {
  id: string;
  label?: string;
  value: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}
export const Dropdown: React.FC<InputFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
}) => {
  return (
    <StyledDropdown>
      <label htmlFor={id}>{label}:</label>
      <select id={id} value={value} onChange={onChange}>
        {["", ...options].map((option) => (
          <option key={option} value={option}>
            {option === "" ? "all" : option}
          </option>
        ))}
      </select>
    </StyledDropdown>
  );
};
