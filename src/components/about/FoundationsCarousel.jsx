import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  OurVisionSvg,
  ConnectedWorldSvg,
  SoftwareTestingSvg,
  ServerAmicoSvg,
  SolutionsHeroSvg,
  DataExtractionAmicoSvg,
  CloudSvg,
  HandCodingSvg,
  ServerRafikiSvg,
  DataExtractionCuateSvg,
  UiUxSvg,
  WebDevSvg,
  TechSupportSvg,
  CrmSvg,
} from '../../assets';

const foundationsData = [
  {
    num: '01',
    category: 'PURPOSE',
    title: 'Our Mission',
    desc: 'To engineer sovereign digital software platforms, distributed cloud mesh infrastructure, and interactive 3D spatial universes for global enterprises.',
    img: OurVisionSvg,
    tag: 'ENTERPRISE SCALE',
    accent: '#FF3366',
  },
  {
    num: '02',
    category: 'TRAJECTORY',
    title: 'Our Vision',
    desc: 'To define the future of autonomous software engineering where AI intelligence, WebGL spatial interfaces, and high-concurrency systems converge.',
    img: ConnectedWorldSvg,
    tag: 'GLOBAL HORIZON',
    accent: '#E21E4C',
  },
  {
    num: '03',
    category: 'INTEGRITY',
    title: 'Zero-Defect Culture',
    desc: 'Deterministic automated Playwright & Cypress pipelines, k6 chaos load tests, and sub-15m MTTR response guarantees 99.99% system uptime.',
    img: SoftwareTestingSvg,
    tag: '99.99% UPTIME',
    accent: '#A91639',
  },
  {
    num: '04',
    category: 'FORTRESS',
    title: 'Quantum Security',
    desc: 'Zero-trust encryption layers, immutable distributed audit logging, and sovereign cryptographic key management protecting critical assets.',
    img: ServerAmicoSvg,
    tag: 'QUANTUM-SAFE',
    accent: '#FF3366',
  },
  {
    num: '05',
    category: 'VELOCITY',
    title: 'Distributed Mesh',
    desc: 'Low-latency edge orchestration, distributed state consensus, and sub-20ms multi-region synchronization across worldwide node clusters.',
    img: SolutionsHeroSvg,
    tag: 'SUB-20MS SYNC',
    accent: '#E21E4C',
  },
  {
    num: '06',
    category: 'COGNITION',
    title: 'Autonomous AI',
    desc: 'Self-healing microservices, adaptive algorithmic routing, and deep telemetry observability transforming raw operations into actionable foresight.',
    img: DataExtractionAmicoSvg,
    tag: 'NEURAL MESH',
    accent: '#FF3366',
  },
  {
    num: '07',
    category: 'RESILIENCE',
    title: 'Hyperscale Cloud',
    desc: 'Multi-region Kubernetes clusters with automated failover, Terraform infrastructure as code, and sub-second disaster recovery protocols.',
    img: CloudSvg,
    tag: 'ZERO DOWNTIME',
    accent: '#A91639',
  },
  {
    num: '08',
    category: 'PRECISION',
    title: 'Software Craft',
    desc: 'Strict type safety, modern atomic component design, micro-frontends, and high-throughput backend services built with Rust & Go.',
    img: HandCodingSvg,
    tag: 'CLEAN ARCH',
    accent: '#E21E4C',
  },
  {
    num: '09',
    category: 'ACCELERATION',
    title: 'High Concurrency',
    desc: 'Event-driven asynchronous messaging buses capable of handling tens of millions of telemetric events per second without dropping frames.',
    img: ServerRafikiSvg,
    tag: 'HIGH THROUGHPUT',
    accent: '#FF3366',
  },
  {
    num: '10',
    category: 'SOVEREIGNTY',
    title: 'Data Governance',
    desc: 'Sovereign data pipelines with localized data sovereignty compliance, enterprise GDPR/HIPAA compliance, and end-to-end cryptographic integrity.',
    img: DataExtractionCuateSvg,
    tag: 'COMPLIANT',
    accent: '#A91639',
  },
  {
    num: '11',
    category: 'SPATIAL',
    title: 'Spatial 3D Digital',
    desc: 'Photorealistic Three.js & WebGL rendering pipelines that bridge real-world physical telemetry with immersive 3D digital twins.',
    img: UiUxSvg,
    tag: 'WEBGL 2.0',
    accent: '#E21E4C',
  },
  {
    num: '12',
    category: 'PROTOCOL',
    title: 'API Telemetry',
    desc: 'Unified GraphQL & gRPC telemetry endpoints providing instantaneous data transmission between microservices and end-user dashboards.',
    img: WebDevSvg,
    tag: 'GRPC PROTOCOL',
    accent: '#FF3366',
  },
  {
    num: '13',
    category: 'EVOLUTION',
    title: 'Continuous CI/CD',
    desc: 'GitOps-driven continuous deployment workflows with automated canary rollouts, automated rollbacks, and instant zero-downtime releases.',
    img: TechSupportSvg,
    tag: 'GITOPS PIPELINE',
    accent: '#A91639',
  },
  {
    num: '14',
    category: 'PARTNERSHIP',
    title: 'Client Co-Engineering',
    desc: 'Direct integration of our principal architects with your core team, delivering transparent codebases, full documentation, and knowledge transfer.',
    img: CrmSvg,
    tag: 'DEDICATED CORE',
    accent: '#E21E4C',
  },
];

export default function FoundationsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const total = foundationsData.length;

  const nextCard = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevCard = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Smooth Auto-Play interval
  useEffect(() => {
    if (isPaused || isDragging) return;
    const interval = setInterval(() => {
      nextCard();
    }, 3600);
    return () => clearInterval(interval);
  }, [isPaused, isDragging, nextCard]);

  // Pointer drag events for buttery smooth swiping
  const handlePointerDown = (e) => {
    setIsDragging(true);
    dragStartX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
    dragCurrentX.current = dragStartX.current;
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    dragCurrentX.current = e.clientX || (e.touches && e.touches[0].clientX) || 0;
  };

  const handlePointerUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    const deltaX = dragCurrentX.current - dragStartX.current;
    if (deltaX < -45) {
      nextCard();
    } else if (deltaX > 45) {
      prevCard();
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextCard();
      if (e.key === 'ArrowLeft') prevCard();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextCard, prevCard]);

  return (
    <section
      className="relative w-full py-20 px-4 sm:px-8 bg-gradient-to-b from-[#F8F9FA] via-white to-[#F8F9FA] border-t border-b border-border-subtle overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-red-100/40 via-pink-50/30 to-transparent blur-[140px] pointer-events-none rounded-full" />

      <div className="relative max-w-[1440px] mx-auto flex flex-col items-center gap-10">
        {/* Header Section */}
        <div className="text-center flex flex-col items-center gap-3 max-w-2xl">
          <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-text-main tracking-tight">
            Why Choose <span className="text-primary">Qcodes Infotech</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
            Discover the core strengths, standards, and values that set our company apart.
          </p>
        </div>

        {/* 3D Hardware-Accelerated Card Stage */}
        <div
          className="relative w-full max-w-5xl h-[460px] sm:h-[500px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
          onMouseDown={handlePointerDown}
          onMouseMove={handlePointerMove}
          onMouseUp={handlePointerUp}
          onTouchStart={handlePointerDown}
          onTouchMove={handlePointerMove}
          onTouchEnd={handlePointerUp}
          style={{ perspective: '1200px' }}
        >
          {foundationsData.map((card, idx) => {
            // Calculate relative offset from active card (-2, -1, 0, 1, 2)
            let offset = idx - activeIndex;
            if (offset > total / 2) offset -= total;
            if (offset < -total / 2) offset += total;

            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 2;

            if (!isVisible) return null;

            // Compute GPU 3D transform metrics
            const translateX = offset * (window.innerWidth < 640 ? 170 : 250);
            const translateZ = isCenter ? 80 : -Math.abs(offset) * 110;
            const rotateY = offset * -14;
            const scale = isCenter ? 1.05 : 1 - Math.abs(offset) * 0.12;
            const opacity = isCenter ? 1 : Math.max(0.25, 1 - Math.abs(offset) * 0.4);
            const zIndex = 30 - Math.abs(offset) * 10;

            return (
              <div
                key={card.num}
                onClick={() => setActiveIndex(idx)}
                className="absolute w-[290px] sm:w-[330px] h-[400px] sm:h-[430px] rounded-2xl bg-white border p-5 sm:p-6 flex flex-col justify-between transition-transform duration-500 ease-out will-change-transform shadow-lg cursor-pointer"
                style={{
                  transform: `translate3d(${translateX}px, 0, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex,
                  borderColor: isCenter ? 'rgba(226, 30, 76, 0.45)' : 'rgba(226, 232, 240, 0.8)',
                  boxShadow: isCenter
                    ? '0 25px 50px -12px rgba(226, 30, 76, 0.22), 0 0 0 1px rgba(226, 30, 76, 0.15)'
                    : '0 10px 25px -5px rgba(0, 0, 0, 0.05)',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                }}
              >
                {/* Card Header */}
                <div className="flex items-center justify-between border-b border-border-subtle pb-3">
                  <span className="font-mono text-xs font-bold text-primary tracking-wider uppercase">
                    PILLAR_{card.num} // {card.category}
                  </span>
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      isCenter ? 'bg-primary shadow-[0_0_10px_rgba(226,30,76,0.9)] animate-pulse' : 'bg-slate-300'
                    }`}
                  />
                </div>

                {/* Card Illustration */}
                <div className="w-full h-32 my-2 flex items-center justify-center p-2.5 rounded-xl bg-surface-dim/80 border border-border-subtle group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="max-h-24 w-auto object-contain drop-shadow-sm pointer-events-none"
                    loading="lazy"
                  />
                </div>

                {/* Card Body */}
                <div className="flex flex-col gap-1.5">
                  <h3 className="font-headline font-extrabold text-lg text-text-main tracking-tight leading-snug">
                    {card.title}
                  </h3>
                  <p className="font-sans text-xs text-text-muted leading-relaxed line-clamp-3">
                    {card.desc}
                  </p>
                </div>

                {/* Card Footer Telemetry */}
                <div className="pt-3 border-t border-border-subtle flex items-center justify-between text-xs font-mono">
                  <span className="text-primary font-bold">{card.tag}</span>
                  <span className="flex items-center gap-1.5 text-[#28CD41] font-semibold text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#28CD41] animate-ping" />
                    ONLINE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Bottom Controls & Indicators */}
        <div className="flex flex-col items-center gap-5 z-20">
          <div className="flex items-center gap-4">
            <button
              onClick={prevCard}
              className="p-3 rounded-full bg-white hover:bg-primary border border-border-strong hover:border-primary text-text-main hover:text-white transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
              title="Previous Foundation"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back</span>
            </button>

            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-xs">
              {foundationsData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    i === activeIndex ? 'w-6 h-2 bg-primary' : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                  }`}
                  title={`Go to pillar ${i + 1}`}
                  type="button"
                />
              ))}
            </div>

            <button
              onClick={nextCard}
              className="p-3 rounded-full bg-white hover:bg-primary border border-border-strong hover:border-primary text-text-main hover:text-white transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center cursor-pointer"
              title="Next Foundation"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="material-symbols-outlined text-[15px] text-primary">touch_app</span>
            <span>DRAG OR USE ARROWS TO TRAVERSE THE 14 PILLARS</span>
          </div>
        </div>
      </div>
    </section>
  );
}

