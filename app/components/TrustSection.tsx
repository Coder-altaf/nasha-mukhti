"use client";

import { Award, HeartHandshake, Clock3, ShieldCheck } from "lucide-react";

const trustData = [
  {
    icon: Award,
    number: "10+",
    title: "Years of Excellence",
    description:
      "Trusted addiction recovery services with experienced specialists.",
  },
  {
    icon: HeartHandshake,
    number: "5000+",
    title: "Lives Recovered",
    description: "Helping individuals and families rebuild healthier lives.",
  },
  {
    icon: Clock3,
    number: "24/7",
    title: "Immediate Support",
    description: "Expert guidance and emergency assistance whenever needed.",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Confidential Care",
    description: "Your privacy, dignity, and treatment remain fully protected.",
  },
];

export default function TrustSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 -mt-16">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Trusted Recovery Center
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Why Thousands Trust Us
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We provide compassionate care, expert guidance, and a safe
            environment to support every step of your recovery journey.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-3xl p-8 text-center border border-slate-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-blue-100 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={36} />
                </div>

                <h3 className="mt-6 text-4xl font-extrabold text-slate-900">
                  {item.number}
                </h3>

                <h4 className="mt-3 text-xl font-semibold text-slate-800">
                  {item.title}
                </h4>

                <p className="mt-3 text-slate-500 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
