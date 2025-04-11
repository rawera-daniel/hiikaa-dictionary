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
    </div>
  );
}
