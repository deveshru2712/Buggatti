import { Menu, ShoppingBag } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky z-20 flex w-full items-center justify-between p-4 text-slate-300 md:px-12 md:py-8">
      <div className="font-family-mono flex cursor-pointer items-center gap-1 rounded-md bg-transparent p-2 text-base transition-all duration-300 hover:bg-slate-100/25">
        <Menu />
        MENU
      </div>
      <Link
        href="/"
        className="font-display cursor-pointer text-4xl tracking-wide text-white"
      >
        BUGATTI
      </Link>
      <div className="font-family-mono flex cursor-pointer items-center gap-1.5 rounded-md bg-transparent p-2 text-base transition-all duration-300 hover:bg-slate-100/25">
        STORE
        <ShoppingBag className="mb-1 text-slate-400" size={24} />
      </div>
    </div>
  );
};

export default Navbar;
