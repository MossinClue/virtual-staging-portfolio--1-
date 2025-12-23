import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="overview" className="pt-32 pb-20 md:pt-40 md:pb-28 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          
          <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight">
              Clean, realistic virtual staging for <span className="text-stone-500">real estate listings.</span>
            </h1>
            <p className="text-lg md:text-xl text-stone-600 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I work directly with real estate agents to stage empty or outdated spaces quickly and affordably. New clients can request a free staged sample.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a 
                href="#portfolio" 
                className="px-8 py-3.5 bg-stone-900 text-white font-medium rounded-lg hover:bg-stone-800 transition-colors shadow-lg shadow-stone-900/10 flex items-center justify-center gap-2"
              >
                View Portfolio <ArrowRight size={18} />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3.5 bg-[#FAFAF9] text-stone-700 border border-stone-300 font-medium rounded-lg hover:bg-stone-100 transition-all flex items-center justify-center"
              >
                Get a Quote
              </a>
            </div>
          </div>

          <div className="w-full md:w-1/2">
             {/* Abstract representation of staging or a nice hero image */}
             <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10"></div>
                <img 
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
                    alt="Beautifully staged living room"
                    className="w-full h-[400px] md:h-[500px] object-cover"
                />
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};