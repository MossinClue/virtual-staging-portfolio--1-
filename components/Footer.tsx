import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
             <img src="/logo.png" alt="TAQ Staging" className="h-12 w-auto object-contain brightness-0 invert" />
          </div>
          <p className="text-sm">Virtual staging for real estate listings.</p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-sm">
            <a href="mailto:s.ruwayd.m@gmail.com" className="hover:text-white transition-colors">s.ruwayd.m@gmail.com</a>
            <a href="tel:9058056712" className="hover:text-white transition-colors">905-805-6712</a>
        </div>

        <div className="text-sm">
          &copy; 2026 Taq Staging. All rights reserved.
        </div>
      </div>
    </footer>
  );
};