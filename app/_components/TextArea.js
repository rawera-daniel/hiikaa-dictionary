export default function TextArea({
  id,
  rows = 3,
  placeholder = "",
  className = "",
}) {
  return (
    <textarea
      id={id}
      rows={rows}
      placeholder={placeholder}
      className={`w-full px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${className}`}
    />
  );
}
