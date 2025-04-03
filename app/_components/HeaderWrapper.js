"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (pathname === "/login") return null; // Hide the header on the login page

  return <Header />;
}
