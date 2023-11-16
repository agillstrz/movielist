"use client";
import CardMovies from "@/components/card/CardMovies";
import SearchMovies from "@/service/SearchMovies";
import { GetDatas } from "@/service/getDatas";
import { MoviesProps } from "@/utils";
import { useSearchParams } from "next/navigation";
export default function MovieResults() {
  const searchParams = useSearchParams();
  const keyword: string | null = searchParams.get("search");
  const { data, loading }: { data: MoviesProps[]; loading: boolean } = GetDatas(
    {
      key: keyword,
      url: `/search/movie?query=${keyword}&include_adult=false&language=en-US`,
    }
  );

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
      </div>
      {!loading && data.length <= 0 && (
        <div className="h-screen flex justify-center w-full">
          <p>Data Not Found</p>
        </div>
      )}
      <div className="flex w-full  justify-center">
        <div className="grid h-full  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
          {loading
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
