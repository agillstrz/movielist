"use client";
import { BiSolidSearch } from "react-icons/bi";
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

interface Movieslist {
  datas: Data;
}
import React, { useEffect, useState } from "react";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";
import CardMovies from "@/components/card/CardMovies";
// async function getTvShow() {
//   const res = await axiosInstance.get(
//     `/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${1}`
//   );
//   return res.data;
// }
export default function TvShow() {
  //   const { dates, page, results } = await getTvShow();
  const [data, setDatas] = useState<Movieslist[]>([]);
  const [page, setPages] = useState<number>(1);
  const [loading, setLoading] = useState<Boolean>(false);
  useEffect(() => {
    setLoading(true);
    axiosInstance
      .get(`/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${page}`)
      .then((res) => {
        setDatas(res.data.results);
        setPages((prevPage) => (prevPage += 1));
        setLoading(false);
      });
  }, []);
  return (
    <div className="layouts min-h-screen">
      <div className="flex gap-x-4 justify-between mb-4">
        <h1 className="font-bold text-3xl ">Movies</h1>
      </div>

      <div className="flex w-full  justify-center">
        <div className="grid hfull  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
          {data && !loading
            ? data.map((m: any) => <CardMovies key={m.id} datas={m} />)
            : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
                <div
                  key={m}
                  className="h-[20rem] rounded-lg w-full animate-pulse bg-white/20"
                ></div>
              ))}
        </div>
      </div>
      <div className="flex  items-end w-full my-5 justify-center">
        {!loading && (
          <button
            onClick={() => {
              setPages((prevPage) => (prevPage += 1));
              axiosInstance
                .get(
                  `/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${page}`
                )
                .then((res) => {
                  setDatas([...data, ...res.data.results]);
                });
            }}
            className="px-24 py-2 bg-primary border border-transparent transition-all duration-150 ease-linear hover:bg-transparent hover:border-primary "
          >
            Show More
          </button>
        )}
      </div>
    </div>
  );
}
