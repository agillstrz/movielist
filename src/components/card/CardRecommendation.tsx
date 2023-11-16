"use client";
import { useRouter } from "next/navigation";
type Data = {
  adult: Boolean;
  backdrop_path: String;
  genre_ids: Number[];
  id: Number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: Number;
  poster_path: String;
  release_date: String;
  title: String;
  video: Boolean;
  vote_average: Number;
  vote_count: Number;
};

interface CardMoviesProps {
  datas: Data;
}
export default function CardRecommendation({ datas }: CardMoviesProps) {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className=" w-28 lg:w-44 border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-red-600 flex flex-col gap-y-2 rounded-xl overflow-hidden"
    >
      <div
        className="h-[8rem] relative  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
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
