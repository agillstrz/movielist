"use client";
import { UseFetchData } from "@/service/UseFetchData";
import CONSTANT from "@/utils/CONSTANT";
import YouTube from "react-youtube";
type videoProps = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: string;
  type: string;
  official: string;
  published_at: string;
  id: string;
};
export default function Trailer({ id, type }: { id: string; type: string }) {
  const { data, isLoading } = UseFetchData({
    url: `/${type}/${id}/videos?api_key=${CONSTANT.API_KEY}`,
  });
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="content  ">
      <h2 className="font-bold lg:mb-4 text-2xl">Videos</h2>
      <div className="flex gap-2  overflow-x-scroll ">
        {isLoading
          ? new Array(2)
              .fill(null)
              .map((m, index) => (
                <div
                  key={index}
                  className="rounded-lg h-[20rem] w-full overflow-hidden animate-pulse bg-white/20"
                ></div>
              ))
          : data?.results.map((video: videoProps) => (
              <div key={video.id}>
                <YouTube
                  opts={opts}
                  className="lg:h-[320px] lg:w-[32rem] h-[18rem] w-[20rem] border rounded-lg overflow-hidden border-transparent hover:shadow-secondary shadow-md hover:border-secondary "
                  videoId={video.key}
                />
              </div>
            ))}
      </div>
    </div>
  );
}
