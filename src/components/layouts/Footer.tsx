import { BiLogoInstagram } from "react-icons/bi";
import { BsFacebook, BsTwitter } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="h-24 py-10 px-16  bg-base flex items-center  justify-between">
      <div className="flex text-md font-semibold  flex-col ">
        <p>zemovies</p>
        <p>2023</p>
      </div>
      <div className="flex text-white items-center gap-x-1">
        <BsFacebook className="border text-[40px] p-2 rounded-full " />
        <BsTwitter className="border text-[40px] p-2 rounded-full " />
        <BiLogoInstagram className="border text-[40px] p-2 rounded-full " />
      </div>
    </div>
  );
}
