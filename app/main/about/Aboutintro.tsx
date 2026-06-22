export default function AboutIntro() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <img
          src="/alcohol.png"
          alt="About"
          className="rounded-3xl shadow-lg w-full h-[400px] object-cover"
        />

        <div>
          <p className="text-blue-600 font-semibold mb-3">न्यू टर्निंग पॉइंट</p>

          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            नशे से मुक्ति, बेहतर जीवन की शुरुआत
          </h2>

          <p className="text-gray-600 leading-8">
            हमारा नशा मुक्ति केंद्र अनुभवी डॉक्टरों और काउंसलर्स की सहायता से
            सुरक्षित, गोपनीय और प्रभावी उपचार प्रदान करता है। हमारा उद्देश्य हर
            व्यक्ति को स्वस्थ और सम्मानजनक जीवन देना है।
          </p>
        </div>
      </div>
    </section>
  );
}
