// /mnt/data/layout.tsx
import Head from 'next/head';
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

interface Metadata {
  title: string | { default: string; template: string };
  description: string;
  keywords: string;
  openGraph: {
    type: string;
    locale: string;
    url: string;
    siteName: string;
    title: string;
    description: string;
    images: {
      url: string;
      width: number;
      height: number;
      alt: string;
    }[];
  };
  twitter: {
    card: string;
    site: string;
    title: string;
    description: string;
    images: string | string[];
  };
}


export default function Home() {
  const metadata: Metadata = {
    title: {
      default: "VisionX Technologies",
      template: "%s - VisionX Technologies"
    },
    description: "Welcome to VisionX Technologies, where we specialize in website development, app development, and software development.",
    keywords: "Website development, app development, software development, VisionX, VisionX Technologies",
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://visionxtechnologies.com/',
      siteName: 'VisionX Technologies',
      title: 'VisionX Technologies',
      description: 'Welcome to VisionX Technologies, where we specialize in website development, app development, and software development.',
      images: [
        {
          url: 'https://visionxtechnologies.com/images/og-image.jpg',
          width: 800,
          height: 600,
          alt: 'VisionX Technologies',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@VisionXTech',
      title: 'VisionX Technologies',
      description: 'Welcome to VisionX Technologies, where we specialize in website development, app development, and software development.',
      images: 'https://visionxtechnologies.com/images/twitter-image.jpg',
    },
  };
  return (
    <>
    <main>
      <Head>
      <title>{typeof metadata.title === 'string' ? metadata.title : metadata.title?.default || "Default Title"}</title>


        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <link rel="canonical" href="https://visionxtechnologies.com/" key="canonical" />
        
        {/* Open Graph Metadata */}
        <meta property="og:type" content={metadata.openGraph?.type || "website"} />
<meta property="og:locale" content={metadata.openGraph?.locale || "en_US"} />
<meta property="og:url" content={metadata.openGraph?.url || "https://example.com"} />
<meta property="og:site_name" content={metadata.openGraph?.siteName || "Example Site"} />
<meta property="og:title" content={metadata.openGraph?.title || "Default Title"} />
<meta property="og:description" content={metadata.openGraph?.description || "Default Description"} />
<meta property="og:image" content={metadata.openGraph?.images?.[0]?.url || "https://example.com/default-image.jpg"} />
<meta property="og:image:width" content={metadata.openGraph?.images?.[0]?.width?.toString() || "800"} />
<meta property="og:image:height" content={metadata.openGraph?.images?.[0]?.height?.toString() || "600"} />
<meta property="og:image:alt" content={metadata.openGraph?.images?.[0]?.alt || "Default Alt"} />


        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content={metadata.twitter?.card || "summary"} />
<meta name="twitter:site" content={metadata.twitter?.site || "@example"} />
<meta name="twitter:title" content={metadata.twitter?.title || "Default Title"} />
<meta name="twitter:description" content={metadata.twitter?.description || "Default Description"} />
<meta name="twitter:image" content={Array.isArray(metadata.twitter?.images) ? metadata.twitter.images[0] : "https://example.com/default-image.jpg"} />

    </Head>

      <Hero />
      <Feature />
      <About />
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      <Contact />
    </main>
    </>
  );
}
