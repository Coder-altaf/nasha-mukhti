"use client";

import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/main/about" },
    { name: "Treatment", href: "/main/Treatment" },
    { name: "Facilities", href: "/main/facilities" },
    { name: "Success Stories", href: "/main/success-stories" },
    { name: "Services", href: "/services" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center gap-4">
        {/* Logo */}
        <div className="flex-1 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-14 w-14 rounded-full overflow-hidden border border-slate-200 shadow-sm bg-slate-100">
              <img
                src="/logo.png"
                alt="New Turning Point Foundation Logo"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-black tracking-tight">
                NEW TURNING POINT
              </span>
              <span className="text-[10px] uppercase tracking-[0.4em] text-gray-600">
                FOUNDATION
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="!text-black hover:!text-black font-medium transition-colors whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop Contact */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-4">
          <div className="flex items-center gap-3 whitespace-nowrap rounded-full bg-slate-100 px-4 py-2">
            <Phone size={18} className="text-blue-600" />
            <div className="flex flex-col">
              <span className="text-black font-semibold text-sm">
                +91 92390 03081
              </span>
              <span className="text-[11px] text-gray-600">
                24/7 Support
              </span>
            </div>
          </div>

          <a
            href="tel:+919239003081"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full font-semibold text-sm transition"
          >
            Call Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200 shadow-md">
          <div className="px-6 py-5 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="!text-black hover:!text-black font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center gap-3 mb-4">
                <Phone size={18} className="text-blue-600" />
                <div>
                  <p className="font-semibold text-black">
                    +91 92390 03081
                  </p>
                  <p className="text-xs text-gray-600">
                    24/7 Support
                  </p>
                </div>
              </div>

              <a
                href="tel:+919239003081"
                className="block w-full rounded-full bg-blue-600 px-5 py-3 text-center text-white font-semibold transition hover:bg-blue-700"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}