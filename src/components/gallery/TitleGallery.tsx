"use client";
import { useRouter } from "next/navigation";
import { MdPhotoLibrary } from "react-icons/md";
import Button from "../Button";
interface ButtonProps {
  id: String;
  title: String;
}
export default function TitleGallery({ title, id }: ButtonProps) {
  const { push } = useRouter();
  const handleNavigate = () => {
    // route.push(`/movies/gallery/${id}?title=${title}`);
    push(`/auth`);
  };
  return (
    <Button
      label="Gallery"
      icon={<MdPhotoLibrary />}
      className="py-2 px-4 hover:scale-105"
      onClick={handleNavigate}
    />
  );
}
