import { lazy, useEffect } from "react";

const HeroSection = lazy(() => import("./components/Hero/HeroSection"));
const Navbar = lazy(() => import("./components/Navbar"));
const TrackSection = lazy(() => import("./components/Track/TrackSection"));
const MansionSection = lazy(
  () => import("./components/Mansion/MansionSection"),
);
const QuoteSection = lazy(() => import("./components/Quote/QuoteSection"));
const CarSection = lazy(() => import("./components/Car catalog/CarSection"));
const CraftSection = lazy(() => import("./components/Craft/CraftSection"));
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
      <MansionSection />
      <QuoteSection />
      <CarSection />
      <CraftSection />
    </div>
  );
};

export default App;
