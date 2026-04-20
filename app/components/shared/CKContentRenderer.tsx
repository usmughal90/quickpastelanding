// "use client"

import DOMPurify from "isomorphic-dompurify";

const BASE_URL = process.env.NEXT_PUBLIC_API_IMAGE_URL;

type CKProps = {
    content:string
}

export default function CKContentRenderer({content} : CKProps) {
    const contentDisplay = content.replace(
  /src="\/uploads/g,
  `src="${BASE_URL}/uploads`
);
  return (
    <div
      className="ck-content prose prose-lg "
      dangerouslySetInnerHTML={{
        __html: DOMPurify.sanitize(contentDisplay),
      }}
    />
  );
}