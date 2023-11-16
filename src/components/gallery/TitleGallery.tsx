"use client";
import { useRouter } from "next/navigation";
import { MdPhotoLibrary } from "react-icons/md";
interface ButtonProps {
  className?: String;
  label: String;
  id: String;
  title: String;
}
export default function TitleGallery({
  className,
  label,
  id,
  title,
}: ButtonProps) {
  const route = useRouter();
  const handleNavigate = () => {
    // route.push(`/movies/gallery/${id}?title=${title}`);
    route.push(`/auth`);
  };
  return (
    <button
      onClick={handleNavigate}
      className={`${className} flex gap-1  text-white items-center py-2 px-4 hover:scale-105 transition-all duration-150 ease-linear active:scale-90 rounded-lg bg-primary font-semibold  `}
    >
      <MdPhotoLibrary />
      {label}
    </button>
  );
}
