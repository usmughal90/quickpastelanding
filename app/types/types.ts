

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
  content?: ContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  appName: string;
  featuredImage: FeaturedImage;
  seo: any | null;
  author:string;
  content2?:string;
  advanceContentFeature:boolean
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


interface GuideFAQ {
  id: number;
  question: string;
  answer: string;
}

type GuideHomeCTALink =
  | "hero"
  | "main-feature"
  | "why-choose"
  | "features"
  | "how-works"
  | "comparision-table"
  | "reviews"
  | "faqs"
  | "footer";

interface GuideHomeCTA {
  id?: number;
  title: string;
  link: GuideHomeCTALink;
}

type AppName = "quick-paste-manager" | "expensify";

interface Guide {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  content?: string;
  faqs?: GuideFAQ[];
  homeCTA?: GuideHomeCTA | null;
  appName: AppName;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface GuidesResponse {
  data: Guide[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export type {
 BlogPostsResponse,
 BlogPost,
 BlogPostAttributes,
//  BlogDetailPage,
 TransformedBlogPost,
 FeaturedImage,
 Article,
 Guide,
 GuideFAQ,
 GuideHomeCTA,
 GuideHomeCTALink,
 GuidesResponse,
 AppName,
};