import Hero from "@/components/Hero";
import TopRated from "@/components/Top/TopRated";
import Popular from "@/components/popular/Popular";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";

async function getPopular() {
  const res = await axiosInstance.get(
    `/movie/popular?api_key=${CONSTANT.API_KEY}`
  );
  return res.data;
}
async function getRated() {
  const res = await axiosInstance.get(
    `/movie/top_rated?api_key=${CONSTANT.API_KEY}`
  );
  return res.data;
}
export default async function Home() {
  const { results } = await getPopular();
  const { results: data } = await getRated();

  return (
    <>
      <Hero />
      <TopRated results={data} />
      <Popular results={results} />
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
