import React from 'react';
import {
  WebDevSvg,
  HandCodingSvg,
  CloudSvg,
  DataExtractionAmicoSvg,
  ServerAmicoSvg,
  ServiceHeroSvg,
} from '../../assets';

const capabilities = [
  {
    title: 'Web Development',
    desc: 'Bespoke web applications, modern responsive architectures, and scalable frontend ecosystems engineered for maximum performance.',
    icon: 'language',
    svg: WebDevSvg,
    tag: 'RESPONSIVE & SCALABLE',
  },
  {
    title: 'Software Development',
    desc: 'Custom enterprise software, microservices architectures, and full-lifecycle system engineering tailored to your operational workflows.',
    icon: 'terminal',
    svg: HandCodingSvg,
    tag: 'ENTERPRISE ARCHITECTURE',
  },
  {
    title: 'Cloud Computing',
    desc: 'Multi-region cloud infrastructure, serverless deployments, Kubernetes orchestration, and automated disaster recovery protocols.',
    icon: 'cloud_queue',
    svg: CloudSvg,
    tag: 'HYPERSCALE RESILIENCE',
  },
  {
    title: 'Data Analysis',
    desc: 'Advanced telemetry processing, business intelligence dashboards, predictive modeling, and real-time analytical pipelines.',
    icon: 'analytics',
    svg: DataExtractionAmicoSvg,
    tag: 'DATA INTELLIGENCE',
  },
  {
    title: 'Cybersecurity',
    desc: 'Zero-trust network architectures, end-to-end encryption protocols, vulnerability testing, and sovereign cryptographic data compliance.',
    icon: 'security',
    svg: ServerAmicoSvg,
    tag: 'ZERO-TRUST DEFENSE',
  },
];

export default function AboutServicesCapabilities() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-8 bg-white border-b border-border-subtle overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex flex-col gap-14">
        {/* Top Header & Overview 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Title & SVG Artwork */}
          <div className="lg:col-span-5 flex flex-col items-start gap-5">
            <div className="flex flex-col gap-1.5">
              <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
                Our <span className="text-primary">Services</span>
              </h2>
              <p className="font-headline text-lg sm:text-xl font-bold text-primary">
                Our Services - Qcodes Infotech
              </p>
            </div>

            {/* SVG Illustration Under Title */}
            <div className="w-full pt-2 flex items-center justify-start">
              <div className="relative w-full max-w-md p-5 sm:p-7 rounded-3xl bg-[#FAFBFD] border border-border-subtle shadow-md group hover:shadow-xl transition-all duration-300">
                <img
                  src={ServiceHeroSvg}
                  alt="Our Services - Qcodes Infotech"
                  className="w-full h-auto max-h-52 object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-[#F8F9FA] border border-border-subtle flex flex-col gap-4">
              <p className="font-sans text-base sm:text-lg text-text-main leading-relaxed">
                Our services include <strong className="text-primary font-semibold">web development, software development, cloud computing, data analysis, and cybersecurity</strong>. We work closely with our clients to understand their unique needs and provide customized solutions that meet their requirements.
              </p>
              
              <div className="h-px bg-border-subtle w-full" />

              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                At Qcodes Infotech, we believe in the power of technology to drive progress and improve people's lives. Our commitment to delivering excellence is reflected in every project we undertake. From concept to implementation, our team works tirelessly to ensure that each solution is seamless, reliable, and secure.
              </p>
            </div>

            {/* 3 Core Assurance Badges */}
            <div className="grid grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-border-subtle shadow-xs text-center flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[20px]">check_circle</span>
                <span className="font-bold text-text-main">SEAMLESS</span>
                <span className="text-[10px] text-text-muted">Concept to Delivery</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-border-subtle shadow-xs text-center flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                <span className="font-bold text-text-main">RELIABLE</span>
                <span className="text-[10px] text-text-muted">High Availability</span>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-border-subtle shadow-xs text-center flex flex-col items-center gap-1">
                <span className="material-symbols-outlined text-primary text-[20px]">shield</span>
                <span className="font-bold text-text-main">SECURE</span>
                <span className="text-[10px] text-text-muted">Enterprise Defense</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Service Spectrum Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="group p-6 rounded-2xl bg-[#F8F9FA] hover:bg-white border border-border-subtle hover:border-primary/40 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-white group-hover:bg-primary border border-border-subtle group-hover:border-primary flex items-center justify-center text-primary group-hover:text-white transition-all shadow-xs">
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>

                <div className="w-full h-28 flex items-center justify-center p-2 rounded-xl bg-white/70 border border-border-subtle/60 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.svg}
                    alt={item.title}
                    className="max-h-24 w-auto object-contain drop-shadow-xs"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline font-bold text-lg text-text-main group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border-subtle/80 flex items-center justify-between text-[10px] font-mono text-text-muted">
                <span className="text-primary font-bold">{item.tag}</span>
                <span className="material-symbols-outlined text-[16px] text-primary group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
