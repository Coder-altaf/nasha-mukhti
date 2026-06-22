import {
  PhoneCall,
  ClipboardCheck,
  HeartPulse,
  MessageCircleHeart,
  ShieldCheck,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    desc: "Hamari team aapse baat karke aapki problem ko samajhti hai.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    desc: "Experts aapki condition ka detailed evaluation karte hain.",
  },
  {
    icon: HeartPulse,
    title: "Detox Program",
    desc: "Safe aur monitored detox process ke through body ko recover kiya jata hai.",
  },
  {
    icon: MessageCircleHeart,
    title: "Therapy",
    desc: "Individual aur group counselling sessions karaye jate hain.",
  },
  {
    icon: ShieldCheck,
    title: "Rehabilitation",
    desc: "Healthy habits aur confidence dobara develop karne mein madad ki jati hai.",
  },
  {
    icon: RefreshCw,
    title: "Follow-Up",
    desc: "Recovery ke baad bhi regular support aur guidance di jati hai.",
  },
];

export default function RecoveryProcess() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Recovery Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Aapki Recovery Ka Har Kadam Hamare Saath
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Hamara structured recovery program aapko nasha se azaadi aur ek
            healthy zindagi ki taraf le jata hai.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="absolute top-6 right-6 text-5xl font-bold text-blue-100">
                  0{index + 1}
                </div>

                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
                  <Icon size={32} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-7">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
