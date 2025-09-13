function Input({
  type,
  placeholder,
  label,
  register = null,
  registerName,
  className,
  headerOpt,
  lableClassName,
}) {
  const selectProp = register != null ? register(registerName) : {};
  return (
    <div className="flex flex-col items-start gap-2">
      <div className="flex justify-between items-center">
        <h4 for={label} className={lableClassName}>
          {label}
        </h4>
        {headerOpt}
      </div>
      <input
        {...selectProp}
        id={label}
        placeholder={placeholder}
        type={type}
        className={className}
      />
    </div>
  );
}
export default Input;
