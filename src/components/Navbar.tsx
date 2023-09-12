"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
export default function Navbar() {
  const currentRoute = usePathname();

  const menus = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "Movies",
      path: "/movies",
    },
    {
      name: "My List",
      path: "/my-list",
    },
  ];
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if(window.scrollY > 5)
  //   });
  // });
  return (
    <div className="flex px-10 backdrop-blur-md bg z-[999] fixed w-full top-0 left-0 bg-base/40  h-16 shadow-md justify-between items-center">
      <div>Logo</div>
      <ul className="flex items-center h-full relative text-md gap-x-14 justify-between">
        {menus.map((m, index) => (
          <li
            className={` ${
              currentRoute === m.path
                ? "font-semibold text-red-600"
                : "text-white font-medium"
            } relative h-full gap-x-1 flex items-center tracking-wide group`}
          >
            <Link href={`${m.path}`}>{m.name}</Link>
            {m.path == "/my-list" && <>p</>}

            <div
              className={`h-[3px] bg-primary ${
                currentRoute === m.path ? "w-full" : "w-0"
              } absolute  left-0 bottom-0 group-hover:w-full transition-all duration-150`}
            ></div>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-x-2">
        {/* <label
          htmlFor=""
          className="border items-center justify-between pl-1 h-9 bg-white/50 w-44 rounded-lg  flex gap-x-2"
        >
          <BsSearch />
          <input
            type="text"
            placeholder="Search Movies"
            className="outline-none bg-transparent placeholder:text-white h-full w-full "
          />
        </label> */}
        {/* <div className="h-10 w-10 rounded-full border"></div> */}
        <div className="flex gap-x-1 items-center">
          <Link
            href={"/auth"}
            className="py-2 px-4 font-semibold bg-primary rounded-lg "
          >
            Sign in
          </Link>
          <button className="py-2 px-4 font-semibold bg-secondary rounded-lg ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
