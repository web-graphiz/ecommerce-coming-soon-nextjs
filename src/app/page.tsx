import Image from "next/image";
import { Itim } from "next/font/google";
const itim = Itim({ weight: ["400"], subsets: ["latin"] });
import img from "../../public/e-commerce.svg";
import Timer from "@/components/timer";

export default function ComingSoon() {
  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 flex flex-col lg:flex-row items-center justify-between w-full">
        <aside className="w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="text-black text-6xl lg:text-7xl xl:text-8xl mb-5">
            <small className="font-semibold text-3xl">Our Website is</small>
            <br /> <span className={itim.className}>Coming Soon</span>
          </h1>
          <h2 className="text-lg ld:text-xl leading-[45px] lg:leading-[55px] text-black">
            We&apos;re{" "}
            <span className="bg-white px-2 py-1 font-semibold rounded shadow-md">
              Under Construction
            </span>{" "}
            will be here soon.
            <br />{" "}
            <span className="bg-white px-2 py-1 font-semibold rounded shadow-md uppercase">
              Stay Tuned!
            </span>
          </h2>
          <Timer launchDate="2024-08-10T17:00:00" />
        </aside>

        <aside className="w-full lg:w-1/2 mt-4 lg:mt-0 lg:pl-4 flex justify-center">
          <Image
            src={img}
            alt="E-commerce Store"
            width={650}
            height={450}
            className="w-full max-w-[450px] lg:max-w-[650px] h-auto"
          />
        </aside>
      </section>
    </main>
  );
}
