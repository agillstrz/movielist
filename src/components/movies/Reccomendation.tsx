import getData from "@/service/FetchDataServer";
import { MoviesProps } from "@/utils";
import CardRecommendation from "../card/CardRecommendation";

export default async function Reccomendation({
  id,
  type,
}: {
  id: string;
  type: string;
}) {
  const { results } = await getData(`/${type}/${id}/similar?`);
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
