import React from 'react';
import { ShoppingBag, Search, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-200 to-white shadow-lg shadow-white/10" />
          <a href="#home" className="text-white font-semibold tracking-wide text-lg">Your Brand Name</a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-zinc-300 hover:text-white transition">Home</a>
          <a href="#shop" className="text-sm text-zinc-300 hover:text-white transition">Shop</a>
          <a href="#about" className="text-sm text-zinc-300 hover:text-white transition">About</a>
          <a href="#contact" className="text-sm text-zinc-300 hover:text-white transition">Contact</a>
        </nav>
        <div className="flex items-center gap-4">
          <button aria-label="Search" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition">
            <Search size={18} />
          </button>
          <button aria-label="Cart" className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition relative">
            <ShoppingBag size={18} />
            <span className="absolute -top-1 -right-1 text-[10px] bg-amber-400 text-black px-1.5 py-0.5 rounded-full font-medium">2</span>
          </button>
          <button aria-label="Menu" className="md:hidden p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition">
            <Menu size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
