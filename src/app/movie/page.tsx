import InputSearch from "@/components/Search/InputSearch";
import Category from "@/components/category/Category";
import FetchDataServer from "@/service/FetchDataServer";

export default async function page() {
  const { results: popular } = await FetchDataServer(`/movie/popular?`);
  const { results: rated } = await FetchDataServer(`/movie/top_rated?`);
  const { results: playing } = await FetchDataServer(`/movie/now_playing?`);
  const { results: trending } = await FetchDataServer(
    `/trending/movie/week?language=en-US?`
  );

  return (
    <div className="layouts ">
      <div className="n">
        <div className="flex gap-x-4 items-center justify-between">
          <h1 className="font-bold lg:text-3xl w-24 lg:w-36">Moviesx</h1>
          <InputSearch />
        </div>
        <Category
          path={`/movie/up-coming`}
          label="Trending"
          results={trending}
        />
        <Category path={`/movie/popular`} label="Popular" results={popular} />
        <Category path={`/movie/top-rated`} label="Top Rated" results={rated} />
      </div>
    </div>
  );
}
