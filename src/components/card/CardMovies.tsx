"use client";
import { MoviesProps } from "@/utils";
import { useRouter } from "next/navigation";
export default function CardMovies({ datas }: { datas: MoviesProps }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/movies/${datas.id}`)}
      className="h-[24rem]  border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-red-600 flex flex-col gap-y-2 w-full  rounded-xl overflow-hidden"
    >
      <div
        className="h-[80%] relative  w-full bg-cover bg-center "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500/${datas.poster_path})`,
        }}
      >
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold bottom-2 right-2  w-10  h-10 bg-primary rounded-full flex justify-center items-center">
          7.5
        </div>
        {/* <div
          onClick={() => {
            setFav([
              ...fav,
              {
                name: datas.title,
                desc: datas.overview,
                img: datas.poster_path,
              },
            ]);
          }}
          className="absolute z-50 brightness-110 shadow-2xl  text-sm font-semibold top-2 right-2  rounded-full flex justify-center items-center"
        >
          <MdFavorite className=" text-red-600 opacity-60 hover:opacity-100 transition-opacity duration-100 ease-in lg:text-[30px]" />
        </div> */}
      </div>
      <div className="flex justify-between">
        <div className="flex px-1 flex-col gap-y-1">
          <h1 className="font-semibold text-sm text-red-600">{datas.title}</h1>

          <div className="flex  items-center  gap-x-2 text-[12px]">
            <p className="">2018</p>
          </div>
        </div>
      </div>
    </div>
  );
}
