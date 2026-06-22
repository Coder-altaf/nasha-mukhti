"use client";

import { Wine, Pill, Leaf, SprayCan, CigaretteOff, Brain } from "lucide-react";

const problems = [
  {
    icon: Wine,
    title: "Alcohol De-Addiction",
    description: "Break free from alcohol and regain control of your life.",
  },
  {
    icon: Pill,
    title: "Drugs De-Addiction",
    description: "A safe path to recovery from harmful drug dependence.",
  },
  {
    icon: Leaf,
    title: "Marijuana",
    description: "Overcome marijuana use and rediscover a clear mind.",
  },
  {
    icon: SprayCan,
    title: "Substance Abuse",
    description:
      "Helping individuals escape addiction and build a brighter future.",
  },
  {
    icon: CigaretteOff,
    title: "Smoking Addiction",
    description: "Quit smoking today for a healthier tomorrow.",
  },
  {
    icon: Brain,
    title: "Stress Management",
    description: "Manage stress with therapy, yoga, and mindful living.",
  },
];

export default function MedicalProblems() {
  return (
    <section className="bg-[#f7f6f2] py-20 pt-5 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E658A]">
            Select Your{" "}
            <span className="text-lime-500">Area Of Medical Problem</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => {
            const Icon = problem.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-[2rem] p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-[2rem] bg-slate-50 group-hover:bg-red-50 transition-colors duration-300">
                  <Icon size={56} className="text-red-500" strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-8 text-3xl font-bold text-[#2E658A]">
                  {problem.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-xl text-slate-600 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
