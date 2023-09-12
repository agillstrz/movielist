import React from "react";

export default function Auth() {
  return (
    <div className="h-screen w-screen z-[9999] bg-base fixed flex items-center justify-center">
      <div
        className="py-24 px-5 w-[25%] border  rounded-lg    bg-cover bg-center relative"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1588546506381-74592e9b8a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')`,
        }}
      >
        {/* <div className="absolute w-full h-full top-0 left-0 z-0 bottom-0 bg-black/50" /> */}
        <div className="justify-center z-[999] w-full gap-y-2   h-full items-center flex flex-col">
          <div className="mb-10">
            <h1 className="font-semibold text-3xl">Welcome Back</h1>
            <p className="text-gray-500 font-medium text-md text-center">
              Silahkan Login
            </p>
          </div>
          <form action="" className="w-full flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="username"
              className="outline-none    transition-all duration-150 ease-in  h-10 w-full bg-transparent px-2 rounded-lg border"
              name=""
              id=""
            />
            <input
              type="password"
              placeholder="password"
              className="outline-none  h-10 w-full bg-transparent px-2 rounded-lg border"
              name=""
              id=""
            />
            <button className="py-2 px-10 font-bold bg-primary rounded-lg hover:bg-transparent border border-transparent hover:border-primary transition-all duration-150 ease-linear active:scale-95">
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
