import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-[#FAFAF9] border-t border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-stone-100 flex flex-col md:flex-row items-center gap-8 md:gap-12">
          
          <div className="w-32 h-32 md:w-48 md:h-48 flex-shrink-0">
            <img 
              src="https://raw.githubusercontent.com/MossinClue/image_hosting_mossin/refs/heads/main/ruwayd.png" 
              alt="Portrait of Syed" 
              className="w-full h-full object-cover rounded-full shadow-md border-4 border-[#FAFAF9]"
            />
          </div>

          <div className="text-center md:text-left space-y-4">
            <h2 className="text-2xl font-bold text-stone-900">About Me</h2>
            <p className="text-stone-600 leading-relaxed">
              Hi, I'm Syed. I help real estate professionals showcase the true potential of their listings through realistic digital staging.
            </p>
            <p className="text-stone-600 leading-relaxed">
              With a background in systems and computing engineering, I take a precise, organized approach to virtual staging — focusing on consistency and efficient delivery.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};