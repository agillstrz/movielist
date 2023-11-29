"use client";
import { MoviesProps } from "@/utils";
import { usePathname, useRouter } from "next/navigation";

export default function Card({ datas }: { datas: MoviesProps }) {
  const router = useRouter();
  const path = usePathname();
  const routePath = datas.media_type
    ? datas.media_type
    : path.includes("/tv")
    ? "tv"
    : "movie";
  return (
    <div
      onClick={() => router.push(`/${routePath}/detail/${datas.id}`)}
      className="lg:h-[21rem] lg:w-[14rem] w-44 h-[16rem]  border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-secondary flex flex-col gap-y-2   rounded-xl overflow-hidden"
    >
      <div
        className="h-full relative group  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold bottom-2 right-2  w-10  h-10 bg-secondary rounded-full flex justify-center items-center">
          {Number(datas.vote_average).toFixed(1)}
        </div>
        <div className="absolute gap-2 group-hover:bg-black/70 left-0 w-full h-full top-0  flex flex-col justify-center items-center">
          <div className="opacity-0 text-center group-hover:opacity-100 transition-all duration-150 ease-in">
            <h4 className="text-lg">{datas?.title || datas?.name} </h4>
            <p>
              {datas.release_date?.split("-")[0] ||
                datas.first_air_date?.split("-")[0]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
