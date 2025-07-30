import Hero from "./components/Hero";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="absolute top-1/3 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 flex-col gap-6 text-slate-100">
        <motion.h1
          initial={{ y: 10, opacity: 0, filter: `blur(50px)` }}
          animate={{ y: -10, opacity: 100, filter: `blur(0px)` }}
          transition={{ duration: 0.3 }}
          className="font-family-display text-7xl font-normal tracking-wide"
        >
          THIS IS FOR ETERNITY
        </motion.h1>
        <motion.button
          initial={{ y: 10, filter: `blur(20px)` }}
          animate={{
            y: -10,
            filter: [`blur(0px)`],
          }}
          transition={{ duration: 0.5 }}
          className="mx-auto w-2/3 cursor-pointer rounded-full border border-slate-100 px-2.5 py-2 transition-all duration-300 hover:bg-white hover:text-slate-900"
        >
          <span className="font-family-mono text-base font-medium">
            DISCOVER THE BUGATTI TOURBILLON
          </span>
        </motion.button>
      </div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className="relative h-[600px] cursor-pointer"
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default App;
