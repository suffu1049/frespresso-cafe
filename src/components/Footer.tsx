"use client";

import { Coffee, Camera, Globe, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-coffee/20 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Coffee className="text-gold" size={24} />
              <span className="font-heading text-xl text-gold">Frespresso Cafe</span>
            </div>
            <p className="text-cream/50 text-sm leading-relaxed max-w-xs">
              Premium cafe in Vapi serving coffee, shakes, sandwiches, tea,
              snacks and birthday celebration arrangements.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-cream text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Menu", "Gallery", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-cream/50 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-cream text-lg mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-cream/60 hover:bg-gold hover:text-dark transition-all duration-300"
                aria-label="Location"
              >
                <MapPin size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 text-center">
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} Frespresso Cafe. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
