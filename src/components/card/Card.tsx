"use client";
import { MoviesProps } from "@/utils";
import { useRouter } from "next/navigation";

export default function Card({ datas }: { datas: MoviesProps }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className="h-full group w-56 border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-red-600 flex flex-col gap-y-2  rounded-xl overflow-hidden"
    >
      <div
        className="h-full  relative  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold top-2 right-2  w-10  h-10 bg-primary rounded-full flex justify-center items-center">
          7.5
        </div>
        <div className="group-hover:h-full transition-all duration-150 ease-in bg-black/20">
          <div className="flex absolute -bottom-24 group-hover:bottom-0 bg-black/80 transition-all duration-150 ease-in p-1  w-full  px-1 flex-col gap-y-1">
            <h1 className="font-semibold text-sm text-red-600">
              {datas.title}
            </h1>
            <div className="flex justify-between items-center text-[12px]">
              <p className="">2018</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
