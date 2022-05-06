interface InputErrorMessageProps {
  message: string;
}

export const InputErrorMessage: React.FC<
  React.PropsWithChildren<InputErrorMessageProps>
> = ({ message }) => (
  <span className="text-red-500 text-xs mt-1">{message}</span>
);
