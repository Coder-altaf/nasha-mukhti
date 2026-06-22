export default function SuccessStories() {
  const stories = [
    {
      name: "Rahul",
      summary:
        "Alcohol se chutkara paya aur ab family ke saath ek naya zindagi jee raha hai.",
    },
    {
      name: "Sunil",
      summary:
        "Drug addiction ka ilaaj paane ke baad ab vah apni daily life mein confident mehsoos karta hai.",
    },
    {
      name: "Amit",
      summary:
        "Professional counseling aur medical support ke sath recovery ka safar asaan laga.",
    },
  ];

  return (
    <main className="pt-20 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold mt-6">
            Success Stories
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950">
            Real Recovery Journeys From Ramgarh
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            Here are a few examples of people who found hope and recovery through our
            compassionate addiction rehabilitation and mental health support.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((story) => (
            <article
              key={story.name}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-4 text-sm uppercase tracking-[0.24em] text-blue-600 font-semibold">
                {story.name}
              </div>
              <p className="text-gray-700 leading-7">{story.summary}</p>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-3xl bg-blue-600 p-10 text-white shadow-lg">
          <h2 className="text-3xl font-bold">Aapka Success Story Yahin Se Shuru Ho Sakta Hai</h2>
          <p className="mt-4 text-blue-100 max-w-3xl leading-7">
            Ramgarh New Turning Point Foundation mein hum aapko 24/7 support, medical care,
            counselling aur safe environment provide karte hain taaki aap apni life phir se
            achhe se jee sakein.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <a
              href="tel:+919239003081"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-slate-950 font-semibold shadow-md hover:bg-slate-100 transition"
            >
              Call Now: 9239003081
            </a>
            <a
              href="tel:+918172032937"
              className="inline-flex items-center justify-center rounded-full border border-white/60 px-8 py-4 text-white font-semibold hover:bg-white/10 transition"
            >
              Alternate: 8172032937
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
