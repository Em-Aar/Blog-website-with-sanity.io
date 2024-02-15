import Image from "next/image";
import Link from "next/link";

export default function BlogCard({title, summary, image, slug}: {title: string, summary: string, image: string, slug:string}) {
  return (
    <section className="flex flex-col justify-between h-[480px]  rounded bg-light/90 dark:bg-dark/40 shadow-md shadow-gray-300 dark:shadow-black/80 group hover:scale-105 transition-transform ease-out duration-700">
      {/* Image Section*/}
      <div className="relative max-h-76 flex-1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t"
        />
      </div>

      {/* Title and Summary */}
      <div className="flex flex-col justify-between gapx-y-4  p-4">
        <h2 className="text-lg font-semibold line-clamp-2 text-dark dark:text-light leading-tight mb-2">
          {title}
        </h2>
        <p className="text-dark/70 dark:text-light/70 line-clamp-3">
          {summary}
        </p>

        {/* Read More dynamic Link */}
        <Link
          href={`/blog/${slug}`}
          className="block px-4 py-1 text-center bg-accentDarkSecondary  rounded text-dark font-semibold mt-4"
        >
          Read More
        </Link>
      </div>
    </section>
  );
}
