import { Playfair_Display, Cormorant_Upright } from "next/font/google";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const cormorant_upright = Cormorant_Upright({
  weight: "600",
  subsets: ["latin"],
  display: "swap",
});

function Logo() {
  return (
    <Link href="/" className="flex items-center ">
      <Image src="/oak-tree.png" height="70" width="70" alt="The odaa tree" />
      <span
        className={`${cormorant_upright.className} text-gray-950 text-[22px] tracking-wider translate-y-4`}
      >
        Hiikaa Dictionary
      </span>
    </Link>
  );
}

export default Logo;
