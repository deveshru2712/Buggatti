import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="absolute inset-0 -z-10 bg-black">
        <div className="absolute top-1/3 left-1/2 z-30 flex -translate-x-1/2 translate-y-1/2 flex-col gap-6 text-slate-100">
          <h1 className="font-family-display text-5xl font-bold tracking-wide">
            THIS IS FOR ETERNITY
          </h1>
          <button className="mx-auto w-2/3 cursor-pointer rounded-full border border-slate-100 px-2.5 py-2 transition-all duration-300 hover:bg-white hover:text-slate-900">
            <span className="font-family-mono text-base font-medium">
              DISCOVER THE BUGATTI TOURBILLON
            </span>
          </button>
        </div>
        <Hero />
      </div>
    </div>
  );
};

export default App;
