export const jsonLD = {
  "@context": "https://schema.org",
  "@graph": [

    {
      "@type": "Organization",
      "name": "Codematics",
      "url": "https://quickpaste.codematics.co"
    },

    {
      "@type": "SoftwareApplication",
      "name": "Clipboard Manager - QuickPaste",
      "alternateName": "Quick Paste Clipboard Tool for iOS",
      "url": "https://quickpaste.codematics.co",
      "downloadUrl": "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352",
      "applicationCategory": "ProductivityApplication",
      "operatingSystem": "iOS",
      "applicationSubCategory": "Clipboard Manager",
      "description": "Clipboard Manager - QuickPaste is a productivity app for iPhone that adds clipboard history to iOS. It allows users to save copied text, images, and links, organise clipboard items, reuse saved content across apps, and paste instantly using a custom keyboard extension. Clipboard data is stored locally on the device with optional Face ID protection for privacy.",
      "publisher": {
        "@type": "Organization",
        "name": "Codematics"
      },
      "offers": {
        "@type": "Offer",
        "url": "https://apps.apple.com/pk/app/copy-paste-keyboard/id6748644352",
        "price": "0",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock"
      },
      "isAccessibleForFree": true,
      "featureList": [
        "Save and reuse copied text, images, and links",
        "Unlimited clipboard history for iPhone",
        "Reuse saved clipboard items across apps",
        "Paste directly using iOS keyboard extension",
        "Action extension for instant saving",
        "Organise frequently used copied content",
        "Searchable clipboard list",
        "Face ID protection for clipboard history",
        "Local storage with no external data sharing",
        "Fast, responsive, and free to use"
      ]
    },

    {
      "@type": "FAQPage",
      "mainEntity": [

        {
          "@type": "Question",
          "name": "What is a clipboard manager on iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A clipboard manager is an app that saves copied items and provides clipboard history so users can paste previous content again."
          }
        },
        {
          "@type": "Question",
          "name": "What is the best way to save copied text on iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Using a clipboard manager app that stores copied text and lets you reuse it later."
          }
        },
        {
          "@type": "Question",
          "name": "Is clipboard data private?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "In privacy-focused clipboard managers, data is stored locally on the device and can be protected with Face ID."
          }
        },
        {
          "@type": "Question",
          "name": "Does iPhone support clipboard history?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Not by default. A clipboard manager app adds clipboard history functionality to iOS."
          }
        },
        {
          "@type": "Question",
          "name": "Can a clipboard app save images and links?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Advanced clipboard managers can store text, images, and links in a structured clipboard list."
          }
        },
        {
          "@type": "Question",
          "name": "How can I see my copy paste history on iPhone?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can view copy-paste history by using a clipboard manager app that stores copied content and shows it in a searchable list."
          }
        },
        {
          "@type": "Question",
          "name": "Does a clipboard manager work across different apps?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, saved clipboard items can be reused across supported apps using paste features and keyboard extensions."
          }
        },
        {
          "@type": "Question",
          "name": "Does the clipboard manager automatically capture everything I copy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It captures copied content based on app permissions and supported methods, not system-level interception."
          }
        }

      ]
    },

    {
      "@type": "HowTo",
      "name": "How Clipboard Manager - QuickPaste Works on iPhone",
      "description": "Learn how to enable clipboard history and reuse copied content on iPhone using QuickPaste.",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Enable Action Extension for Limitless Copying",
          "text": "Turn on the Quick Paste Action Extension to save anything instantly. Select any text or image, tap Share, and choose Copy to Quick Paste."
        },
        {
          "@type": "HowToStep",
          "name": "Use the Paste Keyboard Anywhere",
          "text": "While typing, long-press the language switch key, select Quick Paste, view saved clips, and tap any item to paste instantly."
        }
      ]
    },

    {
      "@type": "ItemList",
      "name": "QuickPaste vs Default iOS Clipboard Comparison",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Clipboard History Support"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Save Multiple Text, Images and Links"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Keyboard Extension for Instant Paste"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Face ID Protection"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Local Secure Storage"
        }
      ]
    }

  ]
}
