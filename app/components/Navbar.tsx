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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center">
        {/* Left - Logo */}
        <div className="flex-1">
          <Link href="/" className="flex flex-col">
            <h1 className="text-4xl font-bold text-blue-600">
              Integrity Recovery
            </h1>

            <span className="text-gray-500 text-sm">Treatment Center</span>
          </Link>
        </div>

        {/* Center - Menu */}
        <div className="hidden lg:flex flex-1 justify-center items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition whitespace-nowrap"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right - Contact */}
        <div className="hidden lg:flex flex-1 justify-end items-center gap-6">
          <div className="flex items-center gap-3 whitespace-nowrap">
            <Phone size={22} className="text-blue-600" />

            <div className="flex flex-col">
              <span className="text-blue-600 font-bold text-xl">
                (855) 777-5387
              </span>

              <span className="text-xs text-gray-500">24/7 Crisis Support</span>
            </div>
          </div>

          <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-full font-semibold transition">
            Get Help Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t shadow-md">
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {item.name}
              </Link>
            ))}

            <div className="border-t pt-4">
              <div className="flex items-center gap-2 mb-4">
                <Phone size={18} className="text-blue-600" />

                <div className="flex flex-col">
                  <span className="font-semibold text-blue-600">
                    (855) 777-5387
                  </span>

                  <span className="text-xs text-gray-500">
                    24/7 Crisis Support
                  </span>
                </div>
              </div>

              <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold transition">
                Get Help Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
