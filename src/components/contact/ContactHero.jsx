import React from 'react';
import { ContactUsSvg } from '../../assets';

export default function ContactHero() {
  return (
    <section className="relative w-full overflow-hidden border-b border-border-subtle py-12 lg:py-16 bg-white">
      {/* Ambient background glows */}
      <div className="absolute -top-32 left-1/4 w-[700px] h-[380px] bg-gradient-to-tr from-red-100/50 via-pink-50/40 to-transparent blur-[140px] pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/60 blur-[120px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200 text-primary self-start text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>Let&apos;s Build Together</span>
            </div>
            
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.15]">
              Let&apos;s Discuss Your Next{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-[#A91639]">
                Breakthrough Project.
              </span>
            </h1>
            
            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed max-w-2xl">
              Connect directly with our engineering and product strategists. Share your vision and project goals for a fast technical consultation and project roadmap.
            </p>

            {/* Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1">
                <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">Availability</span>
                <span className="text-primary font-bold text-sm">Open for Projects</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1">
                <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">Security</span>
                <span className="text-text-main font-bold text-sm">Strict NDA</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1">
                <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">Response Time</span>
                <span className="text-primary font-bold text-sm">&lt; 24 Hours</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-border-subtle shadow-xs flex flex-col gap-1">
                <span className="text-text-muted text-[11px] font-medium uppercase tracking-wider">Consultation</span>
                <span className="text-text-main font-bold text-sm">Free Strategy Call</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Frame with SVG */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-none p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white via-red-50/20 to-white border border-red-100 shadow-xl shadow-red-500/5 flex items-center justify-center group overflow-hidden">
              <img
                src={ContactUsSvg}
                alt="Contact Qcodes Infotech Illustration"
                className="w-full h-auto max-h-[340px] object-contain drop-shadow-sm group-hover:scale-[1.02] transition-transform duration-300 relative z-10"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
