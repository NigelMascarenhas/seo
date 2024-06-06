import React from "react";
import Contact from "@/components/Contact";
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

const SupportPage = () => {
  return (
    <div className="pb-20 pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
