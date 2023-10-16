"use client";
import { MoviesProps } from "@/utils";
import { useEffect, useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";

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
          <div className="absolute w-full h-full bg-black/40" />

          <div className="flex lg:w-[40%] z-10 m-4 lg:m-0  lg:mx-24 items-start flex-col gap-y-3">
            {/* <button>{m}</button> */}
            <div className="flex gap-x-4">
              <p className="flex items-center gap-x-[2px]">
                <span>⭐</span>
                {movie.vote_average}
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
