"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname === "/dashboard" ||
    pathname === "/dashboard/profile" ||
    pathname === "/dashboard/add-word"
  )
    return null; // Hide the header on the login page

  return <Header />;
}
