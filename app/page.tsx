

import Consultation from "./components/Consultation";
import HelpSection from "./components/HelpSection";
import Hero from "./components/Hero";
import MedicalProblems from "./components/MedicalProblems";
import TrustSection from "./components/TrustSection";
import WhyChooseUs from "./components/WhyChooseUs";


export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <MedicalProblems/>
      <Consultation />
      <HelpSection/>
       <TrustSection />
    </>
  );
}
