import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: {
    default: "VisionX Technologies | web-development,app-development",
    template: "%s - VisionX Technologies %s"
  },
  description: "Welcome to VisionX Technologies.At VisionX Technologies, we deliver comprehensive IT services including web development, app development, chatbot automation, and e-commerce solutions. Partner with us to transform your vision into reality and achieve unparalleled success in the digital landscape.",
  keywords: "web development,Website development, app development, software development, VisionX, VisionX Technologies",

  // other metadata
  
};

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <Brands /> */}
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}