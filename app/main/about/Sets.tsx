const stats = [
  { number: "10+", label: "Saalon ka Anubhav" },
  { number: "5000+", label: "Safal Recoveries" },
  { number: "50+", label: "Expert Staff Members" },
  { number: "24×7", label: "Madad Hamesha Available" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((item) => (
          <div key={item.label}>
            <h3 className="text-4xl font-bold mb-2">{item.number}</h3>

            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
