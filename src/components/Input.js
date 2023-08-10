export const Input = ({
  type,
  name,
  error,
  onChange,
  value,
  placeholder,
  ...props
}) => {
  return (
    <>
      <input
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        className="form-control"
        onChange={onChange}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </>
  );
};
