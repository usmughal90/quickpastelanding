

interface RichTextNode {
  type: "text";
  text: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
}

// Paragraph block
interface ParagraphBlock {
  type: "paragraph";
  children: RichTextNode[];
}

// List item
interface ListItemBlock {
  type: "list-item";
  children: RichTextNode[];
}

// List block
interface ListBlock {
  type: "list";
  format: "ordered" | "unordered";
  children: ListItemBlock[];
}


export type ContentBlock = ParagraphBlock | ListBlock;

interface FeaturedImage {
  id: number;
  documentId: string;
  name: string;
  url: string;
  alternativeText: string | null;
}

interface BlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  shortDescription: string;
  content: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  appName: string;
  featuredImage: FeaturedImage;
  seo: any | null;
  author:string;
}




interface BlogPostsResponse {
 data: BlogPost[];
 meta: {
   pagination: {
     page: number;
     pageSize: number;
     pageCount: number;
     total: number;
   };
 };
}


interface TransformedBlogPost {
 id: number;
 slug: string;
 title: string;
 excerpt: string;
 coverImage: string;
 publishedAt: string;
 href: string;
}


interface BlogPostAttributes {
 id: number;
 postTitle: string;
 slug: string;
 blogShortDescription: string;
 rank: number | null;
 createdAt: string;
 updatedAt: string;
 publishedAt: string;
//  blogDetailPage: BlogDetailPage;
}

interface Article {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content: ContentBlock[];
  externalVideo: boolean;
  videoUrl: string | null;
  internalUrl: boolean;
  blogUrl: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  featureImage: FeaturedImage;
}


export type {
 BlogPostsResponse,
 BlogPost,
 BlogPostAttributes,
//  BlogDetailPage,
 TransformedBlogPost,
 FeaturedImage,
 Article

};