export default function MissionVision() {
  return (
    <section className="py-20 pt-5 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">हमारा मिशन</h3>

          <p className="text-gray-600 leading-7">
            Hamara mission hai har vyakti ko nasha se azaad karke ek healthy,
            positive aur khushhaal zindagi dena.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-md">
          <h3 className="text-2xl font-bold text-blue-600 mb-4">हमारा विज़न</h3>

          <p className="text-gray-600 leading-7">
            Hamara vision ek aisa samaj banana hai jahan har vyakti nasha se
            azaad ho aur mentally healthy zindagi jee sake.
          </p>
        </div>
      </div>
    </section>
  );
}
