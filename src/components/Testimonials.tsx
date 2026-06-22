"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const reviews = [
  {
    name: "Manali Pandey",
    rating: 5,
    badge: "Local Guide",
    text: "Amazing cafe, food is very good, different types of shakes are available, and the best part is the decor area for birthday celebrations. Affordable price, staff is very good too.",
  },
  {
    name: "Heena Khan",
    rating: 4,
    badge: "Local Guide",
    text: "Good Coffee. Good Place. Friendly Staff. Food is also good.",
  },
  {
    name: "A Third Guest",
    rating: 5,
    badge: "Google Review",
    text: "Great ambience and very budget friendly. Perfect spot for a relaxed evening with friends. Highly recommend the cold coffee and shakes!",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-heading text-4xl md:text-5xl text-cream mb-4">
            What Our Guests Say
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </motion.div>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-cream/30 !opacity-100",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-gold !w-8 !rounded-full",
          }}
          className="pb-14"
        >
          {reviews.map((r) => (
            <SwiperSlide key={r.name} className="h-auto">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-7 md:p-9 border border-cream/10 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < r.rating
                          ? "text-gold fill-gold"
                          : "text-cream/20"
                      }
                    />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-cream/70 leading-relaxed mb-7 flex-1 italic">
                  &ldquo;{r.text}&rdquo;
                </p>

                {/* Author + badge */}
                <div className="flex items-center justify-between">
                  <p className="text-cream font-semibold">{r.name}</p>
                  <span className="text-xs text-gold/80 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                    {r.badge}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
