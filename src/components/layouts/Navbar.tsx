"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Profile from "../commons/Profile";
import NavMobile from "./NavMobile";
export default function Navbar() {
  const currentRoute = usePathname();

  const [scroll, setScroll] = useState<Boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  });
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

  return (
    <div
      className={`flex px-4 lg:px-16 shadow-md backdrop-blur-sm   bg z-[999] fixed w-full top-0 left-0  h-16 ${
        scroll && "  bg-base/40    "
      } justify-between  items-center`}
    >
      <button className="z-[999]">zeMovies</button>
      <ul className=" hidden lg:flex items-center h-full relative text-md gap-x-14 justify-between">
        {menus.map((m, index) => (
          <li
            key={index}
            className={` ${
              currentRoute === m.path
                ? "font-semibold text-red-600"
                : "text-white font-medium"
            } relative h-full gap-x-1 flex items-center tracking-wide group`}
          >
            <Link href={`${m.path}`}>{m.name}</Link>
            {m.path == "/my-list" && <></>}

            <div
              className={`h-[3px] bg-primary ${
                currentRoute === m.path ? "w-full" : "w-0"
              } absolute  left-0 bottom-0 group-hover:w-full transition-all duration-150`}
            ></div>
          </li>
        ))}
      </ul>
      <NavMobile />
      <div className="lg:flex hidden relative items-center gap-x-2">
        <Profile />
      </div>
    </div>
  );
}
