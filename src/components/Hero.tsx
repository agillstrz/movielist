export default function Hero() {
  return (
    <div
      className="h-screen  flex justify-start items-end lg:items-center  w-full left-0 relative bg-cover top-0 bg-center"
      style={{
        backgroundImage: `url('https://www.themoviedb.org/t/p/original/qD211Hb5XwFxrszzBBe5EUYJerh.jpg')`,
      }}
    >
      <div className="absolute w-full h-full bg-black/60" />

      <div className="flex lg:w-[40%] z-10 m-4 lg:m-0  lg:mx-24 items-start flex-col gap-y-3">
        <button>Umur</button>
        <div className="flex gap-x-4">
          <p className="flex items-center gap-x-[2px]">
            <span>⭐</span>7.5
          </p>
          <p>2018</p>
          <p>2 Seasons</p>
        </div>
        <h1 className="font-semibold tracking-widest text-md lg:text-2xl">
          LOST IN SPACE
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
          totam omnis iusto ea repellendus doloremque earum eius dolorem ex
          amet.
        </p>
        <div className="flex gap-x-2 font-semibold uppercase">
          <button className="px-10 tracking-wide  rounded-full bg-primary  py-2">
            Watch
          </button>
          <button className="px-10 tracking-wide  rounded-full bg-secondary  py-2">
            Add List
          </button>
        </div>
      </div>
    </div>
  );
}
