"use client";
import { MyContext } from "@/context/Context";
import { getCookie } from "cookies-next";
import { useContext, useState } from "react";
import { MdNoteAdd } from "react-icons/md";

export default function AddList({ id, desc, title, img }: any) {
  const [show, setShow] = useState<Boolean>(false);
  const { setFav, fav }: any = useContext(MyContext);

  return (
    <>
      {show && (
        <div className="h-screen bg-black/40 fixed z-[9999] top-0  left-0 w-full flex justify-center items-center ">
          <div className="bg-white text-black w-56 h-fit flex flex-col  items-center rounded-lg py-4">
            <h1 className="text-lg font-semibold">Login Terlebih Dahulu</h1>
            <button className="p-2 rounded-full bg-primary border border-white">
              ❕
            </button>
          </div>
        </div>
      )}
      <button
        onClick={() => {
          if (getCookie("token")) {
            setFav([
              ...fav,
              {
                title,
                desc,
                id,
                img,
              },
            ]);
          } else {
            setShow(true);
            setTimeout(() => {
              setShow(false);
            }, 1000);
          }
        }}
        className="py-2 flex items-center gap-1 px-4 hover:scale-105 transition-all duration-150 ease-linear active:scale-90 rounded-lg bg-primary font-semibold"
      >
        <MdNoteAdd />
        Add List
      </button>
    </>
  );
}