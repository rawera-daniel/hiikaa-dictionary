export default function InputField({ type, id, defaultValue, autoComplete }) {
  return (
    <input
      type={type}
      id={id}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      className="w-full px-3 py-2 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  );
}
