"use client";

import CardMovies from "@/components/card/CardMovies";
import Genre from "@/components/genre/Genre";
import SearchMovies from "@/service/SearchMovies";
import { UseFetchData } from "@/service/UseFetchData";
import CONSTANT from "@/utils/CONSTANT";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { BiSolidDownArrow } from "react-icons/bi";

export default function AllMovies() {
  const currentPage = useSearchParams().get("page") || 1;
  const { data, isLoading } = UseFetchData({
    url: `/movie/now_playing?api_key=${CONSTANT.API_KEY}&page=${currentPage}`,
    key: Number(currentPage),
  });
  const { handleSearch, setName } = SearchMovies();
  return (
    <>
      <div className="mb-4  overflow-hidden">
        <div className="flex gap-x-4 items-center justify-between">
          <h1 className="font-bold text-3xl ">Movies</h1>
        </div>
      </div>
      <div className="flex w-full  justify-center">
        <div className="grid hfull  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
          {isLoading
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
