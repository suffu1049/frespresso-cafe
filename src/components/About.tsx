"use client";

import { motion } from "framer-motion";
import { Star, Clock, MapPin, Wallet } from "lucide-react";

/* ───────── About Frespresso stats ───────── */
const stats = [
  { icon: Star, label: "4.1 Rating", sub: "Google Reviews" },
  { icon: Clock, label: "10am – 10:30pm", sub: "Open Hours" },
  { icon: MapPin, label: "Vapi East", sub: "Location" },
  { icon: Wallet, label: "₹1 – ₹1000", sub: "Price Range" },
];

/* ───────── Why Choose Us cards ───────── */
const reasons = [
  {
    emoji: "🌿",
    title: "Fresh Ingredients",
    desc: "Freshly prepared food daily with quality ingredients",
  },
  {
    emoji: "☕",
    title: "Expert Baristas",
    desc: "Perfectly crafted coffee by trained professionals",
  },
  {
    emoji: "🎂",
    title: "Birthday Celebrations",
    desc: "Beautiful decoration space available for parties",
  },
  {
    emoji: "💰",
    title: "Affordable Pricing",
    desc: "Budget-friendly menu for everyone",
  },
];

export default function About() {
  return (
    <>
      {/* ═══════════ About Frespresso ═══════════ */}
      <section id="about" className="py-24 bg-cream">
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
              About Frespresso
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left — text */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-dark/70 text-base md:text-lg leading-relaxed"
            >
              Located in Vapi East, Frespresso Cafe is a cozy destination for coffee
              lovers, food enthusiasts, and small celebrations. Known for its
              friendly staff, affordable pricing, delicious coffee, shakes,
              sandwiches, and beautiful decor, the cafe is perfect for casual
              meetings, birthday celebrations, and relaxing evenings.
            </motion.p>

            {/* Right — 2×2 stat grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="bg-white rounded-xl p-5 md:p-6 text-center shadow-md hover:shadow-lg transition-shadow duration-300 border border-coffee/5"
                >
                  <stat.icon
                    className="mx-auto mb-2 text-gold"
                    size={22}
                  />
                  <p className="font-heading text-lg text-dark font-semibold">
                    {stat.label}
                  </p>
                  <p className="text-dark/50 text-xs mt-0.5">{stat.sub}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ Why Choose Us ═══════════ */}
      <section className="py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-4xl md:text-5xl text-cream mb-4">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-gold mx-auto" />
          </motion.div>

          {/* 2×2 card grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="bg-cream rounded-2xl p-6 md:p-8 border border-transparent hover:border-gold/50 transition-all duration-300 cursor-default group"
              >
                <span className="text-3xl md:text-4xl block mb-4">
                  {item.emoji}
                </span>
                <h3 className="font-heading text-xl text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-dark/60 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
