"use client";
import { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import Card from "../card/Card";
import { MoviesProps } from "@/utils";
type Data = {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
};

interface ResultsType {
  results: Data;
}
export default function TopRated({ results }: any) {
  const [curr, setCurr] = useState(0);
  let datas = results.length / 5;
  const nextSlide = () => {
    setCurr((curr) => (curr == Math.floor(datas) ? 0 : curr + 1));
  };
  const prevSlide = () => {
    setCurr((curr) => (curr == Math.floor(datas) ? curr - 1 : 0));
  };
  return (
    <>
      <div className=" lg:px-10 w-full overflow-hidden  bg-base">
        <h1 className="text-3xl font-semibold my-3">Top Rated</h1>
        <div className="w-full overflow-x-hidden  h-[17rem] gap-x-2 justify-between  relative flex ">
          <div
            onClick={prevSlide}
            className={`absolute z-[20] left-0 text-3xl lg:text-5xl  p-1 rounded-full cursor-pointer hover:text-white  bg-black/80 text-primary top-1/2 ${
              curr == 0 && "hidden"
            }`}
          >
            <MdOutlineArrowBackIosNew />
          </div>
          <div
            onClick={nextSlide}
            className={`absolute  z-[20] right-0 text-3xl lg:text-5xl cursor-pointer hover:text-white  p-1 rounded-full bg-black/80 text-primary top-1/2 ${
              datas == curr && "hidden"
            }`}
          >
            <MdOutlineArrowForwardIos />
          </div>
          <div
            className="flex  gap-x-1 transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(${-25 * curr}%)` }}
          >
            {results.map((m: any) => (
              <Card key={m.id} datas={m} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
