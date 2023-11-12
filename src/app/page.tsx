import Hero from "@/components/Hero";
import TopRated from "@/components/Top/TopRated";
import Popular from "@/components/popular/Popular";
import getData from "@/service/getMovies";
import { getToken } from "next-auth/jwt";
import { NextRequest } from "next/server";

export default async function page(req: NextRequest) {
  const { results: movies } = await getData(`/movie/popular?`);
  const { results: rated } = await getData(`/movie/top_rated?`);
  const { results: playing } = await getData(`/movie/now_playing?`);
  const token = await getToken({
    req,
    secret: "rahasia123",
  });
  console.log(token);
  return (
    <>
      <div className="overflow-hidden">
        <Hero results={playing} />
      </div>
      <TopRated results={movies} />
      <Popular results={rated} />
    </>
  );
}
