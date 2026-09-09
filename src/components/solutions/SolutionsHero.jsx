import React from 'react';
import { SolutionsHeroSvg } from '../../assets';

export default function SolutionsHero() {
  return (
    <section className="w-full px-4 sm:px-8 xl:px-12 pt-12 pb-16 relative overflow-hidden bg-gradient-to-b from-[#FBF4EA]/50 via-white to-surface-dim">
      {/* Ambient Accent Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-gradient-to-b from-primary/5 via-red-100/20 to-transparent blur-3xl pointer-events-none rounded-full"></div>

      <div className="max-w-6xl mx-auto flex flex-col gap-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Delivery Lifecycle & Methodology */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight leading-tight">
              How We Deliver Solutions
            </h1>

            <p className="font-sans text-base lg:text-lg text-text-muted leading-relaxed">
              At Qcodes Infotech, we translate complex enterprise challenges into resilient, high-performance technology solutions. Through structured collaboration, rapid agile prototyping, and rigorous quality benchmarks, we deliver end-to-end digital systems that drive measurable growth.
            </p>

            {/* 4-Step Agile Solution Process Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full pt-2">
              {/* Step 1 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  01
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Discovery &amp; Strategy</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Deep scoping of business goals, user personas &amp; technical specs.
                  </span>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  02
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Architecture &amp; UX</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Scalable system blueprints, interactive wireframes &amp; security models.
                  </span>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  03
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">Agile Engineering</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Iterative sprint development with clean code &amp; continuous CI/CD.
                  </span>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-3.5 rounded-xl bg-white border border-border-subtle shadow-xs flex items-start gap-3 hover:border-primary/30 transition-colors">
                <span className="w-7 h-7 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                  04
                </span>
                <div className="flex flex-col">
                  <span className="font-headline text-sm font-bold text-text-main">QA, Deploy &amp; Scale</span>
                  <span className="font-sans text-xs text-text-muted leading-tight">
                    Automated testing, seamless cloud deployment &amp; 24/7 dedicated support.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: solutions.svg Illustration with Thick Pink Gradient Frame */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-lg rounded-[2.25rem] sm:rounded-[3rem] p-3.5 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
              {/* Ambient glow inside pink border */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-2xl pointer-events-none rounded-full" />
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 blur-xl pointer-events-none rounded-full" />

              {/* Inner White Card */}
              <div className="relative w-full rounded-2xl sm:rounded-[2rem] bg-white overflow-hidden p-6 sm:p-8 shadow-lg flex flex-col items-center justify-center">
                <img
                  src={SolutionsHeroSvg}
                  alt="Qcodes Infotech Solutions Lifecycle"
                  className="w-full h-auto max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                  loading="eager"
                />
                
                {/* Overlay Tag */}
                <div className="mt-4 pt-3.5 w-full border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                  <span className="text-primary font-bold">END-TO-END DELIVERY</span>
                  <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                    ACTIVE PIPELINE
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
