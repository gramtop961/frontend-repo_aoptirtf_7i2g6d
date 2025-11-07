import React, { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, AnimatePresence } from 'framer-motion';
import { Smartphone, Ruler } from 'lucide-react';

const SizeGuide = ({ open, onClose }) => (
  <AnimatePresence>
    {open && (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6">
        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 30, opacity: 0 }} className="w-full max-w-lg rounded-2xl bg-zinc-900 border border-white/10 p-6 text-white">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold">Size Guide</h3>
            <button onClick={onClose} className="text-zinc-400 hover:text-white">Close</button>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3 text-sm text-zinc-300">
            <div className="p-3 rounded-lg bg-white/5">S • Chest 36-38"</div>
            <div className="p-3 rounded-lg bg-white/5">M • Chest 38-40"</div>
            <div className="p-3 rounded-lg bg-white/5">L • Chest 40-42"</div>
            <div className="p-3 rounded-lg bg-white/5">XL • Chest 42-44"</div>
            <div className="p-3 rounded-lg bg-white/5">XXL • Chest 44-46"</div>
          </div>
          <p className="mt-4 text-xs text-zinc-400">Fit tip: choose your usual size for a relaxed, premium drape.</p>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const ProductDetail = () => {
  const [color, setColor] = useState('#111111');
  const [sizeOpen, setSizeOpen] = useState(false);

  return (
    <section id="product" className="relative bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="relative h-[520px] rounded-3xl overflow-hidden border border-white/10">
          <Spline scene="https://prod.spline.design/Z0iQyOQbR2VdS1Xy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
        <div>
          <h3 className="text-3xl font-bold">Neo Tee — LuxeTech</h3>
          <p className="mt-2 text-zinc-400">Featherlight knit with micro-aerated weave for all-season comfort. Minimal branding, maximum feel.</p>
          <div className="mt-6">
            <p className="text-amber-300 font-semibold text-xl">$120.00</p>
          </div>

          <div className="mt-6">
            <p className="text-sm text-zinc-300 mb-2">Color</p>
            <div className="flex gap-3">
              {['#ffffff', '#111111', '#d4af37'].map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border ${color === c ? 'ring-2 ring-amber-300' : 'border-white/20'}`}
                  style={{ backgroundColor: c }}
                  aria-label={`Choose color ${c}`}
                />
              ))}
            </div>
          </div>

          <div className="mt-6">
            <p className="text-sm text-zinc-300 mb-2">Size</p>
            <div className="flex gap-2">
              {['S', 'M', 'L', 'XL'].map((s) => (
                <button key={s} className="px-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm hover:bg-white/10">{s}</button>
              ))}
              <button onClick={() => setSizeOpen(true)} className="flex items-center gap-2 px-3 py-2 rounded-full bg-transparent border border-white/10 text-sm hover:bg-white/10">
                <Ruler size={16} /> Size Guide
              </button>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="px-4 py-3 rounded-full bg-white text-black font-medium hover:scale-[1.01] active:scale-[0.99] transition">Add to Cart</button>
            <button className="flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-amber-300 text-black font-medium hover:bg-amber-200 transition">
              <Smartphone size={18} /> Try it in 3D / AR
            </button>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-zinc-300">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="font-medium text-white">Fabric</p>
              <p className="mt-1 text-zinc-400">78% recycled poly, 22% elastane</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="font-medium text-white">Care</p>
              <p className="mt-1 text-zinc-400">Cold machine wash, line dry</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
              <p className="font-medium text-white">Shipping</p>
              <p className="mt-1 text-zinc-400">Worldwide in 3-7 days</p>
            </div>
          </div>
        </div>
      </div>

      <SizeGuide open={sizeOpen} onClose={() => setSizeOpen(false)} />
    </section>
  );
};

export default ProductDetail;
