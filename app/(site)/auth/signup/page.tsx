import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VisionX technologies",
  description: "Website development , app development , software development",
  // other metadata
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
