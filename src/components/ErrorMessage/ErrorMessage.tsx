import { ErrorMessageWrapper } from "./ErrorMessage.styled";
export const ErrorMessage = ({ message }: { message: string }) => {
  return (
    <ErrorMessageWrapper>
      <h2>There's an error</h2>
      <p>{message}</p>
    </ErrorMessageWrapper>
  );
};
