import React from "react";
import Sidebar from "../_components/Sidebar";

export default function page() {
  return (
    <div className="flex h-screen">
      <aside className="w-64 shrink-0">
        <Sidebar />
      </aside>
      <div className="flex-1">Dashboard Header</div>
    </div>
  );
}
