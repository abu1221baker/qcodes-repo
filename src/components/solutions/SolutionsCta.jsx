import React from 'react';
import { Link } from 'react-router-dom';
import { WebsiteBuildSvg } from '../../assets';

export default function SolutionsCta() {
  return (
    <section className="w-full px-4 sm:px-8 py-16 sm:py-20 bg-gradient-to-b from-white via-[#FFF5F7]/60 to-[#F8F9FA] border-t border-border-subtle overflow-hidden">
      <div className="max-w-[1440px] mx-auto rounded-3xl p-8 sm:p-12 lg:p-16 bg-white border border-border-subtle shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative">
        
        {/* Left Column: Website Build SVG Illustration */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-[460px] p-6 sm:p-8 rounded-3xl bg-surface-dim border border-border-subtle shadow-md group hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex items-center justify-center">
            <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none rounded-3xl" />
            <img
              src={WebsiteBuildSvg}
              alt="Ready to Build Your Custom Solution"
              className="relative z-10 w-full h-auto max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
              loading="eager"
            />
          </div>
        </div>

        {/* Right Column: Narrative & CTA Buttons */}
        <div className="lg:col-span-7 flex flex-col items-start text-left gap-5">
          <div className="w-14 h-14 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center text-primary shadow-sm">
            <span className="material-symbols-outlined text-[32px]">hub</span>
          </div>

          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight leading-[1.15] max-w-2xl">
            Ready to Build Your <span className="text-primary">Custom Solution?</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-text-muted max-w-xl leading-relaxed">
            Connect with our engineering team to discuss your project requirements and start development within 48 hours.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-headline text-sm shadow-[0_4px_16px_rgba(226,30,76,0.3)] hover:bg-primary-dark transition-all duration-300 font-bold"
            >
              <span>Start Your Project</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm hover:bg-surface-dim transition-all duration-300 shadow-sm font-bold"
            >
              <span>Explore Our Work</span>
            </Link>
          </div>

          <div className="pt-2 font-mono text-xs text-text-muted flex items-center gap-4">
            <span>AUTONOMOUS DEPLOYMENTS</span>
            <span>•</span>
            <span>SUB-100MS LATENCY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
