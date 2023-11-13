"use client";
import { deleteCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";
import NotLogin from "./NotLogin";
export default function Profile() {
  const { data, status } = useSession();
  const [show, setShow] = useState<boolean>(false);
  return (
    <>
      {data ? (
        <div className="flex relative cursor-pointer gap-2 group  items-center">
          <p>{data?.user?.name}</p>
          <div
            className="bg-cover bg-center h-10 w-10  rounded-full"
            style={{ backgroundImage: `url(${data?.user?.image})` }}
          ></div>
          <AnimatePresence>
            {show && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ scale: 0 }}
                transition={{ duration: 0.15, ease: "easeInOut" }}
                className="absolute top-11  h-fit overflow-hidden transition-all duration-150 ease-in-out  bg-white p-1 w-full text-black text-right  rounded-md right-0 "
              >
                <button
                  className="font-semibold "
                  onClick={() => {
                    deleteCookie("token");
                    signOut();
                  }}
                >
                  logout
                </button>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            onClick={() => setShow(!show)}
            className={`${show && "rotate-180"} transition-all duration-150`}
          >
            <BiSolidDownArrow />
          </button>
        </div>
      ) : (
        <NotLogin />
      )}
    </>
  );
}
