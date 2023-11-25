"use client";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero({ results }: { results: MoviesProps[] }) {
  const [next, setNext] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      if (next == 2) {
        setNext(0);
      } else setNext((prev) => prev + 1);
    }, 3000);
  }, [next]);
  return (
    <div className="flex overscroll-hidden relative w-screen flex-row h-screen ">
      {/* <div
        onClick={() => setNext((prev) => prev + 1)}
        className={`absolute z-[20] left-0 text-5xl  p-1 rounded-full cursor-pointer hover:text-white  bg-black/80 text-primary top-1/2 `}
      >
        <MdOutlineArrowBackIosNew />
      </div> */}
      {results?.map((movie) => (
        <div
          key={movie.id}
          className="h-full w-full flex flex-shrink-0  justify-start items-end lg:items-center relative bg-cover transition-all duration-1000 ease-outx  bg-center -"
          style={{
            backgroundImage: `url(https://www.themoviedb.org/t/p/original/${movie.backdrop_path})`,
            transform: `translateX(-${next * 100}%)`,
          }}
        >
          <div className="absolute w-full h-full bg-gradient-to-t from-black to-black/50 " />

          <div className="flex pb-5 lg:pb-0 lg:w-[40%] z-10 m-4 lg:m-0  lg:mx-24 items-start flex-col gap-y-3">
            <Image
              src={`${CONSTANT.foto}${movie.poster_path}`}
              alt={"img"}
              width={100}
              height={100}
              className="h-[10rem] w-auto lg:hidden"
            />
            <div className="flex gap-x-4">
              <p className="flex items-center gap-x-[2px]">
                <span>⭐</span>
                {Number(movie.vote_average).toFixed(2)}
              </p>
              <p>{movie.release_date}</p>
            </div>
            <h1 className="font-semibold tracking-widest text-md lg:text-4xl">
              {movie.title}
            </h1>
            <p>{movie.overview}</p>
            <div className="flex gap-x-2 font-semibold uppercase">
              <button className="px-12 tracking-wide  rounded-full bg-primary  py-2">
                Watch
              </button>
              <button className="px-12 tracking-wide  rounded-full bg-secondary  py-2">
                Add List
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
