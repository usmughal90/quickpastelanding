"use client"

// import DOMPurify from "isomorphic-dompurify";
import { buildImageUrl } from "@/app/utils/urls";

// const uploadsBaseUrl = buildImageUrl("/uploads") ?? "/uploads";

type CKProps = {
    content:string
}

export default function CKContentRenderer({content} : CKProps) {
//     const contentDisplay = content.replace(
//   /src="\/uploads/g,
//   `src="${uploadsBaseUrl}/`
// );
  return (
    <div
      className="ck-content prose prose-lg "
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}