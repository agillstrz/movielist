import getData from "@/service/FetchDataServer";
import { MoviesProps } from "@/utils";
import CardRecommendation from "../card/CardRecommendation";

export default async function Reccomendation({ id }: { id: string }) {
  const { results } = await getData(
    `/movie/${id}/similar?language=en-US&page=1&`
  );
  return (
    <div className="content  ">
      <h2 className="font-bold mb-4 text-2xl">Reccomendation</h2>
      <div className=" flex w-full bg-scroll overflow-x-scroll gap-x-2 lg:gap-x-1 transition-all duration-500 ease-in-out">
        {results?.map((m: MoviesProps) => (
          <CardRecommendation datas={m} key={m.id} />
        ))}
      </div>
    </div>
  );
}
