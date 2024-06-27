import { cn } from "../../utils";

const ErrorField = (props) => {
  const { errorMessage, successMessage } = props;

  return (
    <span
      className={cn(
        errorMessage ? "text-red-500" : "text-green-500",
        `absolute top-full left-4 text-[.8rem] translate-y-1`
      )}
    >
      {errorMessage || successMessage}
    </span>
  );
};

export default ErrorField;
