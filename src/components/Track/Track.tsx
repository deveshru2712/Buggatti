import { motion } from "motion/react";

const Track = () => {
  return (
    <div className="absolute inset-0 z-10 cursor-pointer px-4 md:px-10 lg:px-12">
      <div className="overflow-hidden rounded-md">
        <motion.video
          src="/track.mp4"
          autoPlay
          muted
          controls={false}
          loop
          className="h-[500px] w-full rounded-md object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

export default Track;
