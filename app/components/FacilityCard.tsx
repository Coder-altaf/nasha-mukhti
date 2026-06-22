import React from "react";
import { LucideIcon, ArrowRight } from "lucide-react";

interface FacilityCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

export default function FacilityCard({
  title,
  description,
  Icon,
}: FacilityCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">
      {/* Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Top Accent */}
      <div className="absolute left-0 top-0 h-1 w-0 bg-blue-600 transition-all duration-500 group-hover:w-full" />

      <div className="relative z-10">
        {/* Icon */}
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-600 transition-all duration-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
          <Icon size={30} />
        </div>

        {/* Title */}
        <h3 className="mb-3 text-xl font-bold text-slate-900">
          {title}
        </h3>

        {/* Description */}
        <p className="mb-6 leading-7 text-slate-600">
          {description}
        </p>

        {/* Link */}
        <div className="flex items-center gap-2 text-sm font-semibold text-blue-600 opacity-0 transition-all duration-300 group-hover:opacity-100">
          Learn More
          <ArrowRight size={16} />
        </div>
      </div>
    </div>
  );
}