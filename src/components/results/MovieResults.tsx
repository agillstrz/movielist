"use client";
import SearchMovies from "@/service/SearchMovies";
import { UseFetchData } from "@/service/UseFetchData";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import { useSearchParams } from "next/navigation";
import Card from "../card/Card";
export default function MovieResults() {
  const searchParams = useSearchParams();
  const keyword: string | null = searchParams.get("search");
  const { handleSearch, setName, name } = SearchMovies();
  const { data, isLoading } = UseFetchData({
    url: `/search/multi?query=${keyword}&include_adult=false&language=en-US&page=1?api_key=${CONSTANT.API_KEY}`,
    key: keyword,
  });

  return (
    <>
      <div className="mb-4  overflow-hidden">
        <div className="flex gap-x-4 items-center justify-between">
          <h1 className="font-bold text-3xl ">Search</h1>
          <form onSubmit={handleSearch} action="" className="w-full z-10">
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Find Movies..."
              className="outline-none bg-transparent px-2 h-12 w-full focus:rounded-lg border-b-primary border  border-transparent focus:border-primary"
              name=""
              id=""
              defaultValue={String(keyword)}
            />
          </form>
        </div>
      </div>

      <div className="flex w-full h-screen  justify-center">
        <div className="grid h-full  w-full  place-items-center gap-3 lg:gap-y-3 lg:gap-x-5 grid-cols-2 lg:grid-cols-5">
          {isLoading ? (
            <div className="absolute inset-0 h-screen flex justify-center items-center">
              <p>Searching {name}...</p>
            </div>
          ) : (
            data?.results.map((m: MoviesProps) => <Card key={m.id} datas={m} />)
          )}
        </div>
      </div>
    </>
  );
}
