import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, y: -50, filter: `blur(10px)` }}
      animate={{ scale: 1, opacity: 100, y: 0, filter: `blur(0px)` }}
      transition={{
        duration: 0.5,
        delay: 0.1,
        ease: "easeInOut",
      }}
      className="absolute inset-0 -top-30 z-10 cursor-pointer"
    >
      <motion.video
        src="video/hero_video.mp4"
        autoPlay
        muted
        controls={false}
        loop
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="h-[650px] w-full object-cover md:h-[600px]"
      />
    </motion.div>
  );
};

export default Hero;
