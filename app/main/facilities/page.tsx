import FacilitiesHero from "./FacilitiesHero";
import FacilityCard from "../../components/FacilityCard";
import StaffCard from "../../components/StaffCard";
import {
  BedDouble,
  ShieldCheck,
  Users,
  Activity,
  Heart,
  BookOpen,
} from "lucide-react";

export default function Home() {
  return (
    <main className="pt-20 bg-slate-50 text-black">
      {/* Hero */}
      <FacilitiesHero />

      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* <div className="text-sm text-gray-500 mb-6">
          <nav className="max-w-6xl mx-auto px-6" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
              <li><a href="/" className="text-blue-600 font-medium">Home</a></li>
              <li>/</li>
              <li className="text-slate-600">Facilities</li>
            </ol>
          </nav>
        </div> */}

        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">Facilities</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900">Comprehensive Care, Comfortable Stay</h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our centre blends medical supervision with holistic therapies, education and
            a supportive community to help residents build lasting recovery.
          </p>
        </div>

        {/* Quick stats */}
        <div className="mt-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-2xl font-bold">40+</div>
            <div className="text-sm text-gray-500">Inpatient Beds</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-2xl font-bold">24/7</div>
            <div className="text-sm text-gray-500">Medical Care</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-2xl font-bold">Daily</div>
            <div className="text-sm text-gray-500">Therapy Sessions</div>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm text-center">
            <div className="text-2xl font-bold">Community</div>
            <div className="text-sm text-gray-500">Peer Support Groups</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <FacilityCard
            Icon={BedDouble}
            title="Inpatient & Comfortable Rooms"
            description="Private and shared rooms with regular housekeeping, comfortable bedding and a peaceful campus for rest."
          />

          <FacilityCard
            Icon={ShieldCheck}
            title="Medical Detox & Supervision"
            description="Round-the-clock nursing and physician oversight during detox and stabilization."
          />

          <FacilityCard
            Icon={Users}
            title="Counselling & Psychotherapy"
            description="Individual therapy, group counseling, family sessions and trauma-informed care."
          />

          <FacilityCard
            Icon={Activity}
            title="Holistic Activities"
            description="Yoga, meditation, art therapy, gardening and recreational activities to rebuild routines."
          />

          <FacilityCard
            Icon={Heart}
            title="Aftercare & Peer Support"
            description="Structured relapse-prevention plans, peer groups and community reintegration support."
          />

          <FacilityCard
            Icon={BookOpen}
            title="Education & Vocational Help"
            description="Life-skills workshops, vocational training and placement support to regain independence."
          />
        </div>

        <section className="mt-12">
          <h3 className="text-xl font-semibold mb-6">Meet Our Team</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <StaffCard name="Dr. S. Kumar" role="Medical Director" image="/doc1.jpg" />
            <StaffCard name="Ms. R. Singh" role="Head Counsellor" image="/doc1.jpg" />
            <StaffCard name="Mr. P. Verma" role="Therapy Lead" image="/doc1.jpg" />
          </div>

          {/* <h3 className="text-xl font-semibold mt-10 mb-4">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="h-48 rounded-md overflow-hidden bg-slate-100">
              <img src="/images/facilities/1.jpg" alt="facility 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-md overflow-hidden bg-slate-100">
              <img src="/images/facilities/2.jpg" alt="facility 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-md overflow-hidden bg-slate-100">
              <img src="/images/facilities/3.jpg" alt="facility 3" className="w-full h-full object-cover" />
            </div>
            <div className="h-48 rounded-md overflow-hidden bg-slate-100">
              <img src="/images/facilities/4.jpg" alt="facility 4" className="w-full h-full object-cover" />
            </div>
          </div> */}
          {/* <p className="mt-3 text-sm text-gray-500">Place images in <strong>public/images/facilities/</strong> and <strong>public/images/staff/</strong>. If images are missing, placeholders will show.</p> */}
        </section>

        <section className="mt-12 rounded-2xl bg-blue-600 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-bold">Ready to Visit or Learn More?</h3>
          <p className="mt-2 text-blue-100">Contact our admissions team for an assessment or to schedule a visit.</p>
          <div className="mt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+919239003081"
              className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full font-semibold"
              style={{ color: "#0f172a" }}
            >
              Call Now: 9239003081
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 border border-white/30 px-6 py-3 rounded-full font-semibold text-white">Contact Page</a>
          </div>
        </section>

      </section>
    </main>
  );
}