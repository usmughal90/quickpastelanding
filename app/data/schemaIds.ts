import { buildPublicSiteUrl } from "../utils/siteUrl";

/** Product site — this Next.js app (QuickPaste landing + blog). */
export const siteOrigin = buildPublicSiteUrl("/").replace(/\/$/, "");

/** Parent company portfolio site. */
export const companySiteOrigin = "https://www.codebusterapps.com";

export const organizationId = `${siteOrigin}/#organization`;
export const websiteId = `${siteOrigin}/#website`;
export const homepageWebpageId = `${siteOrigin}/#webpage`;
export const softwareId = `${siteOrigin}/#software`;
export const howItWorksUrl = `${siteOrigin}/#how-it-work`;
export const ORGANIZATION_NAME = "Codebuster Apps";

export const organizationSchema = {
  "@type": "Organization",
  "@id": organizationId,
  name: ORGANIZATION_NAME,
  url: companySiteOrigin,
  logo: buildPublicSiteUrl("/logo.png"),
  sameAs: [companySiteOrigin],
};
