"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, CheckCircle } from "lucide-react";

const services = ["Dine In", "Takeaway", "No-Contact Delivery"];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    guests: "2",
    date: "",
    time: "",
    occasion: "Casual",
    notes: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Simple validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.date || !formData.time) {
      setError("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-cream">
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
            Find Us
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* ─── Left column: contact info ─── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-7"
          >
            {/* Name */}
            <h3 className="font-heading text-3xl text-dark">Frespresso Cafe</h3>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-coffee/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="text-coffee" size={20} />
              </div>
              <div>
                <p className="font-medium text-dark mb-0.5">Address</p>
                <p className="text-dark/60 text-sm leading-relaxed">
                  1008, Laddak, Vapi East, Sonorous,
                  <br />
                  Vapi, Gujarat 396191
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-coffee/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Clock className="text-coffee" size={20} />
              </div>
              <div>
                <p className="font-medium text-dark mb-0.5">Hours</p>
                <p className="text-dark/60 text-sm leading-relaxed">
                  Monday–Sunday
                  <br />
                  10:00 AM – 10:30 PM
                </p>
              </div>
            </div>

            {/* Services */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 bg-coffee/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="text-coffee" size={20} />
              </div>
              <div>
                <p className="font-medium text-dark mb-2">Services</p>
                <ul className="space-y-1.5">
                  {services.map((s) => (
                    <li
                      key={s}
                      className="flex items-center gap-2 text-dark/60 text-sm"
                    >
                      <CheckCircle size={14} className="text-gold flex-shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* ─── Right column: Google Maps ─── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-coffee/10 h-[320px] md:h-full min-h-[320px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14959.899904853455!2d72.89596266738282!3d20.383921607223513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0ce3260c32219%3A0x1da9ad6ce66122a4!2sFrespresso%20Cafe!5e0!3m2!1sen!2sus!4v1782144241906!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Frespresso Cafe Location"
              className="w-full h-full"
            />
          </motion.div>
        </div>

        {/* ─── Reservation Form Section ─── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-16 bg-dark text-cream rounded-3xl p-6 md:p-12 border border-coffee/20 shadow-2xl relative overflow-hidden"
        >
          {/* Background decorative glows */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-coffee/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 px-4"
              >
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gold/30">
                  <CheckCircle className="text-gold" size={36} />
                </div>
                <h3 className="font-heading text-3xl text-gold mb-3">
                  Reservation Requested!
                </h3>
                <p className="text-cream/70 max-w-md mx-auto mb-8">
                  Thank you, <strong className="text-cream">{formData.name}</strong>. We have received your request for a table of <strong className="text-cream">{formData.guests}</strong> on <strong className="text-cream">{formData.date}</strong> at <strong className="text-cream">{formData.time}</strong>.
                </p>
                <p className="text-cream/50 text-sm">
                  We will contact you shortly on <strong className="text-cream">{formData.phone}</strong> to confirm your booking.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({
                      name: "",
                      phone: "",
                      guests: "2",
                      date: "",
                      time: "",
                      occasion: "Casual",
                      notes: "",
                    });
                  }}
                  className="mt-8 px-6 py-2.5 bg-coffee text-cream text-sm font-semibold rounded-full hover:bg-coffee/80 transition-colors duration-300 border border-gold/20"
                >
                  Book Another Table
                </button>
              </motion.div>
            ) : (
              <div>
                <div className="text-center mb-10">
                  <h3 className="font-heading text-3xl text-gold mb-2">
                    Book a Table
                  </h3>
                  <p className="text-cream/70 text-sm max-w-md mx-auto">
                    Plan your visit or host a special event with us. Fill out the reservation details below.
                  </p>
                </div>

                {error && (
                  <div className="mb-6 bg-red-900/30 border border-red-500/30 text-red-200 text-sm px-4 py-3 rounded-xl text-center">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full bg-white/5 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-white/5 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm"
                      />
                    </div>

                    {/* Number of Guests */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Number of Guests
                      </label>
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="w-full bg-dark border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm cursor-pointer"
                      >
                        <option value="1">1 Guest</option>
                        <option value="2">2 Guests</option>
                        <option value="3">3 Guests</option>
                        <option value="4">4 Guests</option>
                        <option value="5">5 Guests</option>
                        <option value="6">6 Guests</option>
                        <option value="7-10">7 to 10 Guests</option>
                        <option value="10+">10+ Guests (Celebration)</option>
                      </select>
                    </div>

                    {/* Date */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Date *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm cursor-pointer"
                      />
                    </div>

                    {/* Time */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Time *
                      </label>
                      <input
                        type="time"
                        name="time"
                        required
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full bg-white/5 border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm cursor-pointer"
                      />
                    </div>

                    {/* Occasion */}
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                        Occasion
                      </label>
                      <select
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleInputChange}
                        className="w-full bg-dark border border-cream/10 rounded-xl px-4 py-3 text-cream focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm cursor-pointer"
                      >
                        <option value="Casual">Casual Dining</option>
                        <option value="Birthday">Birthday Celebration</option>
                        <option value="Meeting">Business Meeting</option>
                        <option value="Anniversary">Anniversary</option>
                        <option value="Other">Other Event</option>
                      </select>
                    </div>
                  </div>

                  {/* Special Requests */}
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-cream/60 mb-2">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="E.g., high chair for children, birthday decoration requests, food allergies..."
                      className="w-full bg-white/5 border border-cream/10 rounded-xl px-4 py-3 text-cream placeholder-cream/30 focus:outline-none focus:border-gold/50 transition-all duration-300 text-sm resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center justify-center bg-gold hover:bg-gold/90 text-dark font-bold px-10 py-4 rounded-full transition-all duration-300 shadow-xl shadow-gold/15 hover:shadow-gold/25 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none min-w-[200px]"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin" />
                      ) : (
                        "Submit Reservation"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
