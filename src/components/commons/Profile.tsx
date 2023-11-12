import { signOut, useSession } from "next-auth/react";
import NotLogin from "./NotLogin";
import { deleteCookie } from "cookies-next";

export default function Profile() {
  const { data, status } = useSession();

  return (
    <>
      {data ? (
        <div className="flex relative cursor-pointer gap-2 group  items-center">
          <p>{data?.user?.name}</p>
          <div
            className="bg-cover bg-center h-10 w-10  rounded-full"
            style={{ backgroundImage: `url(${data?.user?.image})` }}
          ></div>
          <div className="absolute top-0 group-hover:top-10 group-hover:h-fit h-0 overflow-hidden transition-all duration-150 ease-in-out  bg-white group-hover:p-1  w-full text-black text-right  rounded-md right-0 ">
            <button
              className="font-semibold "
              onClick={() => {
                deleteCookie("token");
                signOut();
              }}
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <NotLogin />
      )}
    </>
  );
}
