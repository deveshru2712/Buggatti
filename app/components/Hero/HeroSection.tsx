"use client";
import Hero from "./Hero";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <section>
      {/* placeholder div */}
      <div className="relative">
        <div className="h-[550px] w-full"></div>
        <motion.div
          initial={{ filter: `blur(20px)`, y: 50, opacity: 0 }}
          animate={{ filter: `blur(0px)`, y: 0, opacity: 100 }}
          transition={{ duration: 1.3, delay: 0.1 }}
          className="pointer-events-none absolute top-1/2 z-50 flex w-full -translate-y-1/2 flex-col items-center justify-center gap-1 text-white md:gap-2"
        >
          <h2 className="font-family-display text-4xl md:text-5xl">
            THIS IS FOR ETERNITY
          </h2>
          <button className="font-family-mono cursor-pointer rounded-full px-2.5 py-2 underline underline-offset-4 transition-colors duration-200 hover:bg-white hover:text-slate-900 hover:underline-offset-1 md:border md:no-underline">
            <span>DISCOVER THE BUGATTI TOURBILLON</span>
          </button>
        </motion.div>
        <Hero />
      </div>
    </section>
  );
};

export default HeroSection;
