import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Phone,
  ShieldCheck,
  Users,
  Activity,
  Heart,
  BookOpen,
  Calendar,
} from "lucide-react";
import FacilityCard from "../../components/FacilityCard";

export default function FacilitiesHero() {
  return (
    <>
      <section className="relative min-h-[500px] flex items-center overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/facilities-hero.jpg')",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-blue-950/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div className="text-white">
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300 mt-5">
                Recovery • Care • Support
              </span>

              <h1 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Modern Facilities For
                <span className="block text-blue-400">
                  Better Recovery
                </span>
              </h1>

              <p className="mt-5 text-lg text-slate-300 max-w-2xl leading-8">
                Comfortable accommodation, 24×7 medical supervision,
                counselling sessions, yoga programs and holistic care
                designed to support long-term recovery.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white transition hover:bg-blue-700"
                >
                  Book a Visit
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="tel:+919239003081"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white hover:bg-white/10"
                >
                  <Phone size={18} />
                  Call Now
                </a>
              </div>

              {/* Highlights */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  ✓ Comfortable Rooms
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  ✓ 24×7 Medical Care
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm">
                  ✓ Yoga & Meditation
                </span>
              </div>
            </div>

            {/* Right Floating Card */}
            <div className="hidden lg:flex justify-end">
              <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">
                  Why Choose Us?
                </h3>

                <div className="space-y-5">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-blue-400" />
                    <span>24×7 Medical Support</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <BedDouble className="text-blue-400" />
                    <span>Comfortable Accommodation</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Users className="text-blue-400" />
                    <span>Experienced Counsellors</span>
                  </div>
                </div>

                <div className="mt-8 rounded-2xl bg-blue-600 p-5">
                  <p className="text-sm text-blue-100">
                    Admissions Open
                  </p>

                  <h4 className="text-xl font-bold mt-1">
                    Call 9239003081
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
