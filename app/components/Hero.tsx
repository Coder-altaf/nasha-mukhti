"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const slides = [
    {
      image: "/slider1.png",
      title: "Break Free From Addiction",
      subtitle: "Start Your Recovery Today",
    },
    {
      image: "/slider2.jpeg",
      title: "A New Life Begins",
      subtitle: "One Step at a Time",
    },
    {
      image: "/nasa.png",
      title: "You Are Not Alone",
      subtitle: "We're Here to Help",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${slides[index].image})` }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Recovery Starts
          <br />
          <span className="text-emerald-400">With One Call</span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
          Professional addiction treatment with immediate consultation, personalized care, and 24/7 support for you and your family.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold transition">
            Get Help Now
          </button>

          <button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition">
            Check Insurance
          </button>
        </div>

        <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-center">
          <div>
            <p className="text-sm text-gray-300">24/7 Crisis Support</p>
            <p className="text-3xl font-bold text-white">+91 92390 03081</p>
          </div>

          <div className="hidden md:block h-12 w-px bg-white/30" />

          <div>
            <p className="text-sm text-gray-300">Serving Patients Nationwide</p>
            <p className="text-xl font-semibold text-white">Confidential & Trusted Care</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* <svg viewBox="0 0 1440 180" className="w-full h-auto" preserveAspectRatio="none">
          <path fill="#ffffff" d="M0,160 C320,80 1120,80 1440,160 L1440,180 L0,180 Z" />
        </svg> */}
      </div>

      <button
        className="absolute left-6 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute right-6 top-1/2 z-20 h-12 w-12 -translate-y-1/2 rounded-full bg-white/20 text-white backdrop-blur transition hover:bg-white/30"
        onClick={nextSlide}
      >
        ❯
      </button>
    </section>
  );
}
