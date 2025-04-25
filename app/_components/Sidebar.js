"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  LogOut,
  PlusSquare,
  User,
  BookOpen,
} from "lucide-react";

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  { name: "Dictionary", href: "/dictionary", icon: BookOpen },
  { name: "Add Word", href: "/add-word", icon: PlusSquare },
  { name: "Profile", href: "/dashboard/profile", icon: User },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log({ pathname });

  return (
    <div className="flex h-full flex-col bg-black text-white">
      <div className="flex flex-col mt-6 px-12">
        <Image
          src="/oak-tree.png"
          height="70"
          width="70"
          alt="The odaa tree"
          className="translate-x-10"
        />
        <h1 className="text-xl font-medium mt-1">Hiikaa Dictionary</h1>
      </div>

      <nav className="flex-1 pl-3 pr-5 py-4 space-y-1 translate-x-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-3 py-4 rounded-md tracking-wide transition-colors duration-150 ease-in-out ${
                isActive ? "bg-red-700" : " hover:bg-red-700 hover:text-white"
              }`}
            >
              {item.icon && (
                <Icon className="mr-3 h-5 w-5" aria-hidden="true" />
              )}
              {item.name}
            </Link>
          );
        })}
      </nav>
      <div className="px-3 py-4 -translate-y-4">
        <button className="flex items-center  rounded-md px-3 py-4 w-full hover:bg-red-700 transition-colors duration-150 ease-in-out">
          <LogOut className="mr-3 h-5 w-5" /> Logout
        </button>
      </div>
    </div>
  );
}
