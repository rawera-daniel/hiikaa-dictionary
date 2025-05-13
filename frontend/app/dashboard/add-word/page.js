"use client";

import AddButton from "@/app/_components/AddButton";
import DefinitionField from "@/app/_components/DefinitionField";
import InputField from "@/app/_components/InputField";
import InputLabel from "@/app/_components/InputLabel";
import { useState } from "react";

export default function Page() {
  const [definitionCount, setDefinitionCount] = useState(1);

  const addDefinition = () => {
    setDefinitionCount((prev) => prev + 1);
  };

  const removeDefinition = () => {
    if (definitionCount > 1) {
      setDefinitionCount((prev) => prev - 1);
    }
  };
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-wide">Add New Word</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6 ">
          <div className="space-y-3">
            <InputLabel
              htmlFor="word"
              labelText="New Word"
              textColor="text-black"
            />
            <InputField type="text" id="word" placeholder="Enter word" />
          </div>

          <div className="space-y-4">
            {Array.from({ length: definitionCount }, (_, index) => (
              <DefinitionField
                key={index}
                index={index}
                onRemove={removeDefinition}
              />
            ))}

            <div className="flex items-center justify-end">
              <AddButton
                tooltipText="Add another definition"
                onClick={addDefinition}
                position="right-full"
                translateX="-translate-x-5"
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-red-600 cursor-pointer hover:bg-red-700 text-white rounded-sm font-medium shadow-md transition-colors duration-150 ease-in-out"
            >
              Add Word
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
