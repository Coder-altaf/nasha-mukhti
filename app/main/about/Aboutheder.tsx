export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/80 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="max-w-3xl text-white">
          <span className="inline-block bg-blue-600/20 border border-blue-400 text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-6">
            24×7 गोपनीय सहायता उपलब्ध
          </span>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            नशे की लत से
            <span className="text-blue-400"> आज़ादी </span>
            की ओर पहला कदम बढ़ाइए
          </h1>

          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            अनुभवी डॉक्टरों और काउंसलर्स की टीम के साथ सुरक्षित, गोपनीय और
            प्रभावी इलाज। हम आपके और आपके परिवार के बेहतर भविष्य के लिए हर कदम
            पर आपके साथ हैं।
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
              अभी सहायता लें
            </button>

            <a
              href="tel:+919876543210"
              className="border border-white/30 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-full font-semibold text-lg text-center"
            >
              📞 24×7 हेल्पलाइन
            </a>
          </div>

          <div className="flex flex-wrap gap-6 mt-10 text-gray-300">
            <div>✓ गोपनीय परामर्श</div>
            <div>✓ अनुभवी विशेषज्ञ</div>
            <div>✓ व्यक्तिगत उपचार योजना</div>
          </div>
        </div>
      </div>
    </section>
  );
}
