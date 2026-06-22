import TestimonialCard from "../../components/TestimonialCard";

export default function SuccessStories() {
  const stories = [
    {
      name: "Rahul",
      location: "Ramgarh",
      image: "/images.jpg",
      quote:
        "Main yahan aaya, treatment liya aur apni family ke saath phir se khushnaseeb zindagi jee raha hoon. Staff bahut supportive tha.",
    },
    {
      name: "Sunil",
      location: "Bokaro",
      image: "/images.jpg",
      quote:
        "Therapy aur counseling ne mujhe nayi direction di — aaj main confident hoon aur kaam par wapas gaya hoon.",
    },
    {
      name: "Amit",
      location: "Dhanbad",
      image: "/images.jpg",
      quote:
        "Detox aur continuous follow-up se recovery manageable bana. Doctors aur counsellors ka shukriya.",
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
            <TestimonialCard
              key={story.name}
              name={story.name}
              location={story.location}
              image={story.image}
              quote={story.quote}
            />
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
              style={{ color: "#000" }}
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-semibold shadow-md"
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
