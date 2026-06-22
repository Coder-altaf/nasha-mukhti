import Aboutheder from "./Aboutheder";
import AboutIntro from "./Aboutintro";
import MissionVision from "./Mission";
import Sets from "./Sets";
import Recovery from "./RecoveryFast";
import CTA from "./Cta";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      <Aboutheder />
      <AboutIntro />
      <MissionVision />
      <Sets />
      <Recovery />
      <CTA />
    </main>
  );
}