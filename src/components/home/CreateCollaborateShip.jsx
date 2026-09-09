import React from 'react';
import { Link } from 'react-router-dom';
import { CodingSvg } from '../../assets';

export default function CreateCollaborateShip() {
  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] overflow-hidden border-b border-border-subtle select-none">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-red-100/40 via-pink-50/50 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pink/Crimson Gradient Outer Border Frame (Thick frame matching code snippet styling) */}
        <div className="relative w-full rounded-[2.25rem] sm:rounded-[3rem] lg:rounded-[3.25rem] p-4 sm:p-6 lg:p-7 xl:p-8 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
          {/* Subtle ambient light gradient inside pink backdrop */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl pointer-events-none rounded-full" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-2xl pointer-events-none rounded-full" />
          
          {/* Inner White Card Container */}
          <div className="relative w-full rounded-2xl sm:rounded-[2rem] lg:rounded-[2.25rem] bg-white overflow-hidden p-6 sm:p-10 lg:p-12 min-h-[440px] lg:min-h-[490px] flex flex-col lg:flex-row items-center justify-between gap-10 shadow-lg">
            
            {/* Subtle decorative grid backdrop inside card */}
            <div className="absolute inset-0 tech-grid-bg opacity-30 pointer-events-none" />

            {/* Left Side: Typography & Action Button */}
            <div className="relative z-10 max-w-lg flex flex-col items-start gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-primary text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span>Engineered For Scale</span>
              </div>

              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11141A] tracking-tight leading-[1.15]">
                Create, collaborate <br className="hidden sm:inline" />
                and ship.
              </h2>

              <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed max-w-md">
                Effortlessly bring motion, agility, and enterprise-grade performance to your everyday digital products with our stacked technology arsenal.
              </p>

              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold shadow-[0_4px_16px_rgba(226,30,76,0.35)] hover:shadow-[0_6px_24px_rgba(226,30,76,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer mt-1"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </Link>
            </div>

            {/* Right Side: Animated Coding SVG Illustration */}
            <div className="relative w-full lg:w-[480px] xl:w-[520px] flex items-center justify-center">
              {/* Ambient Backlight for the Illustration */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-primary/15 via-pink-400/20 to-amber-300/15 rounded-full blur-3xl pointer-events-none" />

              {/* Animated Coding SVG Container */}
              <div className="relative w-full max-w-[420px] sm:max-w-[460px] lg:max-w-[480px] aspect-square flex items-center justify-center p-2 sm:p-4">
                <img
                  src={CodingSvg}
                  alt="Coding Animation"
                  className="w-full h-full object-contain drop-shadow-[0_12px_32px_rgba(0,0,0,0.08)]"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
