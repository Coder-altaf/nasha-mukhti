import {
  Wine,
  Cigarette,
  Pill,
  Syringe,
  Smartphone,
  Gamepad2,
} from "lucide-react";

const addictions = [
  {
    icon: Wine,
    title: "Alcohol Addiction",
    description:
      "Sharab ki lat se chutkaara paane ke liye safe aur effective treatment programs.",
  },
  {
    icon: Cigarette,
    title: "Cigarette & Tobacco",
    description:
      "Smoking, gutkha aur tobacco ki aadat ko chhodne ke liye expert support.",
  },
  {
    icon: Pill,
    title: "Drug Addiction",
    description:
      "Prescription aur illegal drugs ki lat ke liye personalized recovery plans.",
  },
  {
    icon: Syringe,
    title: "Substance Abuse",
    description:
      "Har tarah ke harmful substances se recovery ke liye professional care.",
  },
  {
    icon: Smartphone,
    title: "Mobile & Internet Addiction",
    description:
      "Excessive screen time aur digital dependency ko control karne mein madad.",
  },
  {
    icon: Gamepad2,
    title: "Gaming Addiction",
    description:
      "Gaming ki lat se bahar nikalne ke liye counselling aur behaviour therapy.",
  },
];

export default function TypesOfAddiction() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Treatments
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">
            Types of Addiction We Treat
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mt-4 text-lg">
            Hamari expert team alag-alag prakaar ki addictions ke liye
            personalized treatment aur recovery support provide karti hai.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {addictions.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <Icon size={30} />
                </div>

                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
