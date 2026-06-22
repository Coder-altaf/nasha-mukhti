import Image from "next/image";

export default function AlcoholAddiction() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          What is Alcohol Addiction?
        </h2>

        {/* Content */}
        <div className="max-w-5xl mx-auto space-y-8">
          <p className="text-lg text-gray-700 leading-9">
            Alcohol addiction, jise alcoholism ya alcohol dependence bhi kaha
            jata hai, ek serious condition hai jo duniya bhar mein laakhon logon
            ko affect karti hai. Yeh tab hota hai jab kisi vyakti ko alcohol par
            physical aur psychological dependence ho jata hai.
          </p>

          <p className="text-lg text-gray-700 leading-9">
            Jo log alcohol addiction se joojh rahe hote hain, unke liye apni
            drinking habits ko control karna mushkil ho jata hai. Iska asar unki
            health, relationships aur daily life par padta hai.
          </p>

          <p className="text-lg text-gray-700 leading-9">
            Agar iska samay par treatment na kiya jaye, to yeh gambhir samasya
            ban sakti hai. Achhi baat yeh hai ki alcohol addiction ka ilaaj
            sambhav hai aur sahi guidance ke saath recovery mumkin hai.
          </p>
        </div>

        {/* Image */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-full max-w-3xl h-[450px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/alcohal2.png"
              alt="Alcohol Addiction"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
