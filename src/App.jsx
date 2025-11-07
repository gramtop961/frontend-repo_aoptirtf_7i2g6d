import React from 'react';
import Navbar from './components/Navbar';
import Hero3D from './components/Hero3D';
import ProductGrid from './components/ProductGrid';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';

const About = () => (
  <section id="about" className="relative py-24 bg-gradient-to-b from-zinc-950 to-black text-white">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">Sustainable. Premium. Future-ready.</h2>
        <p className="text-zinc-300">We build garments at the intersection of performance and luxury. Our fabrics are responsibly sourced, our packaging is carbon-neutral, and our supply chain champions fair labor. Designed for Gen‑Z minimalists who value quality and tech-forward experiences.</p>
        <div className="grid grid-cols-3 gap-3 text-sm text-zinc-300">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><p className="font-medium text-white">Recycled</p><p className="text-zinc-400">78% fabrics</p></div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><p className="font-medium text-white">Carbon</p><p className="text-zinc-400">Neutral ship</p></div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10"><p className="font-medium text-white">Ethical</p><p className="text-zinc-400">Fair wage</p></div>
        </div>
      </div>
      <div className="rounded-3xl h-[360px] bg-gradient-to-br from-amber-200/10 via-white/5 to-transparent border border-white/10" />
    </div>
  </section>
);

function App() {
  return (
    <div className="min-h-screen bg-black font-[Inter]">
      <Navbar />
      <Hero3D />
      <ProductGrid />
      <ProductDetail />
      <About />
      <Footer />
    </div>
  );
}

export default App;
