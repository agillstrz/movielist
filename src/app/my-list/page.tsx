import React from "react";

export default function page() {
  return (
    <div className="layouts flex justify-center">
      <div className="w-1/2 gap-x-2 p-2 items-start border h-[10rem] rounded-lg flex">
        <div className="  border h-full">
          <img
            src="https://image.tmdb.org/t/p/original/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg"
            className=" h-full"
            alt=""
          />
        </div>
        <div>
          <h1 className="text-lg font-semibold">Sound of Freedom</h1>p
        </div>
      </div>
    </div>
  );
}
