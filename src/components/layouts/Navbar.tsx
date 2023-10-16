"use client";
import AUTH from "@/utils/Auth";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import NavMobile from "./NavMobile";
export default function Navbar() {
  const currentRoute = usePathname();
  const route = useRouter();
  const [scroll, setScroll] = useState<Boolean>(false);
  const [show, setShow] = useState<Boolean>(false);
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
        scroll ? "  bg-base/40    " : ""
      } justify-between items-center`}
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
        {AUTH.isAuthorization() ? (
          <div className="relative  ">
            <button onClick={() => setShow(!show)}>agil</button>
            <motion.div
              animate={{ opacity: show ? 1 : 0, height: show ? "full" : 0 }}
            >
              <ul className="flex h-fit absolute right-0 top-6 w-28 px-2 py-2 rounded-md text-right   bg-white  text-black flex-col gap-2">
                <li className=" ">Profile</li>
                <li className=" ">
                  <button
                    onClick={() => {
                      AUTH.signOut();
                      route.refresh();
                      setShow(false);
                    }}
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </motion.div>
            {/* <AnimatePresence>
              {show && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 100 }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex absolute w-full top-6  bottom-0 left-0 right-0 p-1 bg-white text-black flex-col gap-1"
                >
                  <li className="border border-b-primary border-t-0">
                    Profile
                  </li>
                  <li className="border border-b-primary border-t-0">Logout</li>
                </motion.ul>
              )}
            </AnimatePresence> */}
          </div>
        ) : (
          <div className="flex gap-x-1 items-center">
            <Link
              href={"/auth"}
              className="py-2 px-4 font-semibold bg-primary rounded-lg hover:bg-primary/75 transition-all duration-150 ease-linear "
            >
              Sign in
            </Link>
            <button className="py-2 px-4 font-semibold bg-secondary rounded-lg hover:bg-secondary/75 transition-all duration-150 ease-linear ">
              Sign up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
