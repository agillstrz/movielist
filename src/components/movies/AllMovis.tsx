"use client";

interface Movieslist {
  datas: MoviesProps;
}
import CardMovies from "@/components/card/CardMovies";
import Genre from "@/components/genre/Genre";
import axiosInstance from "@/config/axiosInstance";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import React, { useEffect, useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function AllMovies() {
  const [data, setDatas] = useState<Movieslist[]>([]);
  const [show, setShow] = useState<boolean>(false);
  const [page, setPages] = useState<number>(1);
  const [name, setName] = useState<string>("");
  const [loading, setLoading] = useState<Boolean>(false);

  function getMovies() {
    setLoading(true);
    axiosInstance
      .get(`/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${page}`)
      .then((res) => {
        setDatas(res.data.results);
        setLoading(false);
      });
  }

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name == "") {
      getMovies();
    } else {
      setLoading(true);
      setDatas([]);
      axiosInstance
        .get(
          `/search/movie?query=${name}&include_adult=false&language=en-US&page=1?api_key=${CONSTANT.API_KEY}`
        )
        .then((res) => {
          setDatas(res.data.results);
          setLoading(false);
        });
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="mb-4  overflow-hidden">
        <div className="flex gap-x-4 items-center justify-between">
          <h1 className="font-bold text-3xl ">Movies</h1>
          <form onSubmit={handleSearch} action="" className="w-full">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Find Movies..."
              className="outline-none bg-transparent px-2 h-12 w-full focus:rounded-lg border-b-primary border  border-transparent focus:border-primary"
              name=""
              id=""
            />
          </form>
        </div>
        <div
          className={`flex relative flex-wrap  gap-y-2 transition-all duration-300 ease-in  items-center mt-5 gap-x-2 ${
            show ? "lg:h-[80px]" : "lg:h-9"
          }`}
        >
          <button
            onClick={() => getMovies()}
            className="px-3 py-1 font-bold text-sm hover:bg-primary/80    bg-primary rounded-full"
          >
            All
          </button>
          <Genre setDatas={setDatas} />
          <button
            onClick={() => setShow(!show)}
            className={`absolute ${
              show && "rotate-[180deg] text-primary"
            } text-lg md:block hidden right-0 transition-all duration-300 ease-in `}
          >
            <BiSolidDownArrow />
          </button>
        </div>
      </div>
      <div className="flex w-full  justify-center">
        <div className="grid hfull  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
          {data.length <= 0 || loading
            ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                <div
                  key={m}
                  className="h-[18rem] rounded-lg w-full animate-pulse bg-white/20"
                ></div>
              ))
            : data.map((m: any) => <CardMovies key={m.id} datas={m} />)}
        </div>
      </div>
    </>
  );
}