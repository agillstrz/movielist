import { BiLogoInstagram } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="h-24 py-16 px-16 flex-col  bg-gradient-to-t from-black to-base  flex items-center  justify-center">
      {/* <div className="flex text-md font-semibold  flex-col ">
        <p>zemovies</p>
        <p>2023</p>
      </div> */}
      <div className="flex text-white items-center gap-x-1">
        <BsFacebook className=" text-[40px] p-2 " />
        <BsTwitter className=" text-[40px] p-2 " />
        <BiLogoInstagram className=" text-[40px] p-2 " />
      </div>
      <p className="text-sm">Copyright © 2023 </p>
      <p className="text-sm">zemovies</p>
    </div>
  );
}
