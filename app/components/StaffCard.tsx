import React from "react";
import { UserRound } from "lucide-react";

interface Props {
  name: string;
  role?: string;
  image?: string;
}

export default function StaffCard({
  name,
  role,
  image,
}: Props) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-blue-200">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10 flex flex-col items-center">
        {/* Image */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-xl scale-110 opacity-0 transition-all duration-500 group-hover:opacity-100" />

          <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white shadow-lg">
            {image ? (
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-slate-100">
                <UserRound
                  size={50}
                  className="text-slate-400"
                />
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <h3 className="text-xl font-bold text-slate-900">
            {name}
          </h3>

          {role && (
            <span className="mt-2 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-700">
              {role}
            </span>
          )}
        </div>

        {/* Decorative Line */}
        <div className="mt-6 h-1 w-0 rounded-full bg-blue-600 transition-all duration-500 group-hover:w-20" />
      </div>
    </div>
  );
}