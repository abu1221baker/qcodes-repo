import React from 'react';
import { Link } from 'react-router-dom';
import { WebsiteBuildSvg } from '../../assets';

export default function CtaSection() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-[#F8F9FA] to-white py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-border-subtle">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-100/40 via-pink-50/50 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Pink/Crimson Gradient Outer Border Frame (Thick frame matching collaborate section styling) */}
        <div className="relative w-full rounded-[2.25rem] sm:rounded-[3rem] lg:rounded-[3.25rem] p-4 sm:p-6 lg:p-7 xl:p-8 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
          {/* Subtle ambient light gradient inside pink backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-2xl pointer-events-none rounded-full" />
          
          {/* Inner White Card Container */}
          <div className="relative w-full rounded-2xl sm:rounded-[2rem] lg:rounded-[2.25rem] bg-white overflow-hidden p-6 sm:p-10 lg:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Subtle decorative grid backdrop inside card */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

            {/* Left Column: Website Build SVG Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative z-10">
              <div className="relative w-full max-w-[460px] p-6 sm:p-8 rounded-3xl bg-surface-dim border border-border-subtle shadow-md group hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex items-center justify-center">
                <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none rounded-3xl"></div>
                <img
                  src={WebsiteBuildSvg}
                  alt="Qcodes Infotech Website Build & Systems Architecture"
                  className="relative z-10 w-full h-auto max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="eager"
                />
              </div>
            </div>

            {/* Right Column: Narrative & Action Calls */}
            <div className="lg:col-span-7 flex flex-col items-start text-left gap-5 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center text-primary shadow-sm">
                <span className="material-symbols-outlined text-[32px]">rocket_launch</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11141A] tracking-tight leading-[1.15] max-w-2xl">
                Initiate Your Digital Enterprise Into the Tech Universe.
              </h2>

              <p className="font-sans text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
                Collaborate with our specialized systems architects and spatial engineers to create tomorrow's scalable digital infrastructure today.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-headline text-sm shadow-[0_4px_16px_rgba(226,30,76,0.3)] hover:bg-primary-dark transition-all duration-300 font-bold"
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  <span>Start a Project Today</span>
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm hover:bg-surface-dim transition-all duration-300 shadow-sm font-bold"
                >
                  <span>Schedule Architectural Briefing</span>
                </Link>
              </div>

              <div className="pt-2 font-mono text-xs text-text-muted flex items-center gap-4">
                <span>SECURITY LEVEL: ZERO-TRUST</span>
                <span>•</span>
                <span>GLOBAL REPLICATION: INSTANT</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
