"use client";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import { usePathname, useRouter } from "next/navigation";

export default function CardRecommendation({ datas }: { datas: MoviesProps }) {
  const router = useRouter();
  const path = usePathname();
  const routePath = path.includes("/tv") ? "tv" : "movie";
  return (
    <div
      onClick={() => router.push(`/${routePath}/detail/${datas.id}`)}
      className="lg:h-[18rem] h-[14rem] w-auto  lg:w-48   cursor-pointer   flex flex-col gap-y-2 rounded-xl "
    >
      <div
        className="hover:border-secondary border border-transparent transition-all duration-150 ease-linear h-full relative bg-cover rounded-lg overflow-hidden  bg-center flex flex-col   w-36 lg:w-48 "
        style={{
          backgroundImage: `url(${CONSTANT.poster}${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold top-2 right-2  w-10  h-10 bg-secondary rounded-full flex justify-center p-1 items-center">
          {Number(datas.vote_average).toFixed(2)}
        </div>
        <div className="w-full h-full bg-gradient-to-b   flex items-end ">
          <h1 className="font-semibold  w-full bg-black/60  p-2 text-sm">
            {datas.title}
          </h1>
        </div>
      </div>
    </div>
  );
}
