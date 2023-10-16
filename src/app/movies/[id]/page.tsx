import CardRecommendation from "@/components/card/CardRecommendation";
import ModalPicture from "@/components/modals/ModalPicture";
import axiosInstance from "@/config/axiosInstance";
import CONSTANT from "@/utils/CONSTANT";
import { AiFillPlaySquare } from "react-icons/ai";
import AddList from "./AddList";
import WatchProvider from "./WatchProvider";
import Image from "next/image";
async function getDetail(id: string) {
  const res = await axiosInstance.get(
    `/movie/${id}?api_key=${CONSTANT.API_KEY}`
  );
  return res.data;
}

async function getRelatedMovies(id: string) {
  const res = await axiosInstance.get(
    `/movie/${id}/similar?language=en-US&page=1&api_key=${CONSTANT.API_KEY}`
  );
  return res.data;
}

export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const datas = await getDetail(id);
  const { results } = await getRelatedMovies(id);
  return (
    <>
      <div
        className="  w-full relative bg-cover  bg-center"
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/original${datas.backdrop_path}')`,
        }}
      >
        <div className="absolute  w-full   h-screen bg-black/80" />
        <div className="flex w-full min-h-screen items-center">
          <div className="flex lg:pt-10  pt-20 lg:flex-row flex-col   gap-x-4 h-full items-center justify-center  w-full lg:mx-10">
            <div className="lg:w-1/2     h-[50%]  lg:h-[80%] z-20  flex  justify-center ">
              <div className="h-full  relative  lg:w-[65%] rounded-lg ">
                <ModalPicture>
                  <Image
                    className="lg:h-[31rem] h-[18rem]  w-full cursor-pointer rounded-lg"
                    src={`${CONSTANT.foto}${datas.poster_path}`}
                    alt="img"
                    width={500}
                    height={500}
                  />
                </ModalPicture>
                <div className="absolute flex overflow-hidden items-center  cursor-pointer transition-all duration-700 ease-in-out  group rounded-lg font-bold gap-x-2 p-3 bg-primary bottom-2 -right-8">
                  <AiFillPlaySquare className="lg:text-[40px] group-hover:animate-pulse " />
                  <p className=" group-hover:visible ">Play</p>
                </div>
              </div>
            </div>
            <div className="flex lg:w-1/2 z-10   m-4 lg:m-0   items-start flex-col gap-y-3">
              <AddList />
              <div className="flex flex-col   gap-x-4">
                <h1 className="font-semibold  tracking-widest text-md lg:text-2xl">
                  {datas.title}
                </h1>
                <div className="flex gap-x-2 items-center">
                  <p className="flex items-center gap-x-[2px]">
                    <span>⭐</span>
                    {/* {datas?.vote_average.split(".")[1].slice(0, 2)} */}
                    8.5
                  </p>
                  <p>2018</p>
                  <p>2 Seasons</p>
                </div>
              </div>

              <p className="text-sm">{datas.overview}</p>
              <div className="flex text-sm gap-x-5">
                <div className="flex text-md text-zinc-400 flex-col gap-y-1">
                  <p>Release date</p>
                  <p>Created by</p>
                  <p>Genre</p>
                </div>
                <div className="flex text-md  flex-col gap-y-1">
                  <p>{datas?.release_date}</p>
                  <p>Created by</p>
                  <ul className="flex gap-x-1">
                    {datas?.genres.map((m: { id: any; name: String }) => (
                      <li key={m.id} className="font-medium">
                        {m.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex gap-2 items-center my-3 lg:my-0 ">
                <h2 className="font-medium text-lg  ">Watch Providers</h2>
                <WatchProvider id={id} />
              </div>
              <div>
                <h2 className="font-medium text-lg  my-3 lg:my-0 lg:mb-3">
                  Related Movies
                </h2>
                <div className="flex gap-x-2">
                  {results.slice(0, 3).map((m: any, index: number) => (
                    <CardRecommendation key={index} datas={m} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
