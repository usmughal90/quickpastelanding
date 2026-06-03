import { buildPublicSiteUrl } from "../utils/siteUrl";

const siteOrigin = buildPublicSiteUrl("/").replace(/\/$/, "");
const appStoreUrl =
  "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352";

export const jsonLD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "CodeBuster Apps",
      url: siteOrigin,
      logo: buildPublicSiteUrl("/logo.png"),
      sameAs: [appStoreUrl],
    },

    {
      "@type": ["SoftwareApplication", "MobileApplication"],
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
      publisher: {
        "@type": "Organization",
        name: "CodeBuster Apps",
      },
      offers: {
        "@type": "Offer",
        url: appStoreUrl,
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
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
      mainEntity: [
        {
          "@type": "Question",
          name: "What is a clipboard manager on iPhone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A clipboard manager is an app that saves your copied items and provides clipboard history so you can paste previous content again. QuickPaste is a free clipboard manager for iPhone that stores unlimited copied text, images, and links and lets you reuse them instantly via a keyboard extension.",
          },
        },
        {
          "@type": "Question",
          name: "Does iPhone support clipboard history by default?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. iOS only stores the most recently copied item. Once you copy something new, the previous item is permanently lost. QuickPaste adds full clipboard history to iPhone, so nothing you copy is ever lost.",
          },
        },
        {
          "@type": "Question",
          name: "What is the best way to save copied text on iPhone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The best way to save copied text on iPhone is to use QuickPaste, a free clipboard manager that automatically stores everything you copy and lets you reuse it instantly from your keyboard — without switching apps.",
          },
        },
        {
          "@type": "Question",
          name: "Is clipboard data private in QuickPaste?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QuickPaste stores all clipboard data locally on your device by default. No data is shared externally. You can also enable Face ID to lock your clipboard history. If iCloud Sync is enabled, data syncs only through your personal iCloud account.",
          },
        },
        {
          "@type": "Question",
          name: "Can QuickPaste save images and links as well as text?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QuickPaste can save text, images, and links to your clipboard history. All saved items are accessible from the keyboard extension and can be pasted into any supported app instantly.",
          },
        },
        {
          "@type": "Question",
          name: "How can I see my copy paste history on iPhone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can view your copy-paste history on iPhone by using QuickPaste. It stores everything you copy in a searchable list, which you can access directly from your keyboard while typing in any app.",
          },
        },
        {
          "@type": "Question",
          name: "Does QuickPaste work across different apps on iPhone?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QuickPaste works across apps using its keyboard extension. While typing in any app, you can open your saved clipboard history and paste any item without leaving the app you are in.",
          },
        },
        {
          "@type": "Question",
          name: "Does QuickPaste sync clipboard history across iPhone and iPad?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QuickPaste supports optional iCloud sync so your clipboard history is available across all your iPhone and iPad devices. Sync is opt-in and disabled by default — your data stays on-device unless you choose to enable it.",
          },
        },
        {
          "@type": "Question",
          name: "Is QuickPaste free?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. QuickPaste is completely free to download and use with no mandatory in-app purchases. It is available on the App Store for iPhone and iPad.",
          },
        },
        {
          "@type": "Question",
          name: "Does the clipboard manager automatically capture everything I copy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "QuickPaste captures copied content using iOS-permitted methods via the Action Extension and keyboard extension. It does not intercept clipboard data at the system level. To save an item, use the Share sheet and tap Copy to Quick Paste.",
          },
        },
      ],
    },

    {
      "@type": "HowTo",
      name: "How to Use Clipboard History on iPhone with QuickPaste",
      description:
        "Learn how to save copied text, images, and links on iPhone and paste them across any app using QuickPaste clipboard manager.",
      totalTime: "PT2M",
      tool: {
        "@type": "HowToTool",
        name: "QuickPaste — Clipboard Manager for iPhone",
      },
      step: [
        {
          "@type": "HowToStep",
          position: "1",
          name: "Enable the Action Extension",
          text: "Go to iOS Settings and enable the Quick Paste Action Extension. Then select any text, image, or link in any app, tap the Share button, and choose Copy to Quick Paste to save it to your clipboard history.",
          url: `${siteOrigin}/#how-it-works`,
        },
        {
          "@type": "HowToStep",
          position: "2",
          name: "Access Saved Clips from the Keyboard",
          text: "While typing in any app, long-press the language switch key on the iOS keyboard and select Quick Paste. Your saved clipboard history will appear. Tap any item to paste it instantly without switching apps.",
          url: `${siteOrigin}/#how-it-works`,
        },
        {
          "@type": "HowToStep",
          position: "3",
          name: "Enable iCloud Sync (Optional)",
          text: "Open the QuickPaste app, go to Settings, and enable iCloud Sync to access your clipboard history across all your iPhone and iPad devices automatically.",
          url: `${siteOrigin}/#how-it-works`,
        },
      ],
    },

    {
      "@type": "ItemList",
      name: "Best Clipboard Manager Apps for iPhone 2026",
      description:
        "A curated list of the top clipboard manager apps for iPhone, including comparisons and reviews.",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "QuickPaste — Best Free Clipboard Manager for iPhone",
          url: siteOrigin,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "QuickPaste vs Paste vs PastePal — Full Comparison",
          url: buildPublicSiteUrl(
            "/blog/quick-paste-vs-paste-vs-paste-pal-best-clipboard-manager-for-i-phone",
          ),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Best 6 Clipboard Manager Apps Reviewed",
          url: buildPublicSiteUrl(
            "/blog/which-clipboard-manager-should-you-choose-best-6-clipboard-apps-reviewed",
          ),
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
    },
  ],
};
