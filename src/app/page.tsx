import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Gallery = dynamic(() => import("@/components/Gallery"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
