import Hero from "./components/Hero";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />
      <motion.div
        initial={{ y: 10, opacity: 0, filter: `blur(50px)` }}
        animate={{ y: -10, opacity: 100, filter: `blur(0px)` }}
        transition={{ duration: 0.5 }}
        className="absolute top-1/3 left-1/2 z-20 flex w-full -translate-x-1/2 translate-y-1/2 flex-col gap-6 text-slate-100 md:w-2/3 lg:w-1/2"
      >
        <h1 className="font-family-display text-center text-4xl font-normal tracking-wide md:text-6xl lg:text-7xl">
          THIS IS FOR ETERNITY
        </h1>
        <button className="mx-auto w-3/4 cursor-pointer rounded-full px-2.5 py-2 underline underline-offset-4 transition-all duration-300 hover:bg-white md:w-2/3 md:border md:border-slate-100 md:no-underline md:hover:text-slate-900">
          <span className="font-family-mono text-base font-medium">
            DISCOVER THE BUGATTI TOURBILLON
          </span>
        </button>
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.01 }}
        transition={{ duration: 0.1, ease: "easeIn" }}
        className="relative h-[400px] cursor-pointer md:h-[700px]"
      >
        <Hero />
      </motion.div>
    </div>
  );
};

export default App;
