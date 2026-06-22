

import Consultation from "./components/Consultation";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import MedicalProblems from "./components/MedicalProblems";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <main className="pt-20">
      <Hero />
      <WhyChooseUs />
      <MedicalProblems />
      <Consultation />
      <HelpSection />
      <TrustSection />
    </main>
  );
}
