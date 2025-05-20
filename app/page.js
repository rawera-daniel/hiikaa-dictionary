import { getDictionaries } from "@/services/api";
import Search from "./_components/Search";

export default async function Home() {
  const { dictionaries } = await getDictionaries();
  console.log({ dictionaries });

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl text-green-700 font-medium">
        Check a definition, keep it with you forever.
      </h1>
      <Search dictionaries={dictionaries} />
    </div>
  );
}
