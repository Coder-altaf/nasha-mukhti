export default function ServicesPage() {
  const services = [
    {
      title: "Detox & Medical Care",
      description:
        "Safe withdrawal support with certified medical professionals and a structured detox plan.",
    },
    {
      title: "Counseling & Therapy",
      description:
        "Individual and group counselling sessions focus on recovery, motivation, and long-term wellbeing.",
    },
    {
      title: "Family Support",
      description:
        "Family education and support programs help rebuild trust and relationships during recovery.",
    },
    {
      title: "Aftercare Planning",
      description:
        "Follow-up guidance and relapse prevention planning to help maintain sobriety after treatment.",
    },
  ];

  return (
    <main className="pt-20 pb-24 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mt-5">
            Our Services
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950">
            Comprehensive Care For Addiction Recovery
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            We provide a full range of recovery services for men struggling with addiction,
            alcoholism, and related mental health challenges.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
            >
              <h2 className="text-2xl font-semibold text-slate-950 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-700 leading-7">{service.description}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-slate-950 p-10 text-white shadow-lg">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold">Book Your Evaluation</h2>
            <p className="mt-4 text-slate-300 leading-7">
              Call our center for immediate support and learn how our services can help you
              or a loved one start a new life.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919239003081"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 font-semibold shadow-md hover:bg-blue-700 transition"
              >
                9239003081
              </a>
              <a
                href="tel:+918172032937"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 font-semibold hover:bg-white/20 transition"
              >
                8172032937
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
