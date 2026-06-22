"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { menuItems, type MenuCategory } from "@/data/menu";

const tabs: { label: string; value: MenuCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Hot Beverages", value: "Hot Beverages" },
  { label: "Cold Beverages", value: "Cold Beverages" },
  { label: "Pizzas", value: "Pizzas" },
  { label: "Burgers & Sandwiches", value: "Burgers & Sandwiches" },
  { label: "Maggi & Snacks", value: "Maggi & Snacks" },
];

export default function Menu() {
  const [active, setActive] = useState<MenuCategory | "All">("All");

  const filtered =
    active === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === active);

  return (
    <section id="menu" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-cream mb-4">
            Our Menu
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                active === tab.value
                  ? "bg-coffee text-white shadow-lg shadow-coffee/30"
                  : "bg-transparent border border-cream/15 text-cream/60 hover:border-coffee/50 hover:text-coffee"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: "easeOut",
                }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-cream/10 hover:border-gold/30 transition-all duration-300 group"
              >
                {/* Emoji */}
                <span className="text-3xl block mb-3">{item.emoji}</span>

                {/* Name + Price */}
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-heading text-lg text-cream group-hover:text-gold transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="bg-coffee/20 text-coffee text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap ml-4">
                    ₹{item.price}
                  </span>
                </div>

                {/* Description */}
                <p className="text-cream/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
