"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function CardLogin() {
  return (
    <div className="w-[30%] h-[70%] grid grid-cols-1 shadow-lg rounded-lg bg-black gap-4 p-5 py-5 border">
      <div className="flex justify-center text-3xl  items-center gap-1 font-semibold">
        <h2>Login Sekarang</h2>
        <Image
          alt="img"
          height={30}
          width={30}
          src={`https://cdn1.iconfinder.com/data/icons/film-making-flat/60/Cinema-Drink-Cup-Movies-tv-theatre-256.png`}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button
          onClick={() => signIn("github")}
          className="w-full justify-center py-3 font-medium bg-base rounded-md text-lg flex items-center gap-1 hover:border-secondary border border-transparent hover:bg-base/80 transition-all duration-150 ease-in-out"
        >
          <BsGithub />
          Masuk dengan Github
        </button>
        <div className="flex justify-center items-center gap-3">
          <span className="w-full h-[2px] bg-primary"></span>
          <p className="font-medium text-lg tracking-wide">Atau</p>
          <span className="w-full h-[2px] bg-primary"></span>
        </div>
        <button
          onClick={() => signIn("google")}
          className="w-full justify-center hover:border-secondary border hover:bg-white/80 transition-all duration-150 ease-in-out text-black py-3 font-medium bg-white rounded-md text-lg flex items-center gap-1"
        >
          <FcGoogle />
          Masuk dengan Google
        </button>
      </div>
    </div>
  );
}
