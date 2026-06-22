import Link from "next/link";
import { ArrowRight, BedDouble, Phone, ShieldCheck } from "lucide-react";

export default function FacilitiesHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/facilities-hero.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-blue-900/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-6">
            🏥 Safe • Comfortable • Confidential
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Hamari Modern Facilities Ke Saath
            <span className="block text-blue-400 mt-2">
              Recovery Ka Safar Banayein Aasaan
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-8 mb-8">
            Comfortable rooms, 24×7 medical support, yoga sessions aur peaceful
            environment ke saath hum aapko ek safe aur positive recovery
            experience provide karte hain.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Book a Visit
              <ArrowRight size={20} />
            </Link>

            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Highlights */}
          <div className="flex flex-wrap gap-6 text-sm md:text-base">
            <div className="flex items-center gap-2 text-gray-300">
              <BedDouble size={18} className="text-blue-400" />
              Comfortable Rooms
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              <ShieldCheck size={18} className="text-blue-400" />
              24×7 Medical Care
            </div>

            <div className="flex items-center gap-2 text-gray-300">
              🧘 Yoga & Meditation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
