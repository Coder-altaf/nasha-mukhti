import {
  PhoneCall,
  ClipboardCheck,
  ShieldPlus,
  MessageCircleHeart,
  HeartHandshake,
  RefreshCcw,
} from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Consultation",
    description:
      "Sabse pehle hamari expert team aapse baat karke aapki situation ko samajhti hai.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessment",
    description:
      "Doctors aur counsellors aapki physical aur mental health ka evaluation karte hain.",
  },
  {
    icon: ShieldPlus,
    title: "Detox Program",
    description:
      "Safe aur monitored detox process ke through body ko harmful substances se free kiya jata hai.",
  },
  {
    icon: MessageCircleHeart,
    title: "Therapy Sessions",
    description:
      "Individual aur group therapy ke zariye recovery journey ko support kiya jata hai.",
  },
  {
    icon: HeartHandshake,
    title: "Rehabilitation",
    description:
      "Healthy habits aur positive lifestyle develop karne mein madad ki jati hai.",
  },
  {
    icon: RefreshCcw,
    title: "Follow-Up Care",
    description:
      "Treatment ke baad bhi regular guidance aur support diya jata hai.",
  },
];

export default function RecoveryProcess() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Recovery Journey
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Aapki Recovery Ka Safar
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Hamara structured recovery process har patient ko step-by-step
            support karta hai, taaki woh ek healthy aur nasha-mukt zindagi ki
            taraf badh sake.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-blue-100" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="bg-slate-50 p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                          <Icon size={28} />
                        </div>

                        <div>
                          <p className="text-sm text-blue-600 font-medium">
                            Step {index + 1}
                          </p>

                          <h3 className="text-2xl font-bold text-gray-900">
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-7">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-blue-600 text-white items-center justify-center font-bold border-4 border-white shadow-lg">
                    {index + 1}
                  </div>

                  {/* Empty Space */}
                  <div className="hidden md:block w-1/2" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
