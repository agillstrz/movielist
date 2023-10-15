"use client";
import { AuthProps } from "@/utils";
import AUTH from "@/utils/Auth";
import React, { useState } from "react";
import {
  AiFillEye,
  AiFillEyeInvisible,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import { BiSolidUserBadge } from "react-icons/bi";
import { RiLockPasswordFill } from "react-icons/ri";
import "./login.css";
import { useRouter } from "next/navigation";

export default function Auth() {
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
    setLoading(true);
    setTimeout(() => {
      AUTH.storeInfoCookie(form);
      setLoading(false);
      router.push("/");
    }, 1000);
  };

  return (
    <div className="flex w-screen h-screen  z-[9999] bg-base fixed">
      <div
        className="w-[60%] relative bg-cover bg-center h-full"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488554378835-f7acf46e6c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80')`,
        }}
      >
        <div className="absolute h-full w-full bg-black/40"></div>
      </div>
      <div className="w-[40%] px-20 flex justify-center items-center">
        <div className="flex w-full items-center justify-center h-full flex-col gap-y-2">
          <h1 className="font-semibold text-3xl">Welcome Back</h1>
          <p className="text-gray-500 font-medium text-md text-left">
            Silahkan Login
          </p>
          <form
            onSubmit={handleSubmit}
            action=""
            className="flex flex-col gap-y-8 w-full "
          >
            <div className="relative flex-row-reverse  flex items-center gap-x-2 border border-primary  border-transparent border-b-white  h-12">
              <input
                placeholder="Username"
                type="text"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent px-1 autofill:bg-primary   peer  outline-none h-full"
              />{" "}
              <label htmlFor="" className="   ">
                <BiSolidUserBadge size={35} />
              </label>
              {/* {loading && (
                <span className="text-red-600 text-sm">Email harus sesuai</span>
              )} */}
            </div>
            <label
              htmlFor=""
              className="flex relative items-center gap-x-2 border border-transparent border-b-white  h-12"
            >
              <RiLockPasswordFill size={35} />
              <input
                placeholder="Password"
                type={show ? "text" : "password"}
                className="w-full bg-transparent px-1   outline-none h-full"
              />
              <button
                type="button"
                onClick={(e) => setShow(!show)}
                className="absolute text-[30px] right-0"
              >
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </button>
            </label>
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
          </form>
        </div>
      </div>
    </div>
  );
}
