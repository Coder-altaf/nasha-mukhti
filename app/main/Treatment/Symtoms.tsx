import Image from "next/image";
import {
  CircleAlert,
  Moon,
  HeartCrack,
  Users,
  Brain,
  Briefcase,
} from "lucide-react";

const symptoms = [
  {
    icon: CircleAlert,
    text: "Roz nasha karne ki teevr ichchha hona",
  },
  {
    icon: Briefcase,
    text: "Kaam ya padhai mein dhyan na lagna",
  },
  {
    icon: Moon,
    text: "Neend ki samasya aur thakan mehsoos hona",
  },
  {
    icon: Brain,
    text: "Chidchidapan, anxiety ya depression",
  },
  {
    icon: Users,
    text: "Parivaar aur doston se door rehna",
  },
  {
    icon: HeartCrack,
    text: "Sharirik aur mansik swasthya par bura asar",
  },
];

export default function Symptoms() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <div className="relative">
          <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/symp.jpeg"
              alt="Addiction Warning Signs"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Content */}
        <div>
          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Warning Signs
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 mb-6">
            Symptoms & Warning Signs
          </h2>

          <p className="text-gray-600 text-lg leading-8 mb-8">
            Agar aap ya aapka koi apna in lakshanon ka saamna kar raha hai, to
            yeh addiction ka sanket ho sakta hai. Samay par madad lena recovery
            ka pehla kadam hai.
          </p>

          <div className="space-y-5">
            {symptoms.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.text}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    <Icon size={22} />
                  </div>

                  <p className="text-gray-700 text-lg">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
