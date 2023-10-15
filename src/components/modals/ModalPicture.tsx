"use client";
import React, { MouseEventHandler, ReactNode, useRef, useState } from "react";

export default function ModalPicture({ children }: { children: ReactNode }) {
  const modalRef = useRef(null);
  const [modal, setModal] = useState<boolean>(false);
  const close: MouseEventHandler = (e) => {
    e.preventDefault();
    if (e.target === modalRef.current) {
      setModal(false);
    }
  };
  return (
    <>
      <div onClick={() => setModal(true)}>{children}</div>
      {modal && (
        <div
          ref={modalRef}
          onClick={close}
          className="fixed h-screen w-full top-0 flex justify-center items-center bg-black/80 backdrop-blur-sm z-[9999]  left-0 right-0 bottom-0"
        >
          <div className="bg-white w-fit  overflow-hidden rounded-lg h-fit">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
