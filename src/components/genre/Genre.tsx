"use client";
import axiosInstance from "@/config/axiosInstance";
import { GenreProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import { useEffect, useState } from "react";

export default function Genre({ setDatas }: any) {
  const [genre, setGenre] = useState<any>([]);

  function getGenre() {
    axiosInstance
      .get(`/genre/movie/list?api_key=${CONSTANT.API_KEY}`)
      .then((res) => {
        setGenre(res.data.genres);
      });
  }

  const getByGenre = (id: number) => {
    setDatas([]);
    axiosInstance
      .get(`/discover/movie?api_key=${CONSTANT.API_KEY}&with_genres=${id}`)
      .then((res) => {
        setDatas(res.data.results);
      });
  };

  useEffect(() => {
    getGenre();
  }, []);
  return (
    <>
      {genre.length <= 1
        ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((m) => (
            <button
              key={m}
              className="w-24 animate-pulse bg-white/20 rounded-md  h-5 font-bold text-sm "
            ></button>
          ))
        : genre.map((genres: GenreProps) => (
            <button
              onClick={() => getByGenre(genres.id)}
              key={genres.id}
              className="px-3 py-1 font-bold text-sm hover:bg-primary/80    bg-primary rounded-full "
            >
              {genres.name}
            </button>
          ))}
    </>
  );
}
