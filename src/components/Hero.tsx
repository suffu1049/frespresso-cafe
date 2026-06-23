"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, MapPin, Clock, ArrowRight } from "lucide-react";

const badges = [
  {
    icon: Star,
    label: "4.1 Rating",
    color: "text-yellow-400",
  },
  {
    icon: MapPin,
    label: "Vapi, Gujarat",
    color: "text-cream/70",
  },
  {
    icon: Clock,
    label: "10 AM – 10:30 PM",
    color: "text-cream/70",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) =>
    ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut", delay: i * 0.15 },
    }) as const,
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=2078&auto=format&fit=crop"
          alt="Cafe interior"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-dark/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Headline */}
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-5 leading-tight"
        >
          Where Every Sip
          <br />
          <span className="text-gold">Feels Special</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-body font-light text-base sm:text-lg md:text-xl text-cream/70 max-w-2xl mx-auto mb-10 tracking-wide"
        >
          Fresh Coffee &bull; Delicious Food &bull; Memorable Moments
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap gap-4 justify-center mb-14"
        >
          <a
            href="#menu"
            className="inline-flex items-center gap-2 bg-coffee text-cream font-semibold px-7 py-3.5 rounded-full hover:bg-coffee/80 transition-all duration-300 shadow-xl shadow-coffee/25"
          >
            View Menu <ArrowRight size={18} />
          </a>
          <button
            onClick={() => {
              document
                .getElementById("reservation")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-medium px-7 py-3.5 rounded-full hover:bg-white/10 transition-all duration-300"
          >
            Visit Us
          </button>
        </motion.div>

        {/* Info Badges */}
        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-wrap justify-center gap-4 md:gap-8"
        >
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10"
            >
              <badge.icon size={16} className={badge.color} />
              <span className="text-sm text-cream/80 font-light tracking-wide">
                {badge.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent pointer-events-none" />
    </section>
  );
}
