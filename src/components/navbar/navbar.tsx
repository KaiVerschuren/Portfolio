"use client";

import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

import Image from 'next/image';
import Logo from "@/assets/img/logos/KAIVER.png"

import { SunIcon } from "@heroicons/react/24/solid";
import { MoonIcon } from "@heroicons/react/24/solid";

import Link from "next/link";

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const storedTheme = localStorage.getItem("theme") || "dark";
  let newTheme;
  if (storedTheme == "dark") {
    newTheme = "light";
  } else {
    newTheme = "dark";
  }

  if (!themeContext) {
    throw new Error("Navbar must be used within a ThemeProvider");
  }

  const { changeTheme } = themeContext;

  return (
    <>
      <div className="fixed right-[-2%] top-[-7%] h-[100px] w-[200px] rotate-[0deg] transform rounded-full bg-gradient-to-tl from-base-100 via-primary to-base-100 blur-[80px]"></div>
      <div className="navbar fixed top-0 backdrop-blur-lg z-10 border-b-2 border-neutral">
        <div className="flex-1 px-2 lg:flex-none relative">
          <Link href="/" className="text-lg font-bold">
            <Image 
            className="size-16 aspect-square"
            src={Logo}
            alt="Logo"
            />
          </Link>
        </div>
        <div className="flex flex-1 justify-end px-2">
          <div className="flex items-stretch gap-4">
            <button
              className="btn btn-ghost rounded-btn z-30"
              onClick={() => changeTheme(newTheme)}
            >
              {storedTheme == "dark" && <SunIcon className="size-6" />}
              {storedTheme == "light" && <MoonIcon className="size-6" />}
            </button>
            <Link href="/resume" className="btn md:btn-md btn-outline btn-primary border-2 z-30">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
