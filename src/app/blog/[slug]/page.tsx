import { components } from "@/components/components";
import { PortableText } from "@portabletext/react";
import { groq } from "next-sanity";
import Image from "next/image";
import { client } from "../../../../sanity/lib/client";
import { urlForImage } from "../../../../sanity/lib/image";

export const revalidate = 10;

export async function generateStaticParams(){
  const query = groq`*[_type=='blog']{"slug":slug.current}`;
  const slugs = await client.fetch(query);
  const slugRoutes:string[] = slugs.map((slug:any) => slug.slug)

  return slugRoutes.map((slug:string) => ({
    slug,
  }))
}


export default async function page({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const query = groq`*[_type=='blog' && slug.current=='${slug}']{
    title,content,image,summary,
      "authorName":author->name,
      "authorBio":author->bio,
      "authorImage":author->authorImage
  }[0]`;

  const blog = await client.fetch(query);


  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {blog.title}
      </h1>

      {/* Featured Image */}
      <Image
        src={urlForImage(blog.image)}
        width={500}
        height={500}
        alt={blog.title}
        className="rounded"
      />

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
          {blog.summary}
        </p>
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        <Image
          src={urlForImage(blog.authorImage)}
          width={200}
          height={200}
          priority
          alt={blog.authorName}
          className="object-cover rounded-full h-12 w-12 sm:h-24 sm:w-24"
        />
        <div className="flex flex-col gap-y-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">EmAar</h3>
          <p className="italic text-dark/80 dark:text-light/80">
            {blog.authorBio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-base xs:text-md sm:text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-3xl prose-h4:font-bold prose-h4:text-accentDarkPrimary prose-li:marker:text-accentDarkSecondary prose-li:list-disc prose-li:ml-12 prose-strong:text-accentDarkPrimary">
        <PortableText
          value={blog.content}
          //  components={components}
        />
      </section>
    </article>
  );
}
