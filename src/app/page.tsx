import Hero from "@/components/Hero";
import Category from "@/components/category/Category";
import FetchDataServer from "@/service/FetchDataServer";

export default async function page() {
  const { results: popular } = await FetchDataServer(`/movie/popular?`);
  const { results: rated } = await FetchDataServer(`/movie/top_rated?`);
  const { results: playing } = await FetchDataServer(`/movie/now_playing?`);
  const { results: trending } = await FetchDataServer(
    `/trending/all/week?language=en-US?`
  );
  return (
    <div>
      <div className="overflow-hidden">
        <Hero />
      </div>
      <div className="content">
        <Category label="Trending" results={trending} />
        <Category label="Rated" results={rated} />
        <Category label="Popular" results={popular} />
        <Category label="Playing" results={playing} />
      </div>
    </div>
  );
}
