import Hero from "@/components/Hero";
import TopRated from "@/components/Top/TopRated";
import Popular from "@/components/popular/Popular";
import getData from "@/service/getMovies";
import CONSTANT from "@/utils/CONSTANT";

export default async function Home() {
  const { results: movies } = await getData(
    `/movie/popular?api_key=${CONSTANT.API_KEY}`
  );
  const { results: rated } = await getData(
    `/movie/top_rated?api_key=${CONSTANT.API_KEY}`
  );
  const { results: playing } = await getData(
    `/movie/now_playing?api_key=${CONSTANT.API_KEY}`
  );
  return (
    <>
      <div className="overflow-hidden">
        <Hero results={playing} />
      </div>
      <TopRated results={movies} />
      <Popular results={rated} />
      {/* <div className=" p-10 w-full bg-black flex gap-x-3">
        <button className="px-8 py-1 bg-primary hover:bg-transparent border hover:border-primary border-transparent transition-all duration-150 ease-in rounded-full">
          Action
        </button>
        <button className="px-8 py-1 bg-primary hover:bg-transparent border hover:border-primary border-transparent transition-all duration-150 ease-in rounded-full">
          Action
        </button>
        <button className="px-8 py-1 bg-primary hover:bg-transparent border hover:border-primary border-transparent transition-all duration-150 ease-in rounded-full">
          Action
        </button>
        <button className="px-8 py-1 bg-primary hover:bg-transparent border hover:border-primary border-transparent transition-all duration-150 ease-in rounded-full">
          Action
        </button>
        <button className="px-8 py-1 bg-primary hover:bg-transparent border hover:border-primary border-transparent transition-all duration-150 ease-in rounded-full">
          Action
        </button>
      </div> */}
    </>
  );
}
