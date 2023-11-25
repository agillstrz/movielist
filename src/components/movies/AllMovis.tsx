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
  const [show, setShow] = useState<boolean>(false);
  const { push, replace } = useRouter();
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
            // onClick={() => getMovies()}
            className="px-3 py-1 font-bold text-sm hover:bg-primary/80    bg-primary rounded-full"
          >
            All
          </button>
          <Genre />
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
      <div className="flex flex-wrap w-full justify-center mt-5 gap-2">
        {/* {new Array(totalPage).fill(1).map((m, index) => (
          <button
            key={index}
            onClick={() => replace(`/movies?page=${index + 1}`)}
            className={`p-2 border border-white rounded-lg ${
              currentPage == index + 1 &&
              "border-secondary bg-secondary text-white"
            }`}
          >
            {index + 1}
          </button>
        ))} */}

        <button
          onClick={() => replace(`/movies?page=${Number(currentPage) - 1}`)}
          className={`p-2 px-5 border border-white hover:bg-secondary rounded-lg `}
        >
          Prev
        </button>
        <button
          onClick={() => replace(`/movies?page=${Number(currentPage) + 1}`)}
          className={`p-2 px-5 border border-white hover:bg-secondary rounded-lg `}
        >
          Next
        </button>
      </div>
    </>
  );
}
