
import AlcoholAddiction from "./Alcohal";
import TreatmentPrograms from "./Programs";
import Symptoms from "./Symtoms";
import TreatmentHero from "./TreatmentHero";
import TypesOfAddiction from "./TypOfAdiction";
import Proses from "./proses";

export default function Home() {
  return (
    <main className="pt-20 min-h-screen bg-slate-50">
      <TreatmentHero />
      <AlcoholAddiction />
      <TypesOfAddiction />
      <Symptoms />
      <TreatmentPrograms />
      <Proses />
    </main>
  );
}