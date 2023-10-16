import getData from "@/service/getMovies";
import CONSTANT from "@/utils/CONSTANT";
import Image from "next/image";

interface watchProps {
  logo_path: string;
  provider_id: number;
  provider_name: string;
  display_priority: number;
}

export default async function WatchProvider({ id }: { id: string }) {
  const res = await getData(
    `/movie/${id}/watch/providers?language=en-US&page=1&api_key=${CONSTANT.API_KEY}`
  );
  const { AU } = res.results;

  return (
    <div className="flex flex-wrap gap-2">
      {AU?.buy?.map((watch: watchProps) => (
        <Image
          key={watch.provider_id}
          src={`${CONSTANT.foto}${watch.logo_path}`}
          alt={watch.provider_name}
          className="h-6 rounded-xl "
          height={24}
          width={24}
        />
      ))}
    </div>
  );
}
