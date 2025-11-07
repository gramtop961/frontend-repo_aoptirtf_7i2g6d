import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

const demoProducts = [
  {
    id: 'tee-neo',
    name: 'Neo Tee',
    price: 120,
    colors: ['#ffffff', '#111111', '#d4af37'],
    scene: 'https://prod.spline.design/Z0iQyOQbR2VdS1Xy/scene.splinecode',
  },
  {
    id: 'hoodie-aero',
    name: 'Aero Hoodie',
    price: 280,
    colors: ['#111111', '#5c6a7d', '#d4af37'],
    scene: 'https://prod.spline.design/5e6x0u9bD2Q4S8fX/scene.splinecode',
  },
  {
    id: 'jacket-luxe',
    name: 'Luxe Jacket',
    price: 520,
    colors: ['#0a0a0a', '#404040', '#d4af37'],
    scene: 'https://prod.spline.design/hj6mP8cJ9nqkJmql/scene.splinecode',
  },
];

const ProductCard = ({ product }) => {
  const [color, setColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);

  const priceFormatted = useMemo(() => `$${product.price.toFixed(2)}`, [product.price]);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10 backdrop-blur-xl relative"
    >
      <div className="aspect-square relative">
        {/* Using an iframe preview of the Spline scene to mimic 3D viewer in grid */}
        <iframe
          src={`${product.scene}`}
          title={product.name}
          className="absolute inset-0 w-full h-full"
          style={{ border: 'none' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-white font-semibold tracking-wide">{product.name}</h3>
            <p className="text-amber-300 text-sm">{priceFormatted}</p>
          </div>
          <div className="flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                aria-label={`Color ${c}`}
                className={`w-5 h-5 rounded-full border ${color === c ? 'ring-2 ring-amber-300' : 'border-white/20'}`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3">
          <button onClick={handleAdd} className="px-4 py-2 rounded-full bg-white text-black text-sm font-medium hover:scale-[1.02] active:scale-[0.98] transition">
            Quick Add
          </button>
          <a href="#product" className="px-4 py-2 rounded-full border border-white/20 text-white text-sm hover:bg-white/10 transition">View</a>
        </div>
      </div>
      {added && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-emerald-400 text-black text-xs font-semibold shadow-lg"
        >
          Added to bag
        </motion.div>
      )}
    </motion.div>
  );
};

const ProductGrid = () => {
  return (
    <section id="shop" className="relative py-24 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Shop</h2>
            <p className="text-zinc-400 mt-2">Interactive 3D garments. Rotate, explore, and customize.</p>
          </div>
          <a href="#product" className="text-sm text-amber-300 hover:text-amber-200">View all</a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {demoProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
