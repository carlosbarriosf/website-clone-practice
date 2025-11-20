import Header from "./components/Header";
import SvgBackground from "./components/SvgBackground";
import Featured from "./sections/Featured";
import Hero from "./sections/Hero";

export default function Home() {
  return (
    <>
      <main>
        <div className="relative w-full bg-linear-to-b from-[#1f3343] to-black to-40%">
          <SvgBackground width={72} height={72} id={"hero"} />
          <Header />
          <Hero />
        </div>
        <Featured />
      </main>
    </>
  );
}
