"use client";

import { Hospital, Stethoscope, Headphones, Bed, Phone } from "lucide-react";

const topCards = [
  {
    icon: Hospital,
    title: "Recovery Programs",
  },
  {
    icon: Stethoscope,
    title: "Expert Counseling",
  },
  {
    icon: Headphones,
    title: "Online Support",
  },
];

const bottomCards = [
  {
    icon: Phone,
    title: "Reach Out",
    description: "Contact us confidentially for guidance.",
    highlight: "for guidance.",
  },
  {
    icon: Bed,
    title: "Personalized Counseling",
    description: "Our experts understand your needs.",
    highlight: "your needs",
  },
  {
    icon: Hospital,
    title: "Holistic Treatment",
    description: "Detox, therapy, meditation, and wellness.",
    highlight: "wellness",
  },
];

export default function HelpSection() {
  return (
    <section className="bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#2E658A]">
            👉 Are you <span className="text-lime-500">looking for help</span>{" "}
            with?
          </h2>
        </div>

        {/* Top Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <div
                key={index}
                className="bg-[#2E658A] rounded-3xl px-8 py-8 flex items-center gap-5 hover:scale-105 transition duration-300 shadow-lg"
              >
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                  <Icon size={32} className="text-[#2E658A]" />
                </div>

                <h3 className="text-2xl font-bold text-white">{card.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-[#1F232B] rounded-none md:rounded-2xl px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {bottomCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className={`text-center px-8 py-4 ${
                    index !== 2 ? "md:border-r md:border-slate-700" : ""
                  }`}
                >
                  <Icon size={50} className="mx-auto text-white" />

                  <h3 className="mt-6 text-4xl font-bold text-lime-500">
                    {card.title}
                  </h3>

                  <p className="mt-5 text-xl text-slate-300 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
