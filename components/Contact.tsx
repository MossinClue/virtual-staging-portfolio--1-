import React, { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');
        
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xykgoorl", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('success');
                form.reset();
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

  return (
    <section id="contact" className="py-20 bg-[#FAFAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-4">Get a Quote</h2>
              <p className="text-stone-600 text-lg">
                Have a listing that needs staging? Reach out to request a quote or a free staged sample using one of your listing photos.
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:s.ruwayd.m@gmail.com" className="flex items-center p-4 bg-white rounded-lg hover:bg-stone-100 transition-colors group shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-[#FAFAF9] rounded-full flex items-center justify-center text-stone-900 shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-stone-500 font-medium">Email</div>
                  <div className="text-stone-900 font-medium">s.ruwayd.m@gmail.com</div>
                </div>
              </a>

              <a href="tel:9058056712" className="flex items-center p-4 bg-white rounded-lg hover:bg-stone-100 transition-colors group shadow-sm border border-stone-100">
                <div className="w-12 h-12 bg-[#FAFAF9] rounded-full flex items-center justify-center text-stone-900 shadow-sm mr-4 group-hover:scale-110 transition-transform">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-stone-500 font-medium">Phone</div>
                  <div className="text-stone-900 font-medium">905-805-6712</div>
                </div>
              </a>
            </div>

            <div className="text-sm text-stone-500 bg-blue-50 text-blue-800 px-4 py-3 rounded-md inline-block">
              Email or text works — responses within 24 hours.
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl shadow-lg border border-stone-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                  placeholder="Your First Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-stone-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all"
                  placeholder="you@agency.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-stone-300 focus:ring-2 focus:ring-stone-900 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about the listing..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                disabled={status === 'submitting' || status === 'success'}
                className={`w-full py-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${
                    status === 'success' 
                    ? 'bg-green-600 text-white hover:bg-green-700' 
                    : status === 'error'
                    ? 'bg-red-600 text-white hover:bg-red-700'
                    : 'bg-stone-900 text-white hover:bg-stone-800'
                }`}
              >
                {status === 'submitting' ? (
                    'Sending...'
                ) : status === 'success' ? (
                    'Message Sent!'
                ) : status === 'error' ? (
                    'Error. Try again.'
                ) : (
                    <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};