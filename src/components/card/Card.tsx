"use client";
import { MoviesProps } from "@/utils";
import { usePathname, useRouter } from "next/navigation";
import { MotionDiv } from "../animation/MotionDiv";
import AddList from "../movies/AddList";
import Image from "next/image";

export default function Card({
  datas,
  index,
}: {
  datas: MoviesProps;
  index?: number;
}) {
  const router = useRouter();
  const path = usePathname();
  const routePath = path.includes("tv")
    ? "tv"
    : path.includes("movie")
    ? "movie"
    : datas.media_type
    ? datas.media_type
    : !datas.media_type;

  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: index && index * 0.2,
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="lg:h-[21rem] relative lg:w-[14rem] w-44 h-[16rem]  border border-transparent   cursor-pointer transition-all duration-150 ease-linear hover:border-secondary flex flex-col gap-y-2   rounded-xl overflow-hidden"
    >
      <Image
        className="absolute inset-0 "
        fill={true}
        src={`https://image.tmdb.org/t/p/w500/${datas.poster_path}`}
        alt="pict"
        loading="lazy"
      />
      <div className="h-full relative group  w-full">
        <div className="absolute brightness-110 shadow-2xl border text-sm font-semibold bottom-2 right-2  w-10  h-10 bg-secondary rounded-full flex justify-center items-center">
          {Number(datas.vote_average).toFixed(1)}
        </div>
        <div className="absolute gap-2 group-hover:bg-black/70 left-0 w-full h-full top-0  flex flex-col justify-center items-center">
          <div className="opacity-0 flex flex-col gap-1 items-center justify-center group-hover:opacity-100 transition-all duration-150 ease-in">
            <button
              onClick={() => router.push(`/${routePath}/detail/${datas.id}`)}
              className="text-lg hover:underline"
            >
              <h4>{datas?.title || datas?.name} </h4>
              <p>
                {datas.release_date?.split("-")[0] ||
                  datas.first_air_date?.split("-")[0]}
              </p>
            </button>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}
