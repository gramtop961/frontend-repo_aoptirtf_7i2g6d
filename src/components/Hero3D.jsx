import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const Hero3D = () => {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        {/* Replace with your Spline 3D mannequin scene URL for a rotating outfit */}
        <Spline scene="https://prod.spline.design/l2gVh7ijZ1XjN9lg/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            New Drop • LuxeTech Fabric
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Experience Fashion in <span className="bg-gradient-to-r from-zinc-100 via-white to-amber-300 bg-clip-text text-transparent">3D</span>
          </h1>
          <p className="mt-4 text-zinc-300 leading-relaxed">
            Minimal. Immersive. Premium. Explore interactive garments with live color variations, AR try-on, and smooth 360° control.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#shop" className="px-6 py-3 rounded-full bg-white text-black font-medium shadow-lg shadow-white/20 hover:shadow-white/30 transition">Shop the Collection</a>
            <a href="#about" className="px-6 py-3 rounded-full bg-transparent border border-white/20 text-white hover:bg-white/10 transition">About the Brand</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hidden lg:block w-[420px] rounded-3xl bg-white/5 p-6 border border-white/10 backdrop-blur-xl shadow-2xl"
        >
          <h3 className="text-sm text-zinc-200">Premium Benefits</h3>
          <ul className="mt-3 space-y-2 text-sm text-zinc-300">
            <li>• Free worldwide shipping over $200</li>
            <li>• Carbon-neutral packaging</li>
            <li>• 30-day hassle-free returns</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
