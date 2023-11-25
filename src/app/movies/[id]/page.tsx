import Cast from "@/components/movies/Cast";
import Reccomendation from "@/components/movies/Reccomendation";
import getData from "@/service/FetchDataServer";
import { MoviesProps } from "@/utils";
import CONSTANT from "@/utils/CONSTANT";
import Image from "next/image";

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const datas: MoviesProps = await getData(`/movie/${id}?`);

  return (
    <div className=" bg-black overflow-hidden">
      <div
        className="  w-full relative bg-cover  min-h-screen  bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${datas.backdrop_path}')`,
        }}
      >
        <div className="absolute  w-full h-screen bg-gradient-to-t z-10 from-black to-black/50" />
        <div className="flex flex-col lg:flex-row gap-4 layouts items-center min-h-screen">
          <div className="lg:w-64 w-auto rounded-md overflow-hidden  z-20 h-[23rem]">
            <Image
              src={`${CONSTANT.foto}${datas.poster_path}`}
              width={200}
              height={200}
              alt="movies"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col lg:w-1/3  gap-2 z-20">
            <h2 className="font-bold text-3xl tracking-wider">{datas.title}</h2>
            <div className="flex text-sm gap-2 font-medium">
              <span>{datas.release_date}</span>
              <span>{Number(datas.vote_average).toFixed(2)}</span>
            </div>
            <div className="flex gap-1">
              {datas.genres.map((genre: any) => (
                <span
                  key={genre.id}
                  className="rounded-md  text-sm px-2 py-1 bg-zinc-600 text-white"
                >
                  {genre.name}
                </span>
              ))}
            </div>
            <p>{datas.overview}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 pb-4">
        <Cast id={id} />
        <Reccomendation id={id} />
      </div>
    </div>
  );
}
