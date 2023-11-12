"use client";
import { MoviesProps } from "@/utils";
import { useRouter } from "next/navigation";
import AddList from "../movies/AddList";
export default function CardMovies({ datas }: { datas: MoviesProps }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className="h-[19rem]   border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-red-600 flex flex-col gap-y-2 w-full  rounded-xl overflow-hidden"
    >
      <div
        className="h-full relative group  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold bottom-2 right-2  w-10  h-10 bg-primary rounded-full flex justify-center items-center">
          7.5
        </div>
        <div className="absolute gap-2 group-hover:bg-black/70 left-0 w-full h-full top-0  flex flex-col justify-center items-center">
          <h4 className="text-lg opacity-0 group-hover:opacity-100 transition-all duration-150 ease-in text-center">
            {datas?.title}
          </h4>
          <AddList
            id={datas.id}
            title={datas.title}
            img={datas.backdrop_path}
            desc={datas.overview}
          />
        </div>
      </div>
    </div>
  );
}
