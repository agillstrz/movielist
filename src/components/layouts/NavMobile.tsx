"use client";
import { getCookie } from "cookies-next";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

export default function NavMobile() {
  const [show, setShow] = useState<Boolean>(false);
  return (
    <div className="lg:hidden w-full">
      <div className="w-full flex justify-end">
        <button
          onClick={() => setShow(!show)}
          className="flex  z-[999] lg:hidden flex-col gap-2   relative"
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
      </div>
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-screen w-full fixed left-0 top-0 bg-black/80 backdrop-blur-sm z-[9999]"
          >
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{
                delayChildren: 0.8,
              }}
              className="h-screen pt-2 px-3 text-white  w-[60%] bg-black top-0  right-0 fixed"
            >
              <ul
                className={`flex   overflow-hidden lg:hidden  justify-center  transition-all duration-300 ease-in  rounded-md k font-semibold   w-full flex-col gap-2 `}
              >
                <div className="flex justify-between items-center w-full">
                  <div className="flex mt-2 gap-2 items-center">
                    <div className="border rounded-full w-10 h-10"></div>
                    <p>{getCookie("name") && getCookie("name")}</p>
                  </div>
                  <button
                    onClick={() => setShow(!show)}
                    className="flex  z-[999] lg:hidden flex-col gap-2   relative"
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
                </div>
                <Link
                  onClick={() => setShow(!show)}
                  href={"/"}
                  className="py-2 hover:bg-primary  border-b-primary w-full border border-transparent text-center transition-colors duration-150"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  href={"/movies"}
                  className="py-2 hover:bg-primary  border-b-primary w-full border border-transparent text-center transition-colors duration-150"
                >
                  Movies
                </Link>
                <Link
                  onClick={() => setShow(!show)}
                  href={"/my-list"}
                  className="py-2 hover:bg-primary  border-b-primary w-full border border-transparent text-center transition-colors duration-150"
                >
                  My List
                </Link>
                <button
                  onClick={() => signOut()}
                  className="py-2 hover:bg-primary  border-b-primary w-full border border-transparent text-center transition-colors duration-150"
                >
                  Logout
                </button>
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* {show && (
        <div className="h-screen fixed bottom-0 w-full bg-black/30 blur-md left-0 top-0 right-0"></div>
      )} */}
    </div>
  );
}
