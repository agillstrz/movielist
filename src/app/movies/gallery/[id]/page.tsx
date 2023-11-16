import TittleGallery from "@/components/commons/ButtonGallery";
import GalleryImage from "@/components/gallery/GalleryImage";
import CONSTANT from "@/utils/CONSTANT";
import axios from "axios";
export default async function page({ params }: { params: { id: string } }) {
  const { id } = params;
  const { data } = await axios.get(
    `${CONSTANT.BASE_URL}/movie/${id}/images?api_key=${CONSTANT.API_KEY}`
  );
  return (
    <div className="layouts">
      <TittleGallery />
      <GalleryImage {...data} />
    </div>
  );
}
