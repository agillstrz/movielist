import FetchDataServer from "@/service/FetchDataServer";
import CONSTANT from "@/utils/CONSTANT";
import Image from "next/image";
import React from "react";
type castProps = {
  adult: false;
  gender: 2;
  id: 2037;
  known_for_department: "Acting";
  name: "Cillian Murphy";
  original_name: "Cillian Murphy";
  popularity: 87.106;
  profile_path: "/3DZAf9CwXmfV2HZOEdqeZAGTndV.jpg";
  cast_id: 3;
  character: "J. Robert Oppenheimer";
  credit_id: "613a940d9653f60043e380df";
  order: 0;
};
export default async function Cast({ id, type }: { type: string; id: string }) {
  const { cast } = await FetchDataServer(
    `/${type}/${id}/credits?language=en-US`
  );

  return (
    <div className="grid gap-2  content ">
      <h2 className="font-bold mt-5 lg:mt-0 mb-4 text-2xl">Full Cast</h2>
      <div className="flex gap-12 overflow-x-scroll ">
        {cast.slice(0, 10).map((m: castProps) => (
          <div key={m.cast_id} className="flex items-center flex-col">
            <div className="w-28 h-28 rounded-full border ">
              <Image
                src={`${CONSTANT.foto}${m.profile_path}`}
                alt="profile"
                className=" w-full h-full object-cover rounded-full p-2 "
                width={100}
                height={100}
              />
            </div>
            <div className=" text-sm text-center font-semibold text-secondary">
              <h2>{m.name}</h2>
              <h2 className="text-zinc-700">{m.original_name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
