import Hero from "@/components/Hero";
import TopRated from "@/components/Top/TopRated";
import Popular from "@/components/popular/Popular";
import getData from "@/service/getMovies";

export default async function page() {
  const { results: movies } = await getData(`/movie/popular?`);
  const { results: rated } = await getData(`/movie/top_rated?`);
  const { results: playing } = await getData(`/movie/now_playing?`);

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
