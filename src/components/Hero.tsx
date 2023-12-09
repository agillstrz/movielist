import Image from "next/image";
export default function Hero() {
  return (
    <div className="h-screen content w-full flex relative   ">
      <Image
        className="absolute w-full h-full inset-0 object-cover"
        src={`/hero.jpg`}
        alt="hero"
        loading="lazy"
        fill={true}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-black/70 " />
      <div className="flex flex-col lg:flex-row justify-center items-center w-full z-10 h-full ">
        <div className="lg:w-1/2">
          <h1 className="lg:text-[50px] text-[40px] font-extrabold">
            Discover your favorite movies now on{" "}
            <span className="text-secondary">zemovies</span>
          </h1>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src={`/ironman.png`}
            alt="ironman"
            className="lg:h-[500px] w-auto  h-[250px]"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
