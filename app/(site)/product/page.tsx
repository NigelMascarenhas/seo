import React from "react";
import Feature from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: "VisionX Technologies | web-development,app-development",
      template: "%s - VisionX Technologies %s"
    },
    description: "Welcome to VisionX Technologies.At VisionX Technologies, we deliver comprehensive IT services including web development, app development, chatbot automation, and e-commerce solutions. Partner with us to transform your vision into reality and achieve unparalleled success in the digital landscape.",
    keywords: "web development,Website development, app development, software development, VisionX, VisionX Technologies",
  
    // other metadata
    
  };

const product = () => {
  return (
    <div className="pb-20 pt-10">
      <Feature />
    </div>
  );
};

export default product;
