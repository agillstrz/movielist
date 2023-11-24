"use client";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import { useRouter } from "next/navigation";

export default function CardRecommendation({ datas }: { datas: MoviesProps }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className="h-[23rem] w-56 border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-red-600 flex flex-col gap-y-2 rounded-xl "
    >
      <div
        className="h-full relative bg-cover bg-center flex flex-col overflow-hidden  w-56 "
        style={{
          backgroundImage: `url(${CONSTANT.poster}${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold top-2 right-2  w-8  h-8 bg-secondary rounded-full flex justify-center items-center">
          7.5
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
