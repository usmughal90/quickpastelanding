import Hero from "./components/Hero";
import PrivacySection from "./components/PrivacySection";
import SocialProof from "./components/contact/SocialProof";
import ProblemSolution from "./components/contact/ProblemSolution";
import ComparisonTable from "./components/ComparisonTable";
import FAQ from "./components/FAQ";
import BottomCTA from "./components/BottomCTA";
import Summary from "./components/Summary";
import HowItWorks from "./components/HowItWorks";
import FeatureSection from "./components/FeatureList";
import Footer from "./components/Footer";
import { jsonLD } from "./data/home";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
      <main>
        <Hero />
        <PrivacySection />
        <Summary />
        <ProblemSolution />
        <FeatureSection />
        <HowItWorks />
        <ComparisonTable />
        <SocialProof />
        <FAQ />
        <BottomCTA />
        <Footer />
      </main>
    </>
  );
}