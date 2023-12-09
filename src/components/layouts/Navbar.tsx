"use client";
import { MyContext } from "@/context/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Profile from "../commons/Profile";
import ModalSearch from "../modals/ModalSearch";
import NavMobile from "./NavMobile";
export default function Navbar() {
  const currentRoute = usePathname();
  const { count }: any = useContext(MyContext);
  const [scroll, setScroll] = useState<Boolean>(false);
  const [toggle, setToggle] = useState({
    name: "",
    show: false,
  });
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
      name: "Movies",
      path: "/movie",
      childs: [
        {
          label: "Now Playing",
          path: "now-playing",
        },
        {
          label: "Popular",
          path: "popular",
        },
        {
          label: "Top Rated",
          path: "top-rated",
        },
        {
          label: "Up Coming",
          path: "up-coming",
        },
      ],
    },
    {
      name: "Tv Show",
      path: "/tv",
      childs: [
        {
          label: "Airing Today",
          path: "airing-today",
        },
        {
          label: "Popular",
          path: "popular",
        },
        {
          label: "Top Rated",
          path: "top-rated",
        },
      ],
    },
    // {
    //   name: "Genre",
    //   path: "/genre",
    // },
  ];
  return (
    <div
      className={`flex px-4 lg:px-16 shadow-md backdrop-blur-sm   bg z-[999] fixed w-full top-0 left-0  h-16 ${
        scroll && " bg-base/40    "
      } justify-between  items-center`}
    >
      <ul className=" hidden lg:flex items-center h-full relative text-md gap-x-14 justify-between">
        <Link href={"/"} className="z-[999]">
          zeMovies
        </Link>
        {menus.map((m, index) => (
          <li
            onClick={() => setToggle({ name: m.name, show: !toggle.show })}
            key={index}
            className={` ${
              currentRoute.includes(`${m.path}`)
                ? "font-semibold text-secondary"
                : "text-white font-medium"
            } relative cursor-pointer h-full hover:text-secondary gap-x-1 flex items-center tracking-wide group`}
          >
            <span className="flex  items-center gap-1">
              {m.name}

              {m.path === "/my-list" && count !== 0 && (
                <div className="relative">
                  <p className="absolute text-[12px] font-semibold p-1 -right-4 text-primary h-4 w-4 flex justify-center items-center rounded-full bg-white -top-4 text-center z-10">
                    {count !== 0 && count}
                  </p>
                </div>
              )}
            </span>
            {m.childs && (
              <>
                <button
                  className={`${
                    toggle.name == m.name && toggle.show && "rotate-180"
                  }`}
                >
                  <IoIosArrowDown />
                </button>
                <div className="absolute hidden bg-base text-white border border-white/20 shadow-md h-fit p-1  gap-2 font-semibold text-sm  w-32 rounded-md  group-hover:flex flex-col inset-0 top-12 z-[999]">
                  {m.childs.map((child, index) => (
                    <Link
                      href={`${m.path}/${child.path}`}
                      key={index}
                      className="block hover:bg-secondary/50 w-full rounded-md p-1"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div
              className={`h-[3px] bg-[#6d28d9] ${
                currentRoute.includes(`${m.path}`) ? "w-full" : "w-0"
              } absolute  left-0 bottom-0 group-hover:w-full transition-all duration-150`}
            ></div>
          </li>
        ))}
        <Link className="hover:text-secondary cursor-pointer" href={"/my-list"}>
          My List
        </Link>
      </ul>
      <NavMobile />
      <div className="lg:flex hidden relative items-center gap-x-2">
        <ModalSearch />
        <Profile />
      </div>
    </div>
  );
}
