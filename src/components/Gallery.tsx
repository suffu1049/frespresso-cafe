"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/* ───────── 8 cafe-themed Unsplash images ───────── */
const images = [
  {
    src: "/coffee.jpg",
    alt: "Signature Frespresso Latte on table",
  },
  {
    src: "/mojito.jpg",
    alt: "Refreshing Blue and Green mojitos",
  },
  {
    src: "/coffee1.jpg",
    alt: "Beautifully crafted latte art close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=687&auto=format&fit=crop",
    alt: "Coffee cup with latte art",
  },
  {
    src: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=687&auto=format&fit=crop",
    alt: "Milkshake with whipped cream",
  },
  {
    src: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?q=80&w=873&auto=format&fit=crop",
    alt: "Sandwich on a plate",
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=764&auto=format&fit=crop",
    alt: "Cafe interior with warm lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1541614101331-1a5a3a194e92?q=80&w=765&auto=format&fit=crop",
    alt: "Birthday decoration at a cafe",
  },
  {
    src: "/taco.jpg",
    alt: "Beautifully crafted taco art close-up",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-dark mb-4">
              Our Gallery
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>

          {/* Masonry grid using CSS columns */}
          <div className="columns-2 md:columns-3 gap-4 [&>div]:break-inside-avoid [&>div]:mb-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(i)}
                className="relative overflow-hidden rounded-xl cursor-pointer group"
                style={{ aspectRatio: i % 3 === 0 ? "4 / 5" : i % 3 === 1 ? "3 / 4" : "1 / 1" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white/0 group-hover:text-white/80 text-sm font-light tracking-wide transition-all duration-300">
                    {img.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ Lightbox ════════ */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-dark/90 backdrop-blur-sm p-4"
            onClick={() => setSelected(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <motion.div
              key={selected}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative w-full max-w-4xl aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selected].src}
                alt={images[selected].alt}
                fill
                sizes="(max-width: 1024px) 90vw, 60vw"
                className="object-contain"
              />
            </motion.div>

            {/* Caption */}
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm font-light tracking-wide">
              {images[selected].alt}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
