import type { Metadata } from "next";
import Link from "next/link";
import { buildPublicSiteUrl } from "../utils/siteUrl";

export const metadata: Metadata = {
  title: "Privacy Policy | QuickPaste",
  description:
    "Privacy Policy for QuickPaste — how CodeBuster Apps collects, uses, and protects your information.",
  alternates: {
    canonical: buildPublicSiteUrl("/privacy-policy"),
  },
  robots: { index: true, follow: true },
};

const siteUrl = buildPublicSiteUrl("/");
const contactEmail = "codebuster2021@gmail.com";
const googlePrivacyUrl = "https://policies.google.com/privacy";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-28 pb-20 px-6">
      <article className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm font-semibold">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-zinc-600 dark:text-zinc-400">Privacy Policy</span>
        </nav>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Privacy Policy — QuickPaste
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          Effective Date: June 1, 2025
        </p>

        <div className="mt-8 space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            CodeBuster Apps (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
            operates the QuickPaste mobile application (the &quot;App&quot;) and
            the website at{" "}
            <a href={siteUrl} className="text-primary hover:underline">
              {siteUrl}
            </a>{" "}
            (the &quot;Site&quot;). This Privacy Policy explains how we collect,
            use, and protect your information when you use our App or Site.
          </p>
          <p>
            By downloading or using QuickPaste, you agree to the practices
            described in this Privacy Policy. If you do not agree, please do not
            use the App.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              1. Information We Collect
            </h2>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">
              1.1 Clipboard Content
            </h3>
            <p className="mt-2">
              QuickPaste is designed to save text, images, and links that you
              explicitly choose to copy and save using our Action Extension or
              keyboard extension. This clipboard content is:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Stored locally on your device by default</li>
              <li>Never transmitted to our servers</li>
              <li>Never shared with third parties</li>
              <li>
                Only synced via iCloud if you choose to enable iCloud Sync — in
                which case it syncs exclusively through your personal Apple iCloud
                account, which is governed by Apple&apos;s Privacy Policy
              </li>
            </ul>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">
              1.2 Usage and Analytics Data (Firebase)
            </h3>
            <p className="mt-2">
              We use Google Firebase, a third-party analytics service provided by
              Google LLC, to collect anonymised usage data about how users
              interact with the App. This may include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>App launch and session events</li>
              <li>
                Feature interactions (e.g. keyboard extension use, iCloud sync
                activation)
              </li>
              <li>Crash reports and performance data</li>
              <li>Device type and operating system version</li>
            </ul>
            <p className="mt-2">
              Firebase does not collect your clipboard content. The data
              collected is used solely to improve App performance and user
              experience. Firebase may process this data on servers located
              outside Pakistan, including in the United States. For more
              information, see Google&apos;s Privacy Policy at{" "}
              <a
                href={googlePrivacyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                {googlePrivacyUrl}
              </a>
            </p>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mt-4">
              1.3 Information You Provide Voluntarily
            </h3>
            <p className="mt-2">
              If you contact us via email, we may retain your email address and
              the content of your message to respond to your inquiry. We do not
              use this information for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              2. How We Use Your Information
            </h2>
            <p className="mt-2">We use the information we collect to:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Operate and maintain the App and its features</li>
              <li>Analyse usage patterns to improve performance and usability</li>
              <li>Diagnose crashes and fix technical issues</li>
              <li>Respond to support or privacy inquiries</li>
            </ul>
            <p className="mt-2">
              We do not sell, rent, or trade your personal information to any
              third party.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              3. iCloud Sync
            </h2>
            <p className="mt-2">iCloud Sync is an optional feature. When enabled:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Your clipboard history is synced across your iPhone and iPad
                devices using your personal Apple iCloud account
              </li>
              <li>
                Data is transmitted and stored by Apple under Apple&apos;s iCloud
                Terms and Privacy Policy
              </li>
              <li>CodeBuster Apps does not have access to your iCloud data</li>
              <li>
                You can disable iCloud Sync at any time in the App Settings
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              4. Face ID and Biometric Data
            </h2>
            <p className="mt-2">
              QuickPaste offers an optional Face ID lock for your clipboard
              history. Biometric data (Face ID) is processed entirely by iOS
              using Apple&apos;s Secure Enclave. CodeBuster Apps does not collect,
              store, or have access to any biometric data. Face ID authentication
              is handled exclusively by the operating system.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              5. Data Storage and Security
            </h2>
            <p className="mt-2">
              All clipboard data is stored locally on your device using iOS secure
              storage. We implement appropriate technical measures to protect your
              data. However, no method of electronic storage is 100% secure, and
              we cannot guarantee absolute security.
            </p>
            <p className="mt-2">
              If iCloud Sync is enabled, your data is protected by Apple&apos;s
              security infrastructure and your Apple ID credentials.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              6. Children&apos;s Privacy
            </h2>
            <p className="mt-2">
              QuickPaste is not directed at children under the age of 13. We do
              not knowingly collect personal information from children under 13.
              If you believe a child under 13 has provided us with personal
              information, please contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>{" "}
              and we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              7. International Users
            </h2>
            <p className="mt-2">
              CodeBuster Apps is based in Pakistan. QuickPaste is available to
              users in the United States, United Kingdom, and other countries. By
              using the App, you acknowledge that your data (if any is collected
              via Firebase) may be processed in countries outside your own,
              including the United States, where data protection laws may differ
              from those in your country.
            </p>
            <p className="mt-2">
              If you are located in the European Economic Area (EEA) or United
              Kingdom, you have rights under the UK GDPR and EU GDPR including
              the right to access, correct, or delete your personal data. To
              exercise these rights, contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              8. Third-Party Services
            </h2>
            <p className="mt-2">QuickPaste uses the following third-party services:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Google Firebase — analytics and crash reporting (Google LLC, USA)</li>
              <li>Apple iCloud — optional clipboard sync (Apple Inc., USA)</li>
              <li>Apple App Store — app distribution (Apple Inc., USA)</li>
            </ul>
            <p className="mt-2">
              Each of these services operates under its own privacy policy. We are
              not responsible for the privacy practices of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              9. Your Rights and Choices
            </h2>
            <p className="mt-2">
              You have the following choices regarding your data:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Disable iCloud Sync at any time in App Settings</li>
              <li>Delete all clipboard history within the App at any time</li>
              <li>Disable Firebase analytics by uninstalling the App</li>
              <li>
                Contact us to request access to or deletion of any personal data
                we hold about you
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              10. Changes to This Privacy Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. When we do, we
              will update the Effective Date at the top of this page. We encourage
              you to review this policy periodically. Continued use of the App
              after changes are posted constitutes your acceptance of the updated
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              11. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions, concerns, or requests regarding this
              Privacy Policy, please contact us:
            </p>
            <ul className="mt-2 list-none space-y-1 pl-0">
              <li>
                Email:{" "}
                <a
                  href={`mailto:${contactEmail}`}
                  className="text-primary hover:underline"
                >
                  {contactEmail}
                </a>
              </li>
              <li>
                Website:{" "}
                <a href={siteUrl} className="text-primary hover:underline">
                  {siteUrl}
                </a>
              </li>
              <li>Company: CodeBuster Apps</li>
            </ul>
          </section>

          <p>
            See also our{" "}
            <Link href="/terms" className="text-primary hover:underline">
              Terms and Conditions
            </Link>
            .
          </p>
        </div>
      </article>
    </main>
  );
}
