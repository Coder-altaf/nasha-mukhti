import {
  Stethoscope,
  Users,
  HeartHandshake,
  Brain,
  Flower2,
  ShieldCheck,
} from "lucide-react";

const programs = [
  {
    icon: Stethoscope,
    title: "Detox Program",
    description:
      "Safe aur medically supervised detox process jisse body harmful substances se free ho sake.",
  },
  {
    icon: Brain,
    title: "Individual Counselling",
    description:
      "One-to-one counselling sessions jo addiction ke root cause ko samajhne mein madad karte hain.",
  },
  {
    icon: Users,
    title: "Group Therapy",
    description:
      "Supportive group sessions jahan patients apne experiences share kar sakte hain.",
  },
  {
    icon: HeartHandshake,
    title: "Family Counselling",
    description:
      "Parivaar ko recovery process mein shamil karke emotional support diya jata hai.",
  },
  {
    icon: Flower2,
    title: "Yoga & Meditation",
    description:
      "Daily yoga aur meditation sessions se mind aur body ko relax kiya jata hai.",
  },
  {
    icon: ShieldCheck,
    title: "Aftercare Support",
    description:
      "Treatment ke baad bhi regular follow-up aur guidance provide ki jati hai.",
  },
];

export default function TreatmentPrograms() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Treatment Programs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Hamare Treatment Programs
          </h2>

          <p className="text-gray-600 text-lg mt-5 leading-8">
            Hamari expert team har patient ke liye personalized treatment plan
            tayyar karti hai, taaki recovery ka safar surakshit aur prabhavi ho.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 leading-7">{program.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
