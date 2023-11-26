import InputSearch from "@/components/Search/InputSearch";
import Category from "@/components/category/Category";
import FetchDataServer from "@/service/FetchDataServer";

export default async function page() {
  const { results: airing } = await FetchDataServer(`/tv/airing_today?`);
  const { results: popular } = await FetchDataServer(`/tv/popular?`);
  const { results: rated } = await FetchDataServer(`/tv/top_rated?`);
  const { results: trending } = await FetchDataServer(
    `/trending/tv/week?language=en-US?`
  );
  return (
    <div className="layouts">
      <div className="flex gap-x-4 items-center justify-between">
        <h1 className="font-bold lg:text-3xl w-24 lg:w-36">Tv Show</h1>
        <InputSearch />
      </div>
      <Category path={`/tv/airing-today`} label="Airing" results={airing} />
      <Category path={`/tv/popular`} label="Trending" results={trending} />
      <Category path={`/tv/trending`} label="Popular" results={popular} />
      <Category path={`/tv/top-rated`} label="Top Rated" results={rated} />
    </div>
  );
}
