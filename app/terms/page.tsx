import type { Metadata } from "next";
import Link from "next/link";
import { buildPublicSiteUrl } from "../utils/siteUrl";

export const metadata: Metadata = {
  title: "Terms and Conditions | QuickPaste",
  description:
    "Terms and Conditions for QuickPaste mobile app and website, operated by CodeBuster Apps.",
  alternates: {
    canonical: buildPublicSiteUrl("/terms"),
  },
  robots: { index: true, follow: true },
};

const siteUrl = buildPublicSiteUrl("/");
const privacyPolicyUrl = buildPublicSiteUrl("/privacy-policy");
const contactEmail = "codebuster2021@gmail.com";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 pt-28 pb-20 px-6">
      <article className="mx-auto max-w-3xl">
        <nav className="mb-8 text-sm font-semibold">
          <Link href="/" className="text-primary hover:underline">
            Home
          </Link>
          <span className="mx-2 text-zinc-400">/</span>
          <span className="text-zinc-600 dark:text-zinc-400">
            Terms and Conditions — QuickPaste
          </span>
        </nav>

        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white">
          Terms and Conditions
        </h1>
        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-2">
          Effective date: June 1, 2026
        </p>

        <div className="mt-8 space-y-8 text-zinc-700 dark:text-zinc-300 leading-relaxed">
          <p>
            These Terms and Conditions (&quot;Terms&quot;) govern your access to
            and use of the QuickPaste mobile application (the &quot;App&quot;) and
            website at{" "}
            <a
              href={siteUrl}
              className="text-primary hover:underline"
            >
              {siteUrl}
            </a>{" "}
            (the &quot;Site&quot;), operated by CodeBuster Apps (&quot;we&quot;,
            &quot;us&quot;, or &quot;our&quot;).
          </p>
          <p>
            By downloading, installing, or using QuickPaste, you agree to be
            bound by these Terms. If you do not agree, do not use the App or
            Site.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              1. Eligibility
            </h2>
            <p className="mt-2">
              You must be at least 13 years of age to use QuickPaste. By using
              the App, you represent and warrant that you meet this requirement.
              If you are under 18, you confirm that you have obtained consent
              from a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              2. License to Use
            </h2>
            <p className="mt-2">
              Subject to your compliance with these Terms, CodeBuster Apps grants
              you a limited, non-exclusive, non-transferable, revocable licence
              to download and use QuickPaste on Apple iOS devices that you own or
              control, solely for your personal, non-commercial use.
            </p>
            <p className="mt-2">You may not:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Copy, modify, distribute, sell, or lease any part of the App</li>
              <li>
                Reverse engineer or attempt to extract the source code of the
                App
              </li>
              <li>Use the App for any unlawful or unauthorised purpose</li>
              <li>
                Use the App in any way that could damage, disable, or impair the
                App or interfere with other users
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              3. App Features and Functionality
            </h2>
            <p className="mt-2">QuickPaste provides the following features:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Clipboard history management for text, images, and links</li>
              <li>iOS keyboard extension for instant pasting across apps</li>
              <li>Action Extension for saving content via the iOS Share sheet</li>
              <li>Optional Face ID protection for clipboard history</li>
              <li>Optional iCloud Sync across iPhone and iPad</li>
            </ul>
            <p className="mt-2">
              Features may be updated, modified, or removed at any time without
              prior notice. We reserve the right to introduce new features, some
              of which may be subject to additional terms or pricing.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              4. User Responsibilities
            </h2>
            <p className="mt-2">You are solely responsible for:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                The content you copy, save, and manage using QuickPaste
              </li>
              <li>
                Ensuring that your use of the App complies with all applicable
                laws and regulations in your jurisdiction
              </li>
              <li>
                Maintaining the security of your device and iCloud account if
                iCloud Sync is enabled
              </li>
            </ul>
            <p className="mt-2">
              You agree not to use QuickPaste to store, copy, or distribute
              content that is unlawful, harmful, defamatory, obscene, infringing,
              or otherwise objectionable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              5. Intellectual Property
            </h2>
            <p className="mt-2">
              All content, features, and functionality of QuickPaste — including
              but not limited to the App&apos;s design, graphics, code, and
              trademarks — are owned by CodeBuster Apps and are protected by
              applicable intellectual property laws.
            </p>
            <p className="mt-2">
              Nothing in these Terms grants you any right to use the CodeBuster
              Apps or QuickPaste name, logo, or trademarks without our prior
              written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              6. Privacy
            </h2>
            <p className="mt-2">
              Your use of QuickPaste is also governed by our Privacy Policy,
              available at{" "}
              <Link href="/privacy-policy" className="text-primary hover:underline">
                {privacyPolicyUrl}
              </Link>
              , which is incorporated into these Terms by reference. By using the
              App, you consent to the data practices described in the Privacy
              Policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              7. Third-Party Services
            </h2>
            <p className="mt-2">
              QuickPaste integrates with the following third-party services:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Google Firebase — for analytics and crash reporting</li>
              <li>Apple iCloud — for optional clipboard sync</li>
              <li>Apple App Store — for app distribution</li>
            </ul>
            <p className="mt-2">
              Your use of these third-party services is subject to their
              respective terms and privacy policies. CodeBuster Apps is not
              responsible for the practices or content of any third-party
              services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              8. Disclaimer of Warranties
            </h2>
            <p className="mt-2">
              QuickPaste is provided on an &quot;as is&quot; and &quot;as
              available&quot; basis without any warranties of any kind, either
              express or implied. To the fullest extent permitted by applicable
              law, CodeBuster Apps disclaims all warranties, including:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>That the App will be uninterrupted, error-free, or secure</li>
              <li>That any defects or errors will be corrected</li>
              <li>That the App will meet your specific requirements</li>
              <li>
                That clipboard data will never be lost due to technical failures
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              9. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by applicable law, CodeBuster Apps
              and its officers, employees, and agents shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages,
              including but not limited to loss of data, loss of profits, or
              loss of goodwill, arising out of or in connection with your use of
              QuickPaste.
            </p>
            <p className="mt-2">
              Our total liability to you for any claim arising out of or relating
              to these Terms or the App shall not exceed the amount you paid us
              in the 12 months preceding the claim (which, given the App is free,
              shall be zero).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              10. Termination
            </h2>
            <p className="mt-2">
              We reserve the right to suspend or terminate your access to
              QuickPaste at any time, with or without notice, if we believe you
              have violated these Terms or for any other reason at our sole
              discretion.
            </p>
            <p className="mt-2">
              Upon termination, your right to use the App ceases immediately.
              Locally stored clipboard data will remain on your device until you
              delete the App.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              11. Governing Law and Jurisdiction
            </h2>
            <p className="mt-2">
              These Terms are intended to comply with applicable laws in the
              jurisdictions where QuickPaste is available, including the United
              States, United Kingdom, European Union, and other regions.
            </p>
            <p className="mt-2">
              Your statutory rights as a consumer under the laws of your country
              of residence are not affected by these Terms. Nothing in these
              Terms limits or excludes any rights you have under applicable
              consumer protection legislation in your jurisdiction.
            </p>
            <p className="mt-2">
              For users in the United Kingdom and European Union: You have the
              right to bring disputes before the courts of your country of
              residence. These Terms do not override any mandatory protections
              afforded to you under UK or EU consumer law.
            </p>
            <p className="mt-2">
              For users in the United States: These Terms shall be governed by
              and construed in accordance with the laws of the State of
              Delaware, without regard to conflict of law principles, except
              where applicable federal or state law requires otherwise.
            </p>
            <p className="mt-2">
              We aim to resolve any disputes fairly and promptly. If you have a
              concern, please contact us at{" "}
              <a
                href={`mailto:${contactEmail}`}
                className="text-primary hover:underline"
              >
                {contactEmail}
              </a>{" "}
              before initiating any formal proceedings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              12. Changes to These Terms
            </h2>
            <p className="mt-2">
              We may update these Terms from time to time. When we do, we will
              update the Effective Date at the top of this page. Your continued
              use of the App after changes are posted constitutes your acceptance
              of the revised Terms. We encourage you to review these Terms
              periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
              13. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions about these Terms, please contact us:
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
        </div>
      </article>
    </main>
  );
}
