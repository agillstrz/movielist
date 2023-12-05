"use client";
import React from "react";
import Modal from "./Modal";
import HookModal from "@/hooks/HookModal";
import SearchMovies from "@/service/SearchMovies";
import { IoSearch } from "react-icons/io5";

export default function ModalSearch() {
  const { modal, setModal } = HookModal();
  const { handleSearch, setName } = SearchMovies(setModal);
  return (
    <Modal modal={modal} setModal={setModal} label={<IoSearch size={25} />}>
      <form
        className="bg-base rounded-lg w-fit lg:w-[30rem] lg:p-5 p-3"
        onSubmit={handleSearch}
      >
        <div className="flex items-center gap-2">
          <IoSearch size={25} className="text-secondary" />
          <input
            autoFocus
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Search Movie"
            className="w-full h-full outline-none border-secondary transition-all duration-150 ease-in-out text-white bg-primary p-2 rounded-lg  border"
          />
        </div>
      </form>
    </Modal>
  );
}
