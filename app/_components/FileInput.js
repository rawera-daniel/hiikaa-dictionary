"use client";

export default function FileInput() {
  return (
    <input
      type="file"
      accept="image/*"
      className="text-base  file:font-inherit file:font-medium file:px-4 file:py-2 file:mr-3 file:rounded-sm file:border-0  file:bg-red-600 hover:file:bg-red-700 file:cursor-pointer file:transition-colors file:duration-200 file:text-white"
    />
  );
}
