"use client";
import { MyContext } from "@/context/Context";
import { MoviesProps, MyListProps } from "@/utils";
import { useContext } from "react";
import { RxCross1 } from "react-icons/rx";

export default function ListMovies() {
  const { fav, setFav }: any = useContext(MyContext);
  const handleDelete = (e: any, id: any) => {
    const filter = fav.filter((m: MoviesProps) => m.id !== id);
    setFav(filter);
  };
  return (
    <>
      {" "}
      {!fav ? (
        <div className="h-screen flex justify-center items-center  absolute top-0">
          tidak ada
        </div>
      ) : (
        fav.map((m: MyListProps) => (
          <div
            key={m.id}
            className="lg:w-[60%] gap-x-2 p-2 items-start border h-fit rounded-lg flex relative"
          >
            <button
              onClick={(e) => handleDelete(e, m.id)}
              className="absolute p-2 rounded-full border cursor-pointer hover:text-primary shadow-md active:scale-95 hover:border-primary transition-all duration-150 top-2 right-2 text-[20px]"
            >
              <RxCross1 />
            </button>
            <div
              className="w-[40%] bg-cover bg-center   h-full"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w500/${m.img})`,
              }}
            ></div>
            <div className="w-full">
              <h1 className="text-lg font-semibold">{m.title}</h1>
              <div className="flex gap-x-2 text-sm">
                <p>⭐7.5</p>
                <p>2018</p>
              </div>
              <p className="text-sm">{m.desc}</p>
            </div>
          </div>
        ))
      )}
    </>
  );
}
