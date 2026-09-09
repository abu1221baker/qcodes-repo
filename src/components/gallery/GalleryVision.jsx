import React from 'react';
import { OurVisionSvg } from '../../assets';

export default function GalleryVision() {
  return (
    <section className="relative px-4 sm:px-8 xl:px-12 pb-16 max-w-[1720px] mx-auto w-full">
      {/* Thick Pink Gradient Outer Border Frame */}
      <div className="relative w-full rounded-[2.25rem] sm:rounded-[3rem] lg:rounded-[3.25rem] p-4 sm:p-6 lg:p-7 xl:p-8 bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] shadow-2xl shadow-red-900/25 overflow-hidden">
        {/* Subtle ambient light gradient inside pink backdrop */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-3xl pointer-events-none rounded-full" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-black/10 blur-2xl pointer-events-none rounded-full" />

        {/* Inner White Card Container */}
        <div className="relative w-full rounded-2xl sm:rounded-[2rem] lg:rounded-[2.25rem] bg-white overflow-hidden p-6 sm:p-10 lg:p-14 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Vision Statement */}
          <div className="lg:col-span-7 flex flex-col items-start gap-5 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-primary-light border border-primary/20 flex items-center justify-center text-primary shadow-sm">
              <span className="material-symbols-outlined text-[32px]">visibility</span>
            </div>

            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11141A] tracking-tight leading-tight">
              Our <span className="text-primary">Vision</span>
            </h2>

            <div className="flex flex-col gap-4 text-text-muted font-sans text-base sm:text-lg leading-relaxed max-w-3xl">
              <p>
                At Qcodes Infotech, our vision is to be a leading provider of innovative technology solutions that help businesses thrive in a rapidly evolving digital landscape. We strive to empower businesses of all sizes with the tools they need to reach their full potential and achieve their goals.
              </p>
              <p>
                We believe technology can transform how we live and work, and we are dedicated to using our expertise to help businesses harness its benefits. Our vision is to be at the forefront of technological advancements, always offering cutting-edge solutions that meet the evolving needs of our clients.
              </p>
            </div>

            <div className="pt-2 font-mono text-xs text-text-muted flex items-center gap-4">
              <span>GLOBAL INNOVATION LEADER</span>
              <span>•</span>
              <span>PURPOSE-DRIVEN TECHNOLOGY</span>
            </div>
          </div>

          {/* Right Column: our_vission.svg Illustration */}
          <div className="lg:col-span-5 flex items-center justify-center relative z-10">
            <div className="relative w-full max-w-[460px] p-6 sm:p-8 rounded-3xl bg-surface-dim border border-border-subtle shadow-md group hover:shadow-xl hover:border-primary/30 transition-all duration-500 flex items-center justify-center">
              <div className="absolute inset-0 bg-radial from-primary/10 via-transparent to-transparent opacity-60 pointer-events-none rounded-3xl" />
              <img
                src={OurVisionSvg}
                alt="Qcodes Infotech Vision Illustration"
                className="relative z-10 w-full h-auto max-h-[320px] object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-md"
                loading="lazy"
              />
              
              {/* Floating Overlay Tag */}
              <div className="absolute -bottom-3 -right-2 sm:right-4 px-3.5 py-1.5 rounded-xl bg-white border border-primary/20 shadow-md flex items-center gap-2 font-mono text-xs text-text-main font-bold">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>STRATEGIC HORIZON</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
