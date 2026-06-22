/** Re-export menu types */
export type { MenuItem, MenuCategory } from "@/data/menu";

/** Navigation link */
export interface NavLink {
  label: string;
  href: string;
}

/** Social media link */
export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

/** Review/testimonial */
export interface Review {
  name: string;
  rating: number;
  badge: string;
  text: string;
}

/** Gallery image */
export interface GalleryImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Site metadata */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  address: string;
  phone: string;
  email: string;
  hours: string;
  rating: number;
  priceRange: string;
  location: string;
}

export const siteConfig: SiteConfig = {
  name: "Frespresso Cafe",
  tagline: "Frespresso Cafe Vapi",
  description:
    "Premium cafe in Vapi serving coffee, shakes, sandwiches, tea, snacks and birthday celebration arrangements.",
  url: "https://cafe-sonorous.vercel.app",
  ogImage: "/og-image.jpg",
  address: "1008, Laddak, Vapi East, Sonorous, Vapi, Gujarat 396191",
  phone: "+91 98765 43210",
  email: "hello@frespressocafe.com",
  hours: "10:00 AM – 10:30 PM",
  rating: 4.1,
  priceRange: "₹1 – ₹1000",
  location: "Vapi, Gujarat",
};
