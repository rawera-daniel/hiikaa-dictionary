"use client";

import React, { use, useState } from "react";
import Login from "../login/page";

function Search() {
  const [searchWord, setSearchWord] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedWord, setSelectedWord] = useState(null);

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
    "banana",
    "beautiful",
    "brave",
    "cat",
    "creative",
    "curious",
    "dog",
    "delightful",
    "determined",
  ];

  // To show suggestion words
  const handleSearch = (value) => {
    setSearchWord(value);

    if (value.length > 0) {
      const filteredWords = words.filter((word) =>
        word.toLowerCase().startsWith(value.toLowerCase())
      );

      setSuggestions(filteredWords);
    } else {
      setSuggestions([]);
    }
  };

  const capitalizedFirstWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const capitalizedFirstSuggestions = suggestions.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );

  const handleWordSelect = (word) => {
    setSearchWord(word);
    setSuggestions([]);
    setSelectedWord(word);
  };

  // if (searchWord.trim() === "") {
  //   setSuggestions([]); // Clear suggestions if input is empty
  //   setSelectedWord(null); // Clear selected word details
  //   return;
  // }

  return (
    <section className="relative mt-6">
      <input
        placeholder="Search words..."
        type="text"
        value={searchWord}
        onChange={(e) => handleSearch(e.target.value)}
        className=" w-5xl border text-gray-950 border-gray-400 rounded-full  px-6 py-2 focus:outline  focus:outline-gray-800"
      />
      <div className="absolute top-3 right-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-red-500"
          viewBox="0 0 24 24"
          height="24"
          width="24"
        >
          <path d="M10.979 16.8991C11.0591 17.4633 10.6657 17.9926 10.0959 17.9994C8.52021 18.0183 6.96549 17.5712 5.63246 16.7026C4.00976 15.6452 2.82575 14.035 2.30018 12.1709C1.77461 10.3068 1.94315 8.31525 2.77453 6.56596C3.60592 4.81667 5.04368 3.42838 6.82101 2.65875C8.59833 1.88911 10.5945 1.79039 12.4391 2.3809C14.2837 2.97141 15.8514 4.21105 16.8514 5.86977C17.8513 7.52849 18.2155 9.49365 17.8764 11.4005C17.5979 12.967 16.8603 14.4068 15.7684 15.543C15.3736 15.9539 14.7184 15.8787 14.3617 15.4343C14.0051 14.9899 14.0846 14.3455 14.4606 13.9173C15.1719 13.1073 15.6538 12.1134 15.8448 11.0393C16.0964 9.62426 15.8261 8.166 15.0841 6.93513C14.3421 5.70426 13.1788 4.78438 11.81 4.34618C10.4412 3.90799 8.95988 3.98125 7.641 4.55236C6.32213 5.12348 5.25522 6.15367 4.63828 7.45174C4.02135 8.74982 3.89628 10.2276 4.28629 11.6109C4.67629 12.9942 5.55489 14.1891 6.75903 14.9737C7.67308 15.5693 8.72759 15.8979 9.80504 15.9333C10.3746 15.952 10.8989 16.3349 10.979 16.8991Z"></path>
          <rect
            transform="rotate(-49.6812 12.2469 14.8859)"
            rx="1"
            height="10.1881"
            width="2"
            y="14.8859"
            x="12.2469"
          ></rect>
        </svg>
      </div>

      <div className="absolute bg-white top-16 right-0 mx-auto w-[1010px]">
        {/* <div> */}
        {(suggestions.length > 0
          ? capitalizedFirstSuggestions
          : selectedWord
            ? []
            : capitalizedFirstWords
        ).map((word, index) => (
          <ul className="" key={index}>
            <li
              className="max-w-5xl text-lg rounded-md  pl-6 py-2 mb-3 shadow-slate-300 bg-gray-100 shadow-xs tracking-wide cursor-pointer"
              key={index}
              onClick={() => handleWordSelect(word)}
            >
              {word}
            </li>
          </ul>
        ))}
      </div>

      {selectedWord && (
        <div className="mt-8 px-8">
          <div className=" bg-black rounded-lg  py-5 mx-auto w-[700px] text-center">
            <h2 className="text-2xl font-bold text-white tracking-wider">
              {selectedWord}
            </h2>
          </div>

          <div className="mt-6 w-[750px] mx-auto">
            <div className="mb-5">
              <p className="text-lg mb-2">
                {/* <span className="font-semibold">{index + 1}.</span>  */}
                <span className="font-semibold">{1}.</span> A written or printed
                work consisting of pages glued or sewn together along one side
                and bound in covers.
              </p>
              <p className="text-gray-600 italic text-base pl-4 border-l-2 border-red-400 ml-2 py-1">
                &quot;He spent the afternoon reading a fascinating book.&quot;
              </p>
            </div>
            <div className="mb-5">
              <p className="text-lg mb-2">
                {/* <span className="font-semibold">{index + 1}.</span>  */}
                <span className="font-semibold">{2}.</span> A bound set of blank
                sheets for writing or keeping records in.
              </p>
              <p className="text-gray-600 italic text-base pl-4 border-l-2 border-red-400 ml-2 py-1">
                &quot;She wrote her notes in a spiral-bound book.&quot;
              </p>
            </div>
            {/* Synonyms */}
            <div className="mb-5">
              <h3 className="font-medium text-base text-gray-600 mb-2">
                Synonyms
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 text-base py-1 bg-red-100 text-red-800 rounded-full  font-medium">
                  home
                </span>
                <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-base font-medium">
                  residence
                </span>
                <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-base font-medium">
                  dwelling
                </span>
                <span className="px-4 py-1 bg-red-100 text-red-800 rounded-full text-base font-medium">
                  abode
                </span>
              </div>
            </div>

            <div className="mb-5">
              <h3 className="font-medium text-base text-gray-600 mb-2">
                Antonyms
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 text-base py-1 bg-green-100 text-green-800 rounded-full  font-medium">
                  home
                </span>
                <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-base font-medium">
                  residence
                </span>
                <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-base font-medium">
                  dwelling
                </span>
                <span className="px-4 py-1 bg-green-100 text-green-800 rounded-full text-base font-medium">
                  abode
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Search;
