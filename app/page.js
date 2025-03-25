import Search from "./_components/Search";

export default function Home() {
  const words = [
    "Ababo",
    "Aballa",
    "Abalti",
    "Abalu",
    "Abara",
    "Abarsa",
    "Abba",
    "Abaa bayu",
    "Abba gudda",
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl text-green-700 font-medium">
        Check a definition, keep it with you forever.
      </h1>
      <Search />

      <ul className="mt-4 mx-auto w-[1010px]">
        {words.map((word, index) => (
          <li
            className="max-w-5xl text-lg rounded-md  pl-6 py-2 mb-3 shadow-slate-300 bg-gray-100 shadow-xs tracking-wide cursor-pointer"
            key={index}
          >
            {word}
          </li>
        ))}
      </ul>

      {/* <ul className="mt-4 mx-auto w-[1010px] ">
        <li className="max-w-5xl text-lg rounded-md  pl-6 py-1 mb-2 shadow-slate-500 bg-gray-100 shadow-xs tracking-wide">
          Ababo
        </li>
        <li>Aballa</li>
        <li>Abalti</li>
        <li>Abalu</li>
        <li>Abara</li>
        <li>Abarsa</li>
        <li>Abba</li>
        <li>Abaa bayu</li>
      </ul> */}
    </div>
  );
}
