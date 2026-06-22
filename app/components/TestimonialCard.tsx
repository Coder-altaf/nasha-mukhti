import React from "react";

interface Props {
  name: string;
  location?: string;
  image?: string;
  quote: string;
}

export default function TestimonialCard({ name, location, image, quote }: Props) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col h-full">
      <div className="flex items-center gap-4 w-full">
        <div className="w-16 h-16 rounded-full overflow-hidden bg-slate-100 flex-shrink-0">
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={image} alt={name} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-slate-200" />
          )}
        </div>

        <div>
          <div className="text-lg font-semibold text-slate-900">{name}</div>
          {location && <div className="text-sm text-gray-500">{location}</div>}
        </div>
      </div>

      <p className="text-gray-700 leading-7 mt-4 flex-1">“{quote}”</p>

      <div className="mt-4">
        <a href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-semibold">
          Contact Support
        </a>
      </div>
    </article>
  );
}
