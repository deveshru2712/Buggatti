import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: 0, filter: `blur(10px)` }}
      animate={{ scale: 1, opacity: 100, y: 50, filter: `blur(0px)` }}
      transition={{
        duration: 0.6,
        delay: 0.2,
        ease: "easeInOut",
      }}
      className={`pointer-events-none absolute top-0 -z-10 flex h-[400px] items-center justify-center`}
    >
      <video
        src="./hero_video.mp4"
        autoPlay
        muted
        controls={false}
        loop
        className="object-contain"
      />
    </motion.div>
  );
};

export default Hero;
