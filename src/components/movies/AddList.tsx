"use client";
import { MoviesProps } from "@/utils";
import { useState } from "react";
import { MdNoteAdd } from "react-icons/md";
import Button from "../Button";
import { getSession } from "next-auth/react";
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
  const session = getSession();
  const handleAddList = () => {
    if (!session) {
      setModal({ show: true, message: "Anda Belum Login" });
      setTimeout(() => {
        setModal({ show: false });
      }, 1000);
      return;
    }
    let data: any = [];

    const storedData = localStorage.getItem("data") || null;

    if (storedData) {
      const parsedData = JSON.parse(storedData);
      const hasil = parsedData.find((m: MoviesProps) => m.id == id);
      if (hasil) {
        setModal({ show: true, message: "Movie Sudah Ada" });
        setTimeout(() => {
          setModal({ show: false });
        }, 1000);
      } else {
        localStorage.setItem(
          "data",
          JSON.stringify([...parsedData, { id, title, desc, img, type }])
        );
        return;
      }
    } else {
      localStorage.setItem(
        "data",
        JSON.stringify([{ id, title, desc, img, type }])
      );
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
