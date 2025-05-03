"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

export default function AddButton({
  tooltipText,
  onClick,
  position = "left-full",
  translateX = "translate-x-5",
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="relative ">
      <button
        type="button"
        className="flex items-center justify-center p-1 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onClick={onClick}
        aria-label={tooltipText}
      >
        <Plus />
      </button>

      {isHovering && (
        <div
          className={`absolute ${position} ${translateX}  -translate-y-[29px] px-3 py-1 bg-black text-white text-sm rounded whitespace-nowrap`}
        >
          {tooltipText}
        </div>
      )}
    </div>
  );
}
