"use client";
import { MyContext } from "@/context/Context";
import { MoviesProps } from "@/utils";
import { getCookie } from "cookies-next";
import { useContext, useState } from "react";
import { MdNoteAdd } from "react-icons/md";
import Button from "../Button";
interface modalProps {
  message?: string;
  show?: boolean;
}
interface buttonProps {
  id: number | String;
  desc: String;
  title: String;
  img: String;
}
export default function AddList({ id, desc, title, img }: buttonProps) {
  const [modal, setModal] = useState<modalProps>({
    message: "",
    show: false,
  });
  const { setFav, fav }: any = useContext(MyContext);

  const handleAddList = () => {
    const hasil = fav.find((n: MoviesProps) => n.id == id);
    if (hasil) {
      setModal({ show: true, message: "Movie Sudah Ada" });
      setTimeout(() => {
        setModal({ show: false, message: "" });
      }, 1000);
      return;
    }
    if (getCookie("token")) {
      setFav([
        ...fav,
        {
          title,
          desc,
          id,
          img,
        },
      ]);
    } else {
      setModal({ show: true, message: "" });
      setTimeout(() => {
        setModal({ show: false, message: "" });
      }, 1000);
    }
  };
  return (
    <>
      {modal.show && (
        <div className="h-screen bg-black/40 fixed z-[9999] top-0  left-0 w-full flex justify-center items-center ">
          <div className="bg-white text-black w-56 h-fit flex flex-col  items-center rounded-lg py-4">
            <h1 className="text-lg font-semibold">Login Terlebih Dahulu</h1>
            <button className="p-2 rounded-full text-black bg-secondary border border-white">
              <p>{modal.message}</p>
            </button>
          </div>
        </div>
      )}

      <Button
        label="Add List"
        icon={<MdNoteAdd />}
        className="py-2 px-2 text-sm "
        onClick={handleAddList}
      />
    </>
  );
}
