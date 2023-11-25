"use client";
import { MoviesProps } from "@/utils";
import { useRouter } from "next/navigation";

export default function Card({ datas }: { datas: MoviesProps }) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className="h-full border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-secondary flex flex-col gap-y-2 lg:w-56 w-36  rounded-xl overflow-hidden"
    >
      <div
        className="h-full relative group  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold bottom-2 right-2  w-10  h-10 bg-secondary rounded-full flex justify-center items-center">
          {Number(datas.vote_average).toFixed(2)}
        </div>
        <div className="absolute gap-2 group-hover:bg-black/70 left-0 w-full h-full top-0  flex flex-col justify-center items-center">
          <div className="opacity-0 text-center group-hover:opacity-100 transition-all duration-150 ease-in">
            <h4 className="text-lg  ">{datas?.title}</h4>
            <p>{datas.release_date.split("-")[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
