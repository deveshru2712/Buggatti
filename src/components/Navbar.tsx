import { Menu, ShoppingBag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between px-12 py-8 text-slate-300">
      <div className="font-family-mono flex cursor-pointer items-center gap-1 bg-transparent p-2 text-base transition-all duration-300 hover:bg-slate-100/25">
        <Menu />
        MENU
      </div>
      <a
        href="/"
        className="font-family-display cursor-pointer text-3xl font-semibold tracking-wide"
      >
        BUGATTI
      </a>
      <div className="font-family-mono flex cursor-pointer items-center gap-1.5 bg-transparent p-2 text-base transition-all duration-300 hover:bg-slate-100/25">
        STORE
        <ShoppingBag className="mb-1 text-slate-400" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
