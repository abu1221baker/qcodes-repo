import React from 'react';
import { WorkGallerySvg } from '../../assets';

export default function GalleryHero() {
  return (
    <section className="relative px-4 sm:px-8 xl:px-12 pt-12 pb-8 max-w-[1720px] mx-auto w-full flex flex-col gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Typography, Badge & Description */}
        <div className="lg:col-span-7 flex flex-col items-start gap-5">
          {/* Telemetry & Category Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-primary">
              <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
              <span className="font-mono text-[11px] tracking-widest uppercase font-bold">
                QCODES INFOTECH // WORK GALLERY
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-border-subtle text-text-muted shadow-xs">
              <span className="material-symbols-outlined text-[14px] text-primary">verified</span>
              <span className="font-mono text-[11px] tracking-wider uppercase font-semibold">
                ENTERPRISE CLIENT SOLUTIONS
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-tight">
            Tailored Engineering &amp;{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary-dark to-[#747474]">
              Innovative Solutions.
            </span>
          </h1>

          {/* User Requested Paragraph Text */}
          <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed max-w-3xl">
            At Qcodes Infotech, we pride ourselves on delivering high-quality, innovative solutions to our clients. Our team of experienced developers and designers are committed to providing tailored solutions that meet the specific needs of each of our clients. We offer various services, including custom software development, mobile app development, website design and development, and data analytics and visualization.
          </p>

          {/* Key Service Highlights Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {['Custom Software', 'Mobile App Development', 'Website Design & Dev', 'Data Analytics & Visualization'].map((service) => (
              <span
                key={service}
                className="px-3 py-1 rounded-lg bg-surface-dim border border-border-subtle font-mono text-xs text-text-main font-medium flex items-center gap-1.5 shadow-xs"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>{service}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Right Column: Animated work-galary.svg Illustration with Thick Pink Gradient Frame */}
        <div className="lg:col-span-5 flex items-center justify-center relative">
          <div className="relative w-full max-w-lg rounded-[2.25rem] sm:rounded-[3rem] p-3.5 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
            {/* Ambient glow inside pink border */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-2xl pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 blur-xl pointer-events-none rounded-full" />

            {/* Inner White Card */}
            <div className="relative w-full rounded-2xl sm:rounded-[2rem] bg-white overflow-hidden p-6 sm:p-8 shadow-lg flex flex-col items-center justify-center">
              <img
                src={WorkGallerySvg}
                alt="Qcodes Infotech Work Gallery"
                className="w-full h-auto max-h-[340px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                loading="eager"
              />
              
              {/* Overlay Tag */}
              <div className="mt-4 pt-3.5 w-full border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="text-primary font-bold">SYSTEMS PORTFOLIO</span>
                <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                  FEATURED WORK
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
