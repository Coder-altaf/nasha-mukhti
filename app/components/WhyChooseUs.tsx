"use client";

import Image from "next/image";

const features = [
  {
    image: "/1.png",
    title: "Certified Doctors",
    description:
      "Experienced addiction specialists and certified medical professionals provide personalized care.",
  },
  {
    image: "/2.png",
    title: "Personalized Treatment Plans",
    description:
      "Every patient receives a customized recovery program based on their unique needs.",
  },
  {
    image: "/3.png",
    title: "Safe & Comfortable Environment",
    description:
      "A secure, supportive, and peaceful environment designed for long-term recovery.",
  },
  {
    image: "/4.png",
    title: "Family Counseling",
    description:
      "We involve families in the healing process through dedicated counseling sessions.",
  },
  {
    image: "/5.png",
    title: "Aftercare Support",
    description:
      "Continuous follow-up and support programs help prevent relapse after treatment.",
  },
  {
    image: "/6.png",
    title: "Emergency Assistance",
    description:
      "Our team is available 24/7 to provide immediate help and crisis support.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6 -mt-16">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Why Choose Us
          </span>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-slate-900">
            Compassionate Care for Lasting Recovery
          </h2>

          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            We provide evidence-based treatment, expert guidance, and a
            supportive environment to help individuals rebuild their lives.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-72 w-full overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
