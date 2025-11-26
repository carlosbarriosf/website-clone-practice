import Footer from "./components/Footer";
import Header from "./components/Header";
import SvgBackground from "./components/SvgBackground";
import Featured from "./sections/Featured";
import Genius from "./sections/Genius";
import Hero from "./sections/Hero";
import Outro from "./sections/Outro";

export default function Home() {
  return (
    <>
      <main className="overflow-hidden">
        <div className="relative w-full bg-linear-to-b from-[#1f3343] to-black to-40%">
          <SvgBackground width={72} height={72} id={"hero"} />
          <Header />
          <Hero />
        </div>
        <Featured />
        <Genius />
        <Outro />
        <Footer />
      </main>
    </>
  );
}
