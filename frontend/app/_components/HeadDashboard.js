import Image from "next/image";
import React from "react";
import OT from "@/public/oak-tree.png";

export default function HeadDashboard() {
  return (
    <header className="bg-gray-100 px-6 h-18 border-b border-gray-200">
      <div className="flex items-center justify-end gap-4 h-full -translate-x-4">
        <Image
          src={OT}
          alt="The odaa tree"
          className="rounded-[50%] w-10 h-10 bg-gray-300"
        />
        <span className="text-sm tracking-wide font-medium">User Name</span>
      </div>
    </header>
  );
}
