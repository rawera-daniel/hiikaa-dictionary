export default function InputLabel({
  htmlFor,
  labelText,
  index,
  textColor = "text-gray-700",
  className = "",
}) {
  return (
    <label
      htmlFor={htmlFor}
      className={`block text-base font-medium ${textColor} ${className}`}
    >
      {labelText} {index !== undefined && index + 1}
    </label>
  );
}
