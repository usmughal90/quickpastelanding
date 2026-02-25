import Hero from "../components/Hero";
import PrivacySection from "../components/PrivacySection";
import SocialProof from "../components/contact/SocialProof";
import ProblemSolution from "../components/contact/ProblemSolution";
import ComparisonTable from "../components/ComparisonTable";
import FAQ from "../components/FAQ";
import BottomCTA from "../components/BottomCTA";
import Summary from "../components/Summary";
import HowItWorks from "../components/HowItWorks";
import FeatureSection from "../components/FeatureList";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-transparent dark:bg-gray-950">
            {/* Full Landing Page Sequence */}
            <Hero />
            <PrivacySection />
            <Summary />
            <ProblemSolution />
            <FeatureSection />
            <HowItWorks />
            <SocialProof />
            <ComparisonTable />
            <FAQ />
            <BottomCTA />
        </main>
    );
}
