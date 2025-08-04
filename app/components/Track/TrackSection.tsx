"use client";
import { useRef } from "react";
import Track from "./Track";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Link from "next/link";

const TrackSection = () => {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const translateContent = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 50]),
    { stiffness: 100, mass: 1, damping: 30 }
  );

  return (
    <section ref={container} className="overflow-hidden">
      <motion.div
        style={{
          y: translateContent,
        }}
        initial={{ scale: 0.8, opacity: 0, y: 50, filter: `blur(10px)` }}
        animate={{ scale: 1, opacity: 100, y: 0, filter: `blur(0px)` }}
        transition={{
          duration: 0.6,
          delay: 0.3,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* placeholder div */}
        <div className="h-[550px] w-full"></div>
        <div className="pointer-events-none absolute top-1/2 z-20 flex items-center justify-center px-6 text-white md:top-2/3 md:-translate-y-1/4 md:px-16">
          <div className="flex grid-cols-3 flex-col gap-3 md:grid">
            <div className="col-span-2">
              <h2 className="font-family-display text-3xl md:text-6xl">
                <span className="mr-2 md:mr-3">A</span> RECORD-BREAKING <br />{" "}
                FORCE OF NATURE
              </h2>
            </div>
            <div className="font-family-mono col-span-1">
              <div className="flex flex-col items-start gap-2 lg:flex-row lg:items-center lg:justify-center lg:gap-4">
                <span className="w-2/3 text-sm">
                  Setting a new benchmark at 453.91 Km/h. A triumph of passion,
                  precision, and performance.
                </span>
                <Link
                  href="/"
                  className="underline underline-offset-4 hover:underline-offset-2"
                >
                  WATCH THE RECORD
                </Link>
              </div>
            </div>
          </div>
        </div>
        <Track />
      </motion.div>
    </section>
  );
};

export default TrackSection;
