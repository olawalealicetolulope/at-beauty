import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-dvh bg-[url('/bg.webp')] bg-no-repeat bg-center bg-cover ">
      <section className="min-h-dvh bg-black/70 flex flex-col items-center justify-center gap-20">
          <h1 className="text-white font-bold text-center text-2xl md:text-3xl lg:text-5xl uppercase">
          Unlock Your Natural Beauty
          </h1>
          <div className="flex  items-center  w-full justify-center">
            <button className="border  border-white hover:border-orange-400 hover:rounded-md px-10 py-2 text-white text-base lg:text-lg max-md:w-full hover:bg-orange-400 hover:text-black transition-all">
              Contact Us
            </button>
          </div>
          
      </section>
    </main>
  );
}