import Hero from "./Hero";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section>
      {/* placeholder div */}
      <div className="relative">
        <div className="h-[550px] w-full"></div>
        <motion.div
          initial={{ filter: `blur(20px)`, y: 10 }}
          animate={{ filter: `blur(0px)`, y: 0 }}
          transition={{ duration: 0.5 }}
          className="pointer-events-none absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-col items-center justify-center gap-1 text-white md:gap-2"
        >
          <h2 className="font-family-display text-4xl md:text-5xl">
            THIS IS FOR ETERNITY
          </h2>
          <button className="font-family-mono underline-offset-4hover:bg-white cursor-pointer rounded-full px-2.5 py-2 underline transition-colors duration-200 hover:bg-white hover:text-slate-900 md:border md:no-underline">
            <span>DISCOVER THE BUGATTI TOURBILLON</span>
          </button>
        </motion.div>
        <Hero />
      </div>
    </section>
  );
};

export default HeroSection;
