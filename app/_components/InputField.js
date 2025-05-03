export default function InputField({
  type,
  id,
  defaultValue = "",
  autoComplete = "off",
  placeholder = "",
}) {
  return (
    <input
      type={type}
      id={id}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      placeholder={placeholder}
      className="w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
    />
  );
}
