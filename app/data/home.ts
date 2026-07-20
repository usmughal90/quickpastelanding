import { buildPublicSiteUrl } from "../utils/siteUrl";
import { homeFaqItems } from "./faq";
import {
  homepageWebpageId,
  howItWorksUrl,
  organizationId,
  organizationSchema,
  siteOrigin,
  softwareId,
  websiteId,
} from "./schemaIds";

const appStoreUrl =
  "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352";

export const jsonLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: siteOrigin,
      name: "QuickPaste",
      publisher: { "@id": organizationId },
    },
    {
      "@type": "WebPage",
      "@id": homepageWebpageId,
      url: siteOrigin,
      name: "QuickPaste — Clipboard Manager for iPhone",
      isPartOf: { "@id": websiteId },
      about: { "@id": softwareId },
      mainEntity: { "@id": softwareId },
    },
    organizationSchema,
    {
      "@type": ["SoftwareApplication", "MobileApplication"],
      "@id": softwareId,
      name: "Clipboard Manager - QuickPaste",
      alternateName: "Quick Paste Clipboard Tool for iOS",
      url: siteOrigin,
      downloadUrl: appStoreUrl,
      applicationCategory: "ProductivityApplication",
      applicationSubCategory: "Clipboard Manager",
      operatingSystem: "iOS 16.0 or later",
      description:
        "QuickPaste is a free clipboard manager for iPhone and iPad that adds unlimited clipboard history to iOS. Save copied text, images, and links, reuse them across any app via a keyboard extension, and optionally sync across devices with iCloud. Clipboard data is stored locally with optional Face ID protection.",
      image: buildPublicSiteUrl("/og-image.png"),
      screenshot: [
        buildPublicSiteUrl("/screenshots/screen1.png"),
        buildPublicSiteUrl("/screenshots/screen2.png"),
        buildPublicSiteUrl("/screenshots/screen3.png"),
      ],
      publisher: { "@id": organizationId },
      offers: {
        "@type": "Offer",
        url: appStoreUrl,
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/OnlineOnly",
      },
      isAccessibleForFree: true,
      featureList: [
        "Unlimited clipboard history for iPhone and iPad",
        "Save and reuse copied text, images, and links",
        "iCloud sync across iPhone and iPad",
        "Paste directly using iOS keyboard extension",
        "Action extension for instant saving via Share sheet",
        "Searchable clipboard history",
        "Face ID protection for clipboard history",
        "Local on-device storage with no external data sharing",
        "No account required",
        "Free to use",
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: homeFaqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "HowTo",
      name: "How Clipboard Manager Works",
      description:
        "Instead of copying the same content repeatedly, users can store and reuse it with one tap.",
      totalTime: "PT2M",
      tool: {
        "@type": "HowToTool",
        name: "QuickPaste — Clipboard Manager for iPhone",
      },
      step: [
        {
          "@type": "HowToStep",
          position: 1,
          name: "Enable Action Extension for Limitless Copying",
          text: "Turn on the Quick Paste Action Extension to save anything instantly. Select any text or image → tap Share → choose Copy to Quick Paste.",
          url: howItWorksUrl,
        },
        {
          "@type": "HowToStep",
          position: 2,
          name: "Use the Paste Keyboard Anywhere",
          text: "While typing, long-press the language switch key → select Quick Paste → view saved clips → tap any item to paste instantly.",
          url: howItWorksUrl,
        },
      ],
    },
    {
      "@type": "VideoObject",
      name: "How to enable the Quick Paste keyboard on iPhone",
      description:
        "Step-by-step demo showing how to enable and use the Quick Paste keyboard extension on iOS.",
      contentUrl: `${siteOrigin}/video/EnablingKeyboard.mp4`,
      embedUrl: `${siteOrigin}/video/EnablingKeyboard.mp4`,
      uploadDate: "2026-02-24",
      thumbnailUrl: `${siteOrigin}/header.png`,
      publisher: { "@id": organizationId },
    },
  ],
};
