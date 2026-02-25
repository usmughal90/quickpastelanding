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
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"
export default function Home() {
  return (
    <main>
      
      <Hero />
      <PrivacySection />
      <Summary /> 
      <ProblemSolution />
      <FeatureSection/>
      <HowItWorks />
      <ComparisonTable />
      <SocialProof />
      <FAQ />
      <BottomCTA />
      <Footer />
    </main>
  );
}
