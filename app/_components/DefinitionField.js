"Use client";

import { useState } from "react";
import AddButton from "./AddButton";
import DeleteButton from "./DeleteButton";
import InputLabel from "./InputLabel";
import TextArea from "./TextArea";
import InputField from "./InputField";

export default function DefinitionField({ index, onRemove }) {
  const [examples, setExamples] = useState([0]);
  const [synonyms, setSynonyms] = useState([0]);
  const [antonyms, setAntonyms] = useState([0]);

  const addExample = () => {
    setExamples([...examples, examples.length]);
  };

  const removeExample = (exampleIndex) => {
    if (examples.length > 1) {
      setExamples(examples.filter((_, idx) => idx !== exampleIndex));
    }
  };

  const addSynonym = () => {
    setSynonyms([...synonyms, synonyms.length]);
  };

  const removeSynonym = (synonymIndex) => {
    if (synonyms.length > 1) {
      setSynonyms(synonyms.filter((_, idx) => idx !== synonymIndex));
    }
  };

  const addAntonym = () => {
    setAntonyms([...antonyms, antonyms.length]);
  };

  const removeAntonym = (antonymIndex) => {
    if (antonyms.length > 1) {
      setAntonyms(antonyms.filter((_, idx) => idx !== antonymIndex));
    }
  };

  return (
    <div className="space-y-4 p-4 border border-gray-400 rounded-lg">
      <div className="flex items-center justify-between">
        <h3 className="text-base  font-medium ">Definition-{index + 1}</h3>
        {index > 0 && <DeleteButton onClick={onRemove} />}
      </div>

      <div className="space-y-2">
        <InputLabel htmlFor={`definition-${index}`} labelText=" Definition" />

        <TextArea id={`definition-${index}`} placeholder="Enter definition" />
      </div>

      {examples.map((_, exampleIndex) => (
        <div className="space-y-2" key={exampleIndex}>
          <div className="flex items-center justify-between">
            <InputLabel
              htmlFor={`example-${exampleIndex}`}
              labelText="Example Usage"
              index={exampleIndex}
            />

            {exampleIndex > 0 && (
              <DeleteButton onClick={() => removeExample(exampleIndex)} />
            )}
          </div>
          <TextArea
            id={`example-${exampleIndex}`}
            rows={1}
            placeholder="Enter example sentence"
          />
        </div>
      ))}

      <div className="flex items-center justify-start">
        <AddButton tooltipText="Add Another Example" onClick={addExample} />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="space-y-2">
          {synonyms.map((_, synonymIndex) => (
            <div className="space-y-2" key={synonymIndex}>
              <div className="flex items-center justify-between">
                <InputLabel
                  htmlFor={`synonym-${synonymIndex}`}
                  labelText="Synonyms"
                  index={synonymIndex}
                />
                {synonymIndex > 0 && (
                  <DeleteButton onClick={() => removeSynonym(synonymIndex)} />
                )}
              </div>
              <InputField
                id={`synonym-${synonymIndex}`}
                placeholder="Enter synonym"
              />
            </div>
          ))}

          <div className="flex items-center justify-start mt-5">
            <AddButton
              tooltipText="Add Another Synonyms"
              onClick={addSynonym}
            />
          </div>
        </div>

        {/* Antonyms */}
        <div className="space-y-2">
          {antonyms.map((_, antonymsIndex) => (
            <div className="space-y-2" key={antonymsIndex}>
              <div className="flex items-center justify-between">
                <InputLabel
                  htmlFor={`antonyms-${antonymsIndex}`}
                  labelText="Antonyms"
                  index={antonymsIndex}
                />

                {antonymsIndex > 0 && (
                  <DeleteButton onClick={() => removeAntonym(antonymsIndex)} />
                )}
              </div>

              <InputField
                id={`antonyms-${antonymsIndex}`}
                placeholder="Enter antonyms"
              />
            </div>
          ))}

          <div className="flex items-center justify-start mt-5">
            <AddButton
              tooltipText="Add Another Antonyms"
              onClick={addAntonym}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
