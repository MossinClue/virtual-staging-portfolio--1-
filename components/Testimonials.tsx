import React from 'react';
import { Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Quick turnaround and very realistic staging. Easy to work with and reliable.",
    author: "Sarah J.",
    role: "Real Estate Agent",
    location: "Seattle"
  },
  {
    id: 2,
    text: "The difference these photos made in my listing views was incredible. Highly recommend.",
    author: "Mike T.",
    role: "Broker",
    location: "Austin"
  },
  {
    id: 3,
    text: "Finally, a stager who understands that less is more. The spaces looked huge.",
    author: "Elena R.",
    role: "Realtor",
    location: "Chicago"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Section Header & Why Me */}
          <div className="md:w-1/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Why Agents Work With Me</h2>
              <p className="text-stone-600 mb-8">
                I function as an extension of your team, not just a vendor.
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "One-on-one communication",
                "Consistent, realistic style",
                "Fast and reliable turnaround",
                "No subscriptions or contracts",
                "Detail-focused layouts"
              ].map((item, i) => (
                <li key={i} className="flex items-center text-stone-700 font-medium">
                  <div className="w-1.5 h-1.5 bg-stone-900 rounded-full mr-3"></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial Cards */}
          <div className="md:w-2/3 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t) => (
              <div key={t.id} className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm flex flex-col justify-between">
                <div>
                    <Quote className="text-stone-300 mb-4" size={24} />
                    <p className="text-stone-700 leading-relaxed mb-6">"{t.text}"</p>
                </div>
                <div>
                  <div className="font-semibold text-stone-900">{t.author}</div>
                  <div className="text-sm text-stone-500">{t.role}, {t.location}</div>
                </div>
              </div>
            ))}
            {/* Call to action card */}
             <div className="bg-stone-900 p-6 rounded-xl border border-stone-900 flex flex-col justify-center items-center text-center text-white">
                <h3 className="font-bold text-xl mb-2">Ready to list?</h3>
                <p className="text-stone-300 mb-6 text-sm">Join other agents getting their listings sold faster.</p>
                <a href="#contact" className="px-6 py-2 bg-white text-stone-900 text-sm font-medium rounded-lg hover:bg-stone-100 transition-colors w-full">
                    Get a Quote
                </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};