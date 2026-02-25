import Image from "next/image";
import { FeaturedImage } from "../types/types";

interface BlogItemProps {
  title: string;
  description: string;
  date: string;
  featuredImage: FeaturedImage;
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  description,
  date,
  featuredImage,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 py-12 md:py-16 border-b border-gray-200 dark:border-gray-800 last:border-none group cursor-pointer">
      <div className="flex flex-col gap-3 max-w-2xl">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-primary transition-colors">
          {title}
        </h2>
        <span className="text-gray-700 text-xs md:text-sm uppercase tracking-wider font-semibold">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
        <p className="text-gray-700 dark:text-gray-400 text-lg md:text-xl leading-relaxed mt-2">
          {description}
        </p>
      </div>
      {featuredImage?.url && (
        <div className="w-full md:w-[320px] aspect-[16/10] relative flex-shrink-0 overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800">
          <Image
            src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${featuredImage.url}`}
            alt={featuredImage.alternativeText || title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      )}
    </div>
  );
};

export default BlogItem;
