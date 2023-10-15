"use client";
import { MyContext } from "@/context/Context";
import { MyListProps } from "@/utils";
import Image from "next/image";
import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

export default function ListMovies() {
  const { fav }: any = useContext(MyContext);
  return (
    <>
      {" "}
      {fav.length == 0 ? (
        <div className="h-screen flex justify-center items-center  absolute top-0">
          tidak ada
        </div>
      ) : (
        fav.map((m: MyListProps) => (
          <div
            key={m.id}
            className="w-1/2 gap-x-2 p-2 items-start border h-[10rem] rounded-lg flex relative"
          >
            <div className="absolute p-2 rounded-full border cursor-pointer hover:text-primary shadow-md active:scale-95 hover:border-primary transition-all duration-150 top-2 right-2 text-[20px]">
              <RxCross1 />
            </div>
            <div className="w-1/2  border h-full">
              <Image
                src={`https://image.tmdb.org/t/p/w500/${m.img}`}
                className="w-full object-cover  h-full"
                alt=""
                height={100}
                width={100}
              />
            </div>
            <div className="">
              <h1 className="text-lg font-semibold">{m.name}</h1>
              <div className="flex gap-x-2 text-sm">
                <p>⭐7.5</p>
                <p>2018</p>
              </div>
              <p className="text-sm">{m.desc}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
