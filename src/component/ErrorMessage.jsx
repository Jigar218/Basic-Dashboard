const ErrorMessage = ({ message }) => (
  <div className="text-center text-danger py-3 fw-bold">
    {message || "Something went wrong!"}
  </div>
);

export default ErrorMessage;
