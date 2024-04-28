import { ErrorMessageWrapper } from "./ErrorMessage.styled";
export const ErrorMessage: React.FC<{ message: string }> = ({ message }) => {
  return (
    <ErrorMessageWrapper>
      <h2>There's an error</h2>
      <p>{message}</p>
    </ErrorMessageWrapper>
  );
};
