import React from 'react';
import { Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-950 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="text-xl font-semibold">Your Brand Name</h3>
          <p className="text-zinc-400 mt-2 max-w-md">Luxury streetwear crafted with sustainable materials. Designed for motion, engineered for comfort.</p>
          <div className="flex items-center gap-4 mt-6">
            <a href="#" aria-label="Instagram" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Instagram size={18} /></a>
            <a href="#" aria-label="Twitter" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Twitter size={18} /></a>
            <a href="#" aria-label="Youtube" className="p-2 rounded-full bg-white/5 hover:bg-white/10"><Youtube size={18} /></a>
          </div>
        </div>
        <div>
          <p className="font-medium mb-3">Support</p>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><a href="#" className="hover:text-white">Help Center</a></li>
            <li><a href="#" className="hover:text-white">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white">Payments: COD • UPI • Cards</a></li>
          </ul>
        </div>
        <div>
          <p className="font-medium mb-3">Company</p>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li><a href="#about" className="hover:text-white">About</a></li>
            <li><a href="#shop" className="hover:text-white">Shop</a></li>
            <li><a href="#home" className="hover:text-white">Home</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-zinc-500">© {new Date().getFullYear()} Your Brand Name. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
