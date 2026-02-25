// "use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "../types/types";
import ContentRenderer from "./ContentRenderer";

interface UpdatePostProps {
  data: Article;
}

const UpdateItem: React.FC<UpdatePostProps> = ({
  data: {
    title,
    content,
    createdAt,
    videoUrl,
    externalVideo,
    featureImage,
    internalUrl,
    blogUrl,
  },
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16 py-16 md:py-24 first:pt-0 border-b border-gray-200 dark:border-gray-800 last:border-none relative">
      {/* Left Column: Title & Date (Sticky behavior added here) */}
      <div className="lg:col-span-1 flex flex-col gap-2 lg:sticky lg:top-32 lg:self-start">
        <h2 className="text-3xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
          {title}
        </h2>
        <span className="text-gray-500 text-xs uppercase tracking-wider font-semibold mt-1">
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </span>
      </div>

      {/* Right Column: Content */}
      <div className="lg:col-span-3 flex flex-col gap-8">
        {featureImage.url && (
          <div className="w-full aspect-[2/1] relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700/50">
            <Image
              src={`${process.env.NEXT_PUBLIC_API_IMAGE_URL}${featureImage.url}`}
              alt={featureImage.alternativeText ?? featureImage.name}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="text-gray-600 dark:text-gray-400 text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
          <ContentRenderer content={content} />
        </div>

         <div className="flex flex-col sm:flex-row gap-6 mt-2">
        {externalVideo && videoUrl && (
          <Link
          target="_blank"
            href={videoUrl}
            className="text-gray-900 dark:text-gray-300 hover:text-primary dark:hover:text-blue-400 font-medium underline decoration-gray-300 dark:decoration-gray-600 hover:decoration-primary dark:hover:decoration-blue-400 underline-offset-4 transition-all"
          >
            See it in action
          </Link>
        )}
        {internalUrl && blogUrl && (
          <Link
            href={`blog/${blogUrl}`}
            className="text-gray-900 dark:text-white dark:hover:text-primary hover:text-primary font-medium underline decoration-gray-600 hover:decoration-primary underline-offset-4 transition-all"
          >
            Read more
          </Link>
        )}
      </div>
      </div>

     
    </div>
  );
};

export default UpdateItem;
