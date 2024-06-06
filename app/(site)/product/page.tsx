import React from "react";
import Feature from "@/components/Features";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
        default: "VisionX Technologies | web-development,app-development",
        template: "%s - VisionX Technologies %s"
      },
      description: "Website development , app development , software development",
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
