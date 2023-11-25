import Hero from "@/components/Hero";
import Category from "@/components/category/Category";
import FetchDataServer from "@/service/FetchDataServer";

export default async function page() {
  const { results: movies } = await FetchDataServer(`/movie/popular?`);
  const { results: rated } = await FetchDataServer(`/movie/top_rated?`);
  const { results: playing } = await FetchDataServer(`/movie/now_playing?`);

  return (
    <>
      <div className="overflow-hidden">
        <Hero results={playing} />
      </div>
      <Category label="Popular" results={movies} />
      <Category label="Top Rated" results={rated} />
    </>
  );
}
