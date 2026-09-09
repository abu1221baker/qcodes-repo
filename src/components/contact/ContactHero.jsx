import React from 'react';
import { ContactUsSvg } from '../../assets';

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border-subtle py-12 lg:py-20 bg-white">
      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[380px] bg-gradient-to-tr from-red-100/50 via-pink-50/40 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/60 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Expanded Narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.15]">
              Let&apos;s Discuss Your Next{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-[#A91639]">
                Breakthrough Project.
              </span>
            </h1>
            
            <div className="flex flex-col gap-4 font-sans text-base sm:text-lg text-text-muted leading-relaxed max-w-2xl">
              <p>
                Connect directly with our engineering and product strategists. Share your vision and project goals for a fast technical consultation and project roadmap.
              </p>
              <p className="text-sm sm:text-base text-text-muted/90">
                Whether you need enterprise web and mobile engineering, custom software development, cloud infrastructure architecture, or end-to-end digital transformation, our specialized engineering team in Chennai is ready to evaluate your technical scope and co-engineer solutions tailored precisely to your operational scale.
              </p>
              <p className="text-sm sm:text-base text-text-muted/90">
                Submit your project details using the consultation form below, and our principal technology leads will prepare an actionable technical review, preliminary architectural roadmap, and delivery timeline.
              </p>
            </div>
          </div>

          {/* Right Column: Thick Pink Gradient Frame with Animated contact.svg */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-lg rounded-[2.25rem] sm:rounded-[3rem] p-3.5 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
              {/* Ambient glow inside pink border */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-2xl pointer-events-none rounded-full" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 blur-xl pointer-events-none rounded-full" />

              {/* Inner White Card */}
              <div className="relative w-full rounded-2xl sm:rounded-[2rem] bg-white overflow-hidden p-6 sm:p-8 shadow-lg flex flex-col items-center justify-center">
                <img
                  src={ContactUsSvg}
                  alt="Contact Qcodes Infotech Illustration"
                  className="w-full h-auto max-h-[340px] object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-500 relative z-10"
                  loading="eager"
                />
                
                {/* Overlay Tag */}
                <div className="mt-4 pt-3.5 w-full border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="text-primary font-bold">DIRECT ENGAGEMENT</span>
                  <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                    OPEN FOR INQUIRIES
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
