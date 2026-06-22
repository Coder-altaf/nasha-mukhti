import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function TreatmentHero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/treatment-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-blue-900/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 bg-blue-600/20 border border-blue-400/30 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6 mt-5">
            ✓ 24×7 Confidential Support
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Nasha Se Azaadi Ki Ore,
            <span className="text-blue-400 block mt-2">
              Expert Treatment Programs
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-8 mb-8">
            Alcohol, cigarette, drugs aur anya nashon ke liye personalized
            treatment plans. Hamari expert team aapki recovery journey mein har
            kadam par saath hai.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get Help Now
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+919239003081"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-300">
            <span>✓ 100% Confidential Care</span>
            <span>✓ Expert Counsellors</span>
            <span>✓ Personalized Recovery Plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
