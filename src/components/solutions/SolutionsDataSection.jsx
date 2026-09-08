import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DataExtractionCuateSvg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

// Engagement & Cost efficiency telemetry bars
const initialBars = [
  { baseH: 88, color: '#FFB2B7', label: 'Pre-Built Packages' },
  { baseH: 94, color: '#FD5971', label: 'Dedicated IT Squad' },
  { baseH: 82, color: '#E21E4C', label: 'MVP Rapid Launch' },
  { baseH: 96, color: '#A91639', label: 'Custom Enterprise Platform' },
  { baseH: 78, color: '#E21E4C', label: 'Cloud Cost Optimization' },
  { baseH: 86, color: '#11141A', label: 'Full-Stack Web & Mobile' },
  { baseH: 90, color: '#E21E4C', label: 'Agile Sprint Velocity' },
  { baseH: 92, color: '#A91639', label: 'DevOps & CI/CD Pipelines' },
  { baseH: 80, color: '#FD5971', label: 'QA Automation & Security' },
  { baseH: 85, color: '#E21E4C', label: '24/7 SLA Support' },
  { baseH: 88, color: '#A91639', label: 'API Integration Mesh' },
  { baseH: 91, color: '#E21E4C', label: 'Staff Augmentation' },
  { baseH: 98, color: '#11141A', label: 'Zero Hiring Overhead' },
  { baseH: 95, color: '#FD5971', label: 'Rapid Time-to-Market' },
  { baseH: 97, color: '#E21E4C', label: 'Capital Efficiency Score' },
  { baseH: 99, color: '#A91639', label: 'Net ROI Multiplier' },
];

export default function SolutionsDataSection() {
  const sectionRef = useRef(null);
  const barsContainerRef = useRef(null);
  const barElementsRef = useRef([]);
  const [activeMetric, setActiveMetric] = useState({ name: 'Dedicated IT Squad', efficiency: '99.4%', status: 'OPTIMAL' });

  useEffect(() => {
    const section = sectionRef.current;
    const barsContainer = barsContainerRef.current;
    if (!section || !barsContainer) return;

    const ctx = gsap.context(() => {
      const bars = barElementsRef.current.filter(Boolean);

      // ScrollTrigger: Dynamic Harmonic Wave on scroll
      ScrollTrigger.create({
        trigger: section,
        start: 'top 85%',
        end: 'bottom 20%',
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;

          bars.forEach((bar, idx) => {
            if (!bar) return;
            const baseHeight = initialBars[idx]?.baseH || 50;
            const waveOffset = Math.sin(progress * Math.PI * 3 + (idx * 0.45)) * 24;
            const secondaryWave = Math.cos(progress * Math.PI * 2 + (idx * 0.25)) * 12;
            const newHeight = Math.max(20, Math.min(100, baseHeight + waveOffset + secondaryWave));

            gsap.set(bar, {
              height: `${newHeight.toFixed(1)}%`,
            });
          });
        },
      });

      // Ambient subtle wave breathing
      bars.forEach((bar, idx) => {
        if (!bar) return;
        gsap.to(bar, {
          scaleY: 1.05,
          duration: 1.4 + (idx % 4) * 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: idx * 0.05,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-8 xl:px-12 py-16 lg:py-20 relative bg-[#FBFBFC] border-t border-border-subtle"
      id="section-data"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        
        {/* TOP ROW: Narrative Paragraphs + Side SVG Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Text Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#11141A] tracking-tight leading-[1.15]">
              Cost Effectiveness
            </h2>

            <div className="flex flex-col gap-4 font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              <p>
                Our flexible engagement models are designed to be cost-effective, so you can stay within budget while still getting the IT solutions you need.
              </p>

              <p>
                <strong className="text-text-main font-semibold">Convenience:</strong> Our pre-built packages offer a convenient and efficient way to get the IT solutions you need without needing custom development.
              </p>

              <p>
                <strong className="text-text-main font-semibold">Cost Effectiveness:</strong> Qcodes Infotech offers a dedicated team of skilled IT professionals capable of efficiently handling various tasks, providing a cost-effective solution compared to hiring individual employees.
              </p>
            </div>
          </div>

          {/* Right Column: SVG Illustration Card */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-white via-red-50/20 to-white border border-red-100 shadow-xl shadow-red-500/5 flex items-center justify-center group overflow-hidden">
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
              <img
                src={DataExtractionCuateSvg}
                alt="Cost Effectiveness & Resource Management"
                className="w-full h-auto max-h-[260px] object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
              />
            </div>
          </div>

        </div>

        {/* BOTTOM ROW: Full-Width Cost-Efficiency & Resource Allocation Spectrum Diagram */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-border-subtle shadow-[0_6px_30px_rgba(0,0,0,0.03)] flex flex-col gap-6 relative overflow-hidden">
          
          {/* Diagram Header */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[22px]">bar_chart</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-headline text-base sm:text-lg font-bold text-[#11141A]">
                  Cost-Efficiency &amp; Resource Allocation Spectrum
                </h3>
                <span className="font-sans text-xs text-text-muted">
                  Dynamic resource optimization across pre-built packages, agile squads, and dedicated IT teams
                </span>
              </div>
            </div>

            {/* Active Telemetry Status Indicator */}
            <div className="flex items-center gap-2 px-3.5 py-1.5 bg-[#FFF0F2] border border-primary/20 rounded-xl font-sans text-xs text-primary font-bold">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span>{activeMetric.name}: {activeMetric.efficiency}</span>
            </div>
          </div>

          {/* Dynamic Interactive Wave Spectrum Bars */}
          <div
            ref={barsContainerRef}
            className="w-full h-44 sm:h-52 bg-gradient-to-b from-[#F9FAFC] to-[#F1F3F7] border border-border-subtle rounded-2xl flex items-end justify-between px-3 sm:px-6 py-4 gap-1.5 sm:gap-2 overflow-hidden shadow-inner relative"
          >
            {/* Guide Lines */}
            <div className="absolute inset-x-0 top-1/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>
            <div className="absolute inset-x-0 top-2/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>
            <div className="absolute inset-x-0 top-3/4 border-b border-dashed border-gray-300 pointer-events-none opacity-40"></div>

            {initialBars.map((bar, idx) => (
              <div
                key={idx}
                ref={(el) => (barElementsRef.current[idx] = el)}
                onMouseEnter={() =>
                  setActiveMetric({
                    name: bar.label,
                    efficiency: `${(bar.baseH + (Math.random() * 6 - 3)).toFixed(1)}%`,
                    status: 'OPTIMAL',
                  })
                }
                className="w-full rounded-t-md transition-colors duration-200 cursor-pointer relative group origin-bottom"
                style={{
                  height: `${bar.baseH}%`,
                  backgroundColor: bar.color,
                  boxShadow: bar.color === '#E21E4C' || bar.color === '#A91639' ? '0 0 10px rgba(226,30,76,0.3)' : 'none',
                }}
              >
                {/* Tooltip on Hover */}
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-[#11141A] text-white text-[11px] font-sans px-2.5 py-1 rounded-lg shadow-md pointer-events-none whitespace-nowrap z-20">
                  {bar.label}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Spectrum Telemetry Summary */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-text-muted font-sans text-xs border-t border-border-subtle">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary shrink-0"></span>
              <span><strong>Zero Overhead:</strong> Eliminates hiring, onboarding &amp; payroll burden</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-dark shrink-0"></span>
              <span><strong>Pre-Built Modules:</strong> Rapid deployment without custom dev delays</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#11141A] shrink-0"></span>
              <span><strong>Dedicated Team:</strong> High-skilled cross-functional engineering pool</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
