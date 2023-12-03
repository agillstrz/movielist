"use client";
import { MoviesProps } from "@/utils";
import { useState } from "react";
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
  type: any;
}
export default function AddList({ id, desc, title, img, type }: buttonProps) {
  const [modal, setModal] = useState<modalProps>({
    message: "",
    show: false,
  });

  const handleAddList = () => {
    let data: any = [];

    const storedData = localStorage.getItem("data") || null;

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      localStorage.setItem(
        "data",
        JSON.stringify([...parsedData, { id, title, desc, img, type }])
      );
    } else {
      localStorage.setItem(
        "data",
        JSON.stringify([{ id, title, desc, img, type }])
      );
    }
    // const hasil = datas.find((m: MoviesProps) => m.id == id);
    // if (hasil) {
    //   setModal({ show: true, message: "Movie Sudah Ada" });
    // } else {
    //   localStorage.setItem("data", JSON.stringify({ id, title, desc }));
    // }
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
