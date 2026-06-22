import Image from "next/image";

export default function ConsultationBanner() {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#2E658A] rounded-[2.5rem] overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-8 md:p-12 lg:p-16">
            {/* Left Content */}
            <div className="text-white">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                न्यू टर्निंग पॉइंट के विशेषज्ञों से आसान ऑनलाइन परामर्श              </h2>

              <p className="mt-6 text-lg text-slate-200 leading-relaxed">
                अब घर बैठे हमारे डॉक्टरों और काउंसलर्स से जुड़ें। गोपनीय, पेशेवर
                और हर समय आपकी सहायता के लिए उपलब्ध।
              </p>

              <button className="mt-10 bg-white text-[#2E658A] hover:bg-slate-100 transition-all duration-300 px-8 py-4 rounded-full text-lg font-semibold shadow-lg">
                डॉक्टर से परामर्श करें
              </button>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-[320px] md:h-[380px]">
                <Image
                  src="/consultation.png"
                  alt="ऑनलाइन परामर्श"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
