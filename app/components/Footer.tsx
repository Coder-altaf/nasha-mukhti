import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
 
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">New Turning Point</h2>
            <p className="text-slate-400 mt-2 uppercase tracking-[0.2em] text-xs">
              FOUNDATION
            </p>
            <p className="mt-6 text-slate-400 leading-relaxed">
              Professional addiction rehabilitation with compassionate care,
              confidential support, and long-term recovery guidance.
            </p>
            <div className="flex gap-4 mt-6">
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-emerald-600 transition"
              >
                <FaFacebookF size={18} />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaInstagram size={18} />
              </Link>
              <Link
                href="#"
                className="p-3 rounded-full bg-slate-800 hover:bg-blue-600 transition"
              >
                <FaYoutube size={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-slate-400">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/main/about">About Us</Link>
              </li>
              <li>
                <Link href="/main/Treatment">Treatment</Link>
              </li>
              <li>
                <Link href="/main/facilities">Facilities</Link>
              </li>
              <li>
                <Link href="/main/success-stories">Success Stories</Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Treatment Programs
            </h3>

            <ul className="space-y-4 text-slate-400">
              <li>Alcohol Addiction</li>
              <li>Drug Rehabilitation</li>
              <li>Detox Program</li>
              <li>Family Counseling</li>
              <li>Aftercare Support</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Phone className="text-blue-400 mt-1" size={18} />
                <div>
                  <p className="text-slate-300 font-medium">Helpline</p>
                  <p className="text-slate-400">+91 92390 03081</p>
                  <p className="text-slate-400">+91 81720 32937</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-blue-400 mt-1" size={18} />
                <div>
                  <p className="text-slate-300 font-medium">Email</p>
                  <p className="text-slate-400">contact@newturningpoint.in</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-blue-400 mt-1" size={18} />
                <div>
                  <p className="text-slate-300 font-medium">Address</p>
                  <p className="text-slate-400">
                    Shriram Chowk Kuju, Bypass Road Murpa, Ramgarh, Jharkhand -
                    825316
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 New Turning Point Foundation. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}