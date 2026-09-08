import React from 'react';
import { OurVisionSvg, ConnectedWorldSvg } from '../../assets';

export default function AboutMissionVision() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-[#F8F9FA] border-b border-border-subtle overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[500px] bg-gradient-to-bl from-pink-100/40 via-red-50/30 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-amber-50/50 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1440px] mx-auto flex flex-col gap-16">
        {/* Top Executive Summary Header */}
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Mission And <span className="text-primary">Vision</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-text-muted leading-relaxed">
            To be the leading provider of exceptional solutions, setting the standard for customer satisfaction and continuous improvement. To deliver innovative and efficient solutions that meet the unique needs of our clients and create value for their businesses. We strive for excellence in everything, from our services to customer relationships.
          </p>
        </div>

        {/* Dual Dedicated Cards: Our Mission & Our Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Our Mission */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/40 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-bold shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">target</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-text-main">
                      Our Mission
                    </h3>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="w-full h-44 flex items-center justify-center p-3 rounded-2xl bg-[#FAFBFD] border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                <img
                  src={OurVisionSvg}
                  alt="Our Mission - Qcodes Infotech"
                  className="max-h-36 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Exact Copy Text */}
              <div className="flex flex-col gap-3.5 text-text-muted font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  At Qcodes Infotech, we aim to provide businesses with the tools they need to succeed in the digital age. We believe that technology can transform the world, and we are dedicated to using it to improve the lives of people and businesses.
                </p>
                <p>
                  We aim to create innovative and effective solutions that help businesses stay ahead of the curve. We strive to understand our client's unique needs and provide customized technology solutions that meet their requirements.
                </p>
                <p className="text-text-main font-medium bg-primary-light/30 p-4 rounded-xl border border-primary/20">
                  At Qcodes Infotech, we are driven by our passion for technology and our commitment to excellence. Join us on our mission to use technology to improve the world and help businesses achieve their full potential.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="text-primary font-bold">DIGITAL TRANSFORMATION</span>
              <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                ACTIVE
              </span>
            </div>
          </div>

          {/* Card 2: Our Vision */}
          <div className="relative p-8 sm:p-10 rounded-3xl bg-white border border-border-subtle shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-light/40 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between border-b border-border-subtle pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary-light text-primary flex items-center justify-center font-bold shadow-xs">
                    <span className="material-symbols-outlined text-[24px]">visibility</span>
                  </div>
                  <div>
                    <h3 className="font-headline text-2xl sm:text-3xl font-extrabold text-text-main">
                      Our Vision
                    </h3>
                  </div>
                </div>
              </div>

              {/* Illustration */}
              <div className="w-full h-44 flex items-center justify-center p-3 rounded-2xl bg-[#FAFBFD] border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                <img
                  src={ConnectedWorldSvg}
                  alt="Our Vision - Qcodes Infotech"
                  className="max-h-36 w-auto object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>

              {/* Exact Copy Text */}
              <div className="flex flex-col gap-3.5 text-text-muted font-sans text-sm sm:text-base leading-relaxed">
                <p>
                  At Qcodes Infotech, our vision is to be a leading provider of innovative technology solutions that help businesses thrive in a rapidly evolving digital landscape. We strive to empower businesses of all sizes with the tools they need to reach their full potential and achieve their goals.
                </p>
                <p>
                  We believe technology can transform how we live and work, and we are dedicated to using our expertise to help businesses harness its benefits. Our vision is to be at the forefront of technological advancements, always offering cutting-edge solutions that meet the evolving needs of our clients.
                </p>
                <p className="text-text-main font-medium bg-primary-light/30 p-4 rounded-xl border border-primary/20">
                  We are committed to delivering exceptional customer experiences and fostering long-lasting partnerships with the businesses we serve. Our focus on collaboration, transparency and results-driven solutions sets us apart and drives us forward in our mission to make technology work for everyone.
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs font-mono text-text-muted">
              <span className="text-primary font-bold">EMPOWERING BUSINESSES</span>
              <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                LONG-TERM VISION
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
