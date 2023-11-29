import Hero from "@/components/Hero";
import CategoryHome from "@/components/category/CategoryHome";
import FetchDataServer from "@/service/FetchDataServer";

export default async function page() {
  const { results: movies } = await FetchDataServer(`/movie/popular?`);
  const { results: rated } = await FetchDataServer(`/movie/top_rated?`);
  const { results: playing } = await FetchDataServer(`/movie/now_playing?`);
  const { results: trending } = await FetchDataServer(
    `/trending/all/week?language=en-US?`
  );
  return (
    <div>
      <div className="overflow-hidden">
        <Hero results={trending} />
      </div>
      <div className="content">
        <CategoryHome label="Trending" results={trending} />
        <CategoryHome label="Popular" results={movies} />
        <CategoryHome label="Top Rated" results={rated} />
      </div>
    </div>
  );
}
