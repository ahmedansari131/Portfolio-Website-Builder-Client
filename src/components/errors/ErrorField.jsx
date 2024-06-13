const ErrorField = (props) => {
  const { errorMessage } = props;
  
  return (
    <span className="absolute top-full left-4 text-[.8rem] text-red-500 translate-y-1">
      {errorMessage}
    </span>
  );
};

export default ErrorField;
