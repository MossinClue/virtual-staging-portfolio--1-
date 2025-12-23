import React from 'react';
import { Upload, Palette, MonitorPlay, CheckCircle } from 'lucide-react';
import { Step } from '../types';

const steps: Step[] = [
  {
    number: "01",
    title: "Email Listing",
    description: "Email listing directly to me.",
    icon: Upload
  },
  {
    number: "02",
    title: "Choose Style",
    description: "Tell me what type of style you want.",
    icon: Palette
  },
  {
    number: "03",
    title: "Staging & Review",
    description: "I get to work placing realistic furniture with attention to layout and flow.",
    icon: MonitorPlay
  },
  {
    number: "04",
    title: "Final Delivery",
    description: "Receive high-res images ready for the MLS. Revisions included if needed.",
    icon: CheckCircle
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-[#FAFAF9] border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">How It Works</h2>
          <p className="text-stone-600">Simple, friction-free process designed for busy agents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group border border-stone-100">
              <div className="absolute top-0 right-0 p-4 opacity-10 font-bold text-6xl text-stone-900 select-none group-hover:opacity-20 transition-opacity">
                {step.number}
              </div>
              
              <div className="w-12 h-12 bg-stone-100 rounded-lg flex items-center justify-center text-stone-900 mb-6 group-hover:bg-stone-900 group-hover:text-white transition-colors">
                <step.icon size={24} />
              </div>
              
              <h3 className="text-xl font-semibold text-stone-900 mb-3">{step.title}</h3>
              <p className="text-stone-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};