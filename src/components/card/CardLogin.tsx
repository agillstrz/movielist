"use client";
import { AuthProps } from "@/utils";
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

export default function CardLogin() {
  const [form, setForm] = useState<AuthProps>({
    token: "dwdindunsasna",
    role: 1,
    name: "",
  });
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setLoading(true);
    // setTimeout(() => {
    //   AUTH.storeInfoCookies(form);
    //   setLoading(false);
    //   router.push("/");
    // }, 1000);
  };
  return (
    // <div className="w-fit absolute z-10 py-20 bg-black rounded-lg  px-10 flex justify-center items-center">
    //   <div className="flex w-full items-center justify-center h-full flex-col gap-y-10">
    //     <div>
    //       <h1 className="font-semibold text-3xl">Welcome Back</h1>
    //       <p className="text-gray-500 font-medium text-md text-center">
    //         Silahkan Login
    //       </p>
    //     </div>
    //     <form
    //       onSubmit={handleSubmit}
    //       action=""
    //       className="flex flex-col gap-y-5 w-full "
    //     >
    //       <div className="relative px-2 bg-base flex-row-reverse  flex items-center gap-x-2 border border-primary  border-transparent border-b-white  h-10">
    //         <input
    //           placeholder="Username"
    //           type="text"
    //           onChange={(e) => setForm({ ...form, name: e.target.value })}
    //           className="w-full bg-inherit  px-1 autofill:bg-primary   peer  outline-none h-full"
    //         />{" "}
    //         <label htmlFor="" className="   ">
    //           <BiSolidUserBadge size={35} />
    //         </label>
    //       </div>
    //       <label
    //         htmlFor=""
    //         className="flex relative px-2 bg-base items-center gap-x-2 border border-transparent border-b-white  h-10"
    //       >
    //         <RiLockPasswordFill size={35} />
    //         <input
    //           placeholder="Password"
    //           type={show ? "text" : "password"}
    //           className="w-full bg-inherit px-1   outline-none h-full"
    //         />
    //         <button
    //           type="button"
    //           onClick={(e) => setShow(!show)}
    //           className="absolute text-[25px] right-0"
    //         >
    //           {show ? <AiFillEye /> : <AiFillEyeInvisible />}
    //         </button>
    //       </label>
    //       <div className="flex flex-col gap-2 w-full">
    //         <button
    //           type="submit"
    //           disabled={loading}
    //           className={`py-2  px-5  flex justify-center items-center  transition-all duration-150 ease-linear bg-primary hover:bg-transparent border-primary border hover:border-primary rounded-lg`}
    //         >
    //           {loading ? (
    //             <AiOutlineLoading3Quarters className="animate-spin " />
    //           ) : (
    //             "Login"
    //           )}
    //         </button>
    //         <button
    //           type="button"
    //           onClick={() => signIn("google")}
    //           className={`py-2  gap-1    px-5  flex justify-center items-center  transition-all duration-150 ease-linear bg-primary hover:bg-transparent border-primary border hover:border-primary rounded-lg`}
    //         >
    //           Google
    //         </button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
    <div className="w-[30%] grid grid-cols-1 shadow-lg rounded-lg bg-black gap-4 p-5 border">
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
