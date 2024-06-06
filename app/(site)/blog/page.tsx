import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://visionxtechnologies.com"),
  title: {
    default: "VisionX Technologies | web-development,app-development",
    template: "%s - VisionX Technologies %s"
  },
  description: "At VisionX Technologies, we deliver comprehensive IT services including web development, app development, chatbot automation, and e-commerce solutions. Partner with us to transform your vision into reality and achieve unparalleled success in the digital landscape.",
  keywords: "web development,Website development, app development, software development, VisionX, VisionX Technologies",

  // other metadata
  
};

const BlogPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;
