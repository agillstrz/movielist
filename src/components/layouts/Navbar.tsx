"use client";
import { MyContext } from "@/context/Context";
import SearchMovies from "@/service/SearchMovies";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import Profile from "../commons/Profile";
import NavMobile from "./NavMobile";
import { IoSearch } from "react-icons/io5";
import Modal from "../modals/Modal";
import HookModal from "@/hooks/HookModal";
export default function Navbar() {
  const currentRoute = usePathname();
  const { count }: any = useContext(MyContext);
  const { modal, setModal } = HookModal();
  const { handleSearch, setName } = SearchMovies(setModal);
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
      <ul className=" hidden lg:flex items-center h-full relative text-md gap-x-14 justify-between">
        <button className="z-[999]">zeMovies</button>
        {menus.map((m, index) => (
          <li
            key={index}
            className={` ${
              currentRoute === m.path
                ? "font-semibold text-[#6d28d9]"
                : "text-white font-medium"
            } relative h-full gap-x-1 flex items-center tracking-wide group`}
          >
            <Link className="flex items-center gap-1" href={`${m.path}`}>
              {m.name}
              {m.path === "/my-list" && count !== 0 && (
                <div className="relative">
                  <p className="absolute text-[12px] font-semibold p-1 -right-4 text-primary h-4 w-4 flex justify-center items-center rounded-full bg-white -top-4 text-center z-10">
                    {count !== 0 && count}
                  </p>
                </div>
              )}
            </Link>
            {m.path == "/my-list" && <></>}

            <div
              className={`h-[3px] bg-[#6d28d9] ${
                currentRoute === m.path ? "w-full" : "w-0"
              } absolute  left-0 bottom-0 group-hover:w-full transition-all duration-150`}
            ></div>
          </li>
        ))}
      </ul>
      <NavMobile />
      <div className="lg:flex hidden relative items-center gap-x-2">
        <Modal modal={modal} setModal={setModal} label={<IoSearch size={25} />}>
          <form
            className="bg-base rounded-lg w-[30rem] py-5 px-5"
            onSubmit={handleSearch}
          >
            <div className="flex items-center gap-2">
              <IoSearch size={25} className="text-secondary" />
              <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="Search Movie"
                className="w-full h-full outline-none border-secondary transition-all duration-150 ease-in-out text-white bg-primary p-2 rounded-lg  border"
              />
            </div>
          </form>
        </Modal>
        <Profile />
      </div>
    </div>
  );
}
