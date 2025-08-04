"use client";

import { motion } from "motion/react";

const CraftSection = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="space-y-12 p-6 md:px-16"
    >
      <div>
        <h2 className="font-family-display text-3xl text-white md:text-5xl">
          BUGATTI Sur Mesure
        </h2>
        <span className="font-family-mono text-white">
          The pinnacle of automotive engineering and ultra-luxury lifestyle.
        </span>
      </div>
      <div className="grid grid-cols-1 rounded-lg border border-white/20 md:grid-cols-2">
        <div className="flex flex-1 items-center justify-center overflow-hidden">
          <motion.img
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            src="/craft.avif"
            alt="craft"
            className="cursor-pointer rounded-lg object-contain"
          />
        </div>
        <div className="font-family-mono flex flex-col items-start justify-around bg-neutral-800/50 px-4 py-12 text-white md:px-8 md:py-0 lg:px-12">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-6xl">
              HERITAGE, CRAFTSMANSHIP AND INNOVATION
            </h2>
            <span>
              AT BUGATTI, we translate our customer&apos;s visions to create
              unique pieces of personalized automative art.
            </span>
          </div>
          <div className="underline underline-offset-4 transition-all duration-200 hover:underline-offset-2">
            LEARN MORE ABOUT SUR MESURE
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CraftSection;
