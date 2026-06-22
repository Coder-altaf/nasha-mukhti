export default function ContactPage() {
  return (
    <main className="pt-20 pb-20 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <section className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600 font-semibold">
            Contact Us
          </p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-slate-950">
            Get Support From New Turning Point Foundation
          </h1>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-8">
            Reach out for confidential guidance, admission support, or information on our
            recovery services for addiction and mental health.
          </p>
        </section>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h2 className="text-2xl font-semibold text-slate-950 mb-6">Contact Details</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
                  Phone
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">+91 92390 03081</p>
                <p className="text-base text-slate-600">+91 81720 32937</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
                  Email
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">contact@newturningpoint.in</p>
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold">
                  Address
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  Shriram Chowk Kuju, Bypass Road Murpa
                </p>
                <p className="text-base text-slate-600">Ramgarh, Jharkhand - 825316</p>
              </div>
              <div className="rounded-3xl bg-slate-50 p-6 border border-slate-200">
                <p className="text-sm uppercase tracking-[0.2em] text-blue-600 font-semibold mb-2">
                  Emergency Helpline
                </p>
                <p className="text-2xl font-bold text-slate-950">+91 92390 03081</p>
                <p className="text-sm text-slate-500 mt-1">Available 24/7 for immediate support.</p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-slate-900 to-slate-950 text-white p-10 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Request a Call Back</h2>
            <form className="space-y-6">
              <label className="block">
                <span className="text-sm font-medium">Full Name</span>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-3 w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none transition focus:border-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Phone Number</span>
                <input
                  type="tel"
                  placeholder="+91 9XXXXXXXXX"
                  className="mt-3 w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none transition focus:border-white"
                />
              </label>
              <label className="block">
                <span className="text-sm font-medium">Message</span>
                <textarea
                  rows={5}
                  placeholder="Tell us how we can help"
                  className="mt-3 w-full rounded-3xl border border-white/20 bg-white/10 px-5 py-4 text-white placeholder:text-slate-300 outline-none transition focus:border-white"
                />
              </label>
              <button
                type="submit"
                className="w-full rounded-3xl bg-white text-slate-950 px-6 py-4 font-semibold transition hover:bg-slate-100"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
