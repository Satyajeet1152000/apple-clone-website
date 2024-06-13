import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlight from "@/components/Highlight";
import HowItWorks from "@/components/HowItWorks";
import Model from "@/components/Model";

export default function Home() {
  return (
    <main className="bg-black" id="root">
      <Hero />
      {/* <Hero/>
      <Highlight/>
      <Model/>
      <Features/>
      <HowItWorks/> */}
    </main>
  );
}
