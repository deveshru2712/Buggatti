"use client";
import { motion } from "motion/react";
import { Cars } from "../../../constants";
import CarCard from "./CarCard";

const CarSection = () => {
  return (
    <motion.section
      initial={{ filter: "blur(20px)" }}
      whileInView={{ filter: "blur(0px)" }}
      className="space-y-8 p-6 md:px-16"
    >
      <h2 className="font-display text-3xl text-white md:text-5xl">
        OUR HYPER SPORTS CARS
      </h2>
      <div className="grid w-full grid-cols-1 items-center gap-10 rounded-md border border-white/20 bg-gradient-to-b from-[#181818] to-black px-6 py-8 text-white md:grid-cols-2 md:px-12 md:py-12 lg:px-36">
        {Cars.map((car) => (
          <CarCard
            key={car.id}
            image={car.image}
            insignia={car.insignia}
            subText={car.subText}
            text={car.text}
            video={car.video}
          />
        ))}
      </div>
    </motion.section>
  );
};

export default CarSection;
