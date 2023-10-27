import CONSTANT from "@/utils/CONSTANT";
import ModalPicture from "../modals/ModalPicture";
import Image from "next/image";
type gallery = {
  aspect_ratio: number;
  height: number;
  iso_639_1: any;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
};
export default function GalleryImage(data: any) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {data.backdrops.map((img: gallery) => (
        <ModalPicture key={img.file_path}>
          <Image
            src={`${CONSTANT.foto}/${img.file_path}`}
            alt={img.file_path}
            width={img.width}
            height={img.height}
            className="cursor-pointer hover:border-primary border border-transparent rounded-lg transition-all duration-200 ease-in-out"
          />
        </ModalPicture>
      ))}
    </div>
  );
}
