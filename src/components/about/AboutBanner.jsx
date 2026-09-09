import React from 'react';
import { AboutUsSvg } from '../../assets';

export default function AboutBanner() {
  return (
    <section className="relative w-full px-4 sm:px-8 py-16 sm:py-24 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-red-100/50 via-pink-50/40 to-transparent blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Narrative */}
        <div className="lg:col-span-7 flex flex-col items-start gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-main tracking-tight">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="font-headline text-xl sm:text-2xl text-primary font-bold">
              Leading the digital revolution
            </p>
          </div>

          <div className="flex flex-col gap-4 text-text-muted font-sans text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-text-main font-semibold">Qcodes Infotech</strong> was founded in 2016, a web and mobile application development warehouse headquartered in Chennai, India. Qcodes Infotech offers best-in-class innovative solutions for clients around the globe. We enroll a team of creative, innovative and technically sound individuals.
            </p>
            <p className="text-base text-text-muted/90">
              Qcodes Infotech is an IT company specializing in providing innovative solutions to businesses. With a team of experts in the field, we aim to revolutionize how technology is utilized in the modern world. We aim to help companies stay ahead of the curve and achieve their maximum potential by implementing cutting-edge technology.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full pt-4 font-mono text-xs">
            <div className="p-4 rounded-2xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-2xl font-headline">2016</span>
              <span className="text-text-muted text-[11px] uppercase tracking-wider">Founded In</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-2xl font-headline">Chennai</span>
              <span className="text-text-muted text-[11px] uppercase tracking-wider">HQ, India</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-2xl font-headline">Global</span>
              <span className="text-text-muted text-[11px] uppercase tracking-wider">Client Reach</span>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-border-subtle shadow-xs">
              <span className="text-primary font-bold block text-2xl font-headline">100%</span>
              <span className="text-text-muted text-[11px] uppercase tracking-wider">Excellence</span>
            </div>
          </div>
        </div>

        {/* Right Column: Hero Visual Artwork with Thick Pink Gradient Frame */}
        <div className="lg:col-span-5 flex items-center justify-center">
          <div className="relative w-full max-w-lg rounded-[2.25rem] sm:rounded-[3rem] p-3.5 sm:p-5 lg:p-6 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
            {/* Ambient glow inside pink border */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 blur-2xl pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-black/10 blur-xl pointer-events-none rounded-full" />

            {/* Inner White Card */}
            <div className="relative w-full rounded-2xl sm:rounded-[2rem] bg-white overflow-hidden p-5 sm:p-7 shadow-lg">
              <div className="relative w-full flex items-center justify-center overflow-hidden">
                <img
                  src={AboutUsSvg}
                  alt="About Qcodes Infotech - Leading the Digital Revolution"
                  className="w-full h-auto max-h-[380px] object-contain transition-transform duration-500 drop-shadow-md"
                  loading="eager"
                />
              </div>
              <div className="mt-4 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
                <span className="text-primary font-bold">INNOVATIVE SOLUTIONS</span>
                <span className="flex items-center gap-1 text-[#28CD41] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                  ACTIVE ENGINE
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
