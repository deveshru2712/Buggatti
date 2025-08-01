import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Track from "./components/Track";
import { motion } from "motion/react";

const App = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden bg-black">
      <Navbar />
      {/* hero section */}
      <section>
        {/* placeholder div */}
        <div className="relative">
          <div className="h-[550px] w-full"></div>
          <motion.div
            initial={{ filter: `blur(20px)`, y: 10 }}
            animate={{ filter: `blur(0px)`, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-col items-center justify-center gap-1 text-white md:gap-2"
          >
            <h2 className="font-family-display text-4xl md:text-5xl">
              THIS IS FOR ETERNITY
            </h2>
            <button className="font-family-mono underline-offset-4hover:bg-white cursor-pointer rounded-full px-2.5 py-2 underline transition-colors duration-200 hover:bg-white hover:text-slate-900 md:border md:no-underline">
              <span>DISCOVER THE BUGATTI TOURBILLON</span>
            </button>
          </motion.div>
          <Hero />
        </div>
      </section>

      {/* track record section */}
      <section>
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50, filter: `blur(10px)` }}
          animate={{ scale: 1, opacity: 100, y: 0, filter: `blur(0px)` }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeInOut",
          }}
          className="relative"
        >
          {/* placeholder div */}
          <div className="h-[550px] w-full"></div>
          <div className="absolute top-1/2 z-20 flex items-center justify-center px-6 text-white md:top-2/3 md:-translate-y-1/4 md:px-16">
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
                    Setting a new benchmark at 453.91 Km/h. A triumph of
                    passion, precision, and performance.
                  </span>
                  <a href="/" className="underline underline-offset-4">
                    WATCH THE RECORD
                  </a>
                </div>
              </div>
            </div>
          </div>
          <Track />
        </motion.div>
      </section>
    </div>
  );
};

export default App;
