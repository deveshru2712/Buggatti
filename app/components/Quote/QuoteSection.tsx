"use client";
import { motion } from "motion/react";

const QuoteSection = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)" }}
      whileInView={{ filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      className="my-20 h-full w-full overflow-hidden px-4 text-white md:px-8"
    >
      <img
        src="svg/quote.svg"
        alt="quote"
        className="object-contain"
        style={{ filter: "invert(1) brightness(2)" }}
      />
    </motion.section>
  );
};

export default QuoteSection;
