import { useEffect } from "react";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar";
import TrackSection from "./components/Track/TrackSection";
import Lenis from "lenis";
import MansionSection from "./components/Mansion/MansionSection";
import QuoteSection from "./components/Quote/QuoteSection";
import CarSection from "./components/Car catalog/CarSection";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <HeroSection />
      <TrackSection />
      <MansionSection />
      <QuoteSection />
      <CarSection />
    </div>
  );
};

export default App;
