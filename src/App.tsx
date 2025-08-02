import { useEffect } from "react";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar";
import TrackSection from "./components/Track/TrackSection";
import Lenis from "lenis";

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
      <div className="h-[333px]"></div>
    </div>
  );
};

export default App;
