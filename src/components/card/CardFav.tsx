"use client";

import { useRouter } from "next/navigation";

export default function CardFav({ session }: any) {
  let data: any = [];

  const storedData = localStorage.getItem("data") || null;
  const { push, refresh } = useRouter();
  if (storedData) {
    const parsedData = JSON.parse(storedData);

    if (parsedData && Object.keys(parsedData).length !== 0) {
      data = parsedData;
    }
  }
  if (storedData == null || data.length == 0) {
    return (
      <div className="flex absolute inset-0 items-center justify-center h-screen">
        Tidak Ada
      </div>
    );
  }
  if (!session) {
    push("/");
    return;
  }
  return (
    <>
      {data.map((m: any) => (
        <div
          key={m.id}
          className="w-full  rounded-lg  items-center flex flex-col border border-secondary cursor-pointer gap-x-2 p-2  shadow-md hover:shadow-secondary h-fit rounded-lgrelative"
        >
          <div
            onClick={() => push(`/${m.type}/detail/${m.id}`)}
            className="w-56 h-72 bg-center bg-cover "
            style={{
              backgroundImage: `url(https://image.tmdb.org/t/p/original/${m.img})`,
            }}
          ></div>
          <div className="w-full font-semibold">
            <p className="text-[12px]">{m.type}</p>
            <h1 className="text-lg ">{m.title}</h1>
            <div className="flex gap-x-2 text-sm">
              <p>⭐7.5</p>
              <p>2018</p>
            </div>
          </div>
        </div>
      ))}
      <button
        onClick={() => {
          localStorage.removeItem("data");
          refresh();
        }}
        className="col-span-3 px-5 py-2 bg-secondary rounded-md hover:bg-base transition-all duration-150 ease-linear border border-base hover:border-secondary active:scale-95"
      >
        Delete All
      </button>
    </>
  );
}
