import type { GuideHomeCTALink } from "../types/types";

const HOME_CTA_SECTION_IDS: Record<GuideHomeCTALink, string> = {
  hero: "hero",
  "main-feature": "main-feature",
  "why-choose": "why-choose",
  features: "features",
  "how-works": "how-it-work",
  "comparision-table": "choose-us",
  reviews: "reviews",
  faqs: "faqs",
  footer: "footer",
};

function getHomeCtaHref(link: GuideHomeCTALink): string {
  return `/#${HOME_CTA_SECTION_IDS[link]}`;
}

export { getHomeCtaHref, HOME_CTA_SECTION_IDS };
