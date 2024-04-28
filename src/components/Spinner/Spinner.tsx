import { SpinnerContainer } from "./Spinner.styled";

export const Spinner = ({ size = 100 }: { size: number }) => {
  return <SpinnerContainer size={size}></SpinnerContainer>;
};
