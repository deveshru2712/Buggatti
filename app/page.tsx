import Footer from "./components/Footer/Footer";
import CraftSection from "./components/Craft/CraftSection";
import CarSection from "./components/Car catalog/CarSection";
import QuoteSection from "./components/Quote/QuoteSection";
import MansionSection from "./components/Mansion/MansionSection";
import TrackSection from "./components/Track/TrackSection";
import HeroSection from "./components/Hero/HeroSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      <Navbar />
      <HeroSection />
      <TrackSection />
      <MansionSection />
      <QuoteSection />
      <CarSection />
      <CraftSection />
      <Footer />
    </div>
  );
}
