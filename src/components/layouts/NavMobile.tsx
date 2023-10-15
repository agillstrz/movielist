"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function NavMobile() {
  const [show, setShow] = useState<Boolean>(false);
  return (
    <>
      <button
        onClick={() => setShow(!show)}
        className="flex z-[999] lg:hidden flex-col gap-2   relative"
      >
        <span
          className={`h-[2px] ${
            show && "rotate-[45deg] right-1 absolute"
          }    bg-white w-8 transition-all duration-300 ease-out`}
        ></span>
        <span
          className={`h-[2px] transition-all duration-300 ease-out bg-white  ${
            show ? "w-0" : "w-8"
          }`}
        ></span>
        <span
          className={`h-[2px] bg-white w-8 ${
            show && "-rotate-[45deg] absolute right-1"
          }  transition-all duration-300 ease-out`}
        ></span>
      </button>
      <ul
        className={`flex ${
          show ? "h-44 p-1 " : "h-0 "
        } overflow-hidden lg:hidden z-[9999] justify-center bg-white/50 transition-all duration-300 ease-in left-0 rounded-md text-black font-semibold right-0 fixed bottom-0  w-full flex-col gap-2 top-16`}
      >
        <Link
          onClick={() => setShow(!show)}
          href={"/"}
          className="py-2 hover:bg-primary hover:text-white border-b-primary w-full border text-center transition-colors duration-150"
        >
          Home
        </Link>
        <Link
          onClick={() => setShow(!show)}
          href={"/movies"}
          className="py-2 hover:bg-primary hover:text-white border-b-primary w-full border text-center transition-colors duration-150"
        >
          Movies
        </Link>
        <Link
          onClick={() => setShow(!show)}
          href={"/my-list"}
          className="py-2 hover:bg-primary hover:text-white border-b-primary w-full border text-center transition-colors duration-150"
        >
          My List
        </Link>
      </ul>
      {show && (
        <div className="h-screen fixed bottom-0 w-full bg-black/30 backdrop-blur-sm left-0 top-0 right-0"></div>
      )}
    </>
  );
}
