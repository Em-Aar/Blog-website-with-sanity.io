import BlogCard from "@/components/BlogCard";
import getBlogs from "@/utils/getBlogs";
import { urlForImage } from "../../sanity/lib/image";
import { Blog } from "@/utils/types";

export const revalidate = 10;

export default async function Home() {
  const data:Blog[] = await getBlogs();
  
 
  return (
    <main className="flex min-h-screen flex-col ">
      <h1 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {data.map((blog: Blog, i: number) => (
          <BlogCard
            key={i}
            title={blog.title}
            summary={blog.summary}
            image={urlForImage(blog.image)}
            slug={blog.slug}
          />
        ))}
      </section>
    </main>
  );
}
