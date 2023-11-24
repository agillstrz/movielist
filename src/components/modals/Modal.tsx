"use client";
import HookModal from "@/hooks/HookModal";
import React, {
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useRef,
  useState,
} from "react";

export default function Modal({
  modal,
  setModal,
  children,
  label,
}: {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  label: string | any;
  children: ReactNode;
}) {
  const modalRef = useRef(null);

  const close: MouseEventHandler = (e) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      setModal(false);
    }
  };
  return (
    <>
      <button onClick={() => setModal(true)}>{label}</button>
      {modal && (
        <div
          ref={modalRef}
          onClick={close}
          className="fixed   lg:h-screen w-full top-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-[9999]  left-0 right-0 bottom-0"
        >
          {children}
        </div>
      )}
    </>
  );
}
