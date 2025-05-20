export default function WordList({ title, words, color = "red" }) {
  if (!words || words.length === 0) return null;

  return (
    <div className="mb-5">
      <h3 className="font-medium text-base text-gray-600 mb-2">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {words.map((word, index) => (
          <span
            key={index}
            className={`px-4 text-base py-1 bg-${color}-100 text-${color}-800 rounded-full font-medium`}
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
