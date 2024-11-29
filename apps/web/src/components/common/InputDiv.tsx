export const InputDiv = ({
  placeholder,
  onChange,
  type = "text",
  className,
}) => {
  return (
    <>
      <div>
        <input
          className={className}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
      </div>
    </>
  );
};
