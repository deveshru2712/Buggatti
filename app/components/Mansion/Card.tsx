"use client";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  subtitle: string;
  image: string;
}
const Card = ({ image, subtitle, title }: CardProps) => {
  return (
    <div className="font-family-mono flex h-full w-full flex-col items-start gap-2 rounded-md text-white">
      <div className="h-[300px] w-full overflow-hidden rounded-md bg-gray-800">
        <motion.img
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <h2>{title.toUpperCase()}</h2>
        <span className="cursor-pointer text-sm underline underline-offset-4 hover:underline-offset-2">
          {subtitle.toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default Card;
