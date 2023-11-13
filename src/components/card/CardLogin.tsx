"use client";
import { AuthProps } from "@/utils";
import AUTH from "@/utils/Auth";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiSolidUserBadge } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";

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
    <div className="w-fit absolute z-10 py-20 bg-black rounded-lg  px-10 flex justify-center items-center">
      <div className="flex w-full items-center justify-center h-full flex-col gap-y-10">
        <div>
          <h1 className="font-semibold text-3xl">Welcome Back</h1>
          <p className="text-gray-500 font-medium text-md text-center">
            Silahkan Login
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          action=""
          className="flex flex-col gap-y-5 w-full "
        >
          <div className="relative px-2 bg-base flex-row-reverse  flex items-center gap-x-2 border border-primary  border-transparent border-b-white  h-10">
            <input
              placeholder="Username"
              type="text"
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-inherit  px-1 autofill:bg-primary   peer  outline-none h-full"
            />{" "}
            <label htmlFor="" className="   ">
              <BiSolidUserBadge size={35} />
            </label>
          </div>
          <label
            htmlFor=""
            className="flex relative px-2 bg-base items-center gap-x-2 border border-transparent border-b-white  h-10"
          >
            <RiLockPasswordFill size={35} />
            <input
              placeholder="Password"
              type={show ? "text" : "password"}
              className="w-full bg-inherit px-1   outline-none h-full"
            />
            <button
              type="button"
              onClick={(e) => setShow(!show)}
              className="absolute text-[25px] right-0"
            >
              {show ? <AiFillEye /> : <AiFillEyeInvisible />}
            </button>
          </label>
          <div className="flex flex-col gap-2 w-full">
            <button
              type="submit"
              disabled={loading}
              className={`py-2  px-5  flex justify-center items-center  transition-all duration-150 ease-linear bg-primary hover:bg-transparent border-primary border hover:border-primary rounded-lg`}
            >
              {loading ? (
                <AiOutlineLoading3Quarters className="animate-spin " />
              ) : (
                "Login"
              )}
            </button>
            <button
              type="button"
              onClick={() => signIn("google")}
              className={`py-2  gap-1    px-5  flex justify-center items-center  transition-all duration-150 ease-linear bg-primary hover:bg-transparent border-primary border hover:border-primary rounded-lg`}
            >
              Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
