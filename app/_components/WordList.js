export default function WordList({ title, words, color }) {
  if (!words || words.length === 0) return null;

  const colorClasses = {
    red: "bg-red-100 text-red-800",
    green: "bg-green-100 text-green-800",
  };

  const colorClass = colorClasses[color] || colorClasses.red;

  return (
    <div className="mb-5">
      <h3 className="font-medium text-base text-gray-600 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <span
            key={index}
            className={`px-4 text-base py-1 ${colorClass} rounded-full font-medium`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
