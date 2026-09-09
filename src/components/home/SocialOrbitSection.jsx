import React, { useState, useEffect, useRef } from 'react';
import { FaLinkedinIn, FaYoutube, FaInstagram, FaFacebookF, FaXTwitter } from 'react-icons/fa6';
import { TabIcon } from '../../assets';

const socialNodes = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: '@qcodes-infotech',
    role: 'Professional Network & Careers',
    Icon: FaLinkedinIn,
    iconColor: '#0A66C2',
    desc: 'Connect with our leadership, explore career openings, and follow our latest enterprise milestone announcements and engineering articles.',
    url: 'https://www.linkedin.com/company/qcodes-infotech',
    coords: { x: -290, y: -80, size: 'large' },
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@Qcodesinfotech-ov5zi',
    role: 'Video Case Studies & Tech Demos',
    Icon: FaYoutube,
    iconColor: '#FF0000',
    desc: 'Watch high-definition architectural breakdowns, live client platform demos, software engineering walkthroughs, and company podcasts.',
    url: 'https://www.youtube.com/@Qcodesinfotech-ov5zi',
    coords: { x: 290, y: -80, size: 'large' },
  },
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@qcodes_official',
    role: 'Culture, Design & Behind The Scenes',
    Icon: FaInstagram,
    iconColor: '#E4405F',
    desc: 'Explore our UI/UX design showcases, vibrant team culture, tech workshops, hackathons, and day-to-day creative office highlights.',
    url: 'https://www.instagram.com/qcodes_official',
    coords: { x: 0, y: 190, size: 'large' },
  },
  {
    id: 'facebook',
    name: 'Facebook',
    handle: '@qcodesinfotech',
    role: 'Community & Corporate Updates',
    Icon: FaFacebookF,
    iconColor: '#1877F2',
    desc: 'Join our global community, discover technology news, corporate webinars, client project launches, and industry insights.',
    url: 'https://www.facebook.com/qcodesinfotech',
    coords: { x: -210, y: 130, size: 'medium' },
  },
  {
    id: 'x',
    name: 'X (Twitter)',
    handle: '@qcodes_official',
    role: 'Real-time Tech Insights & Releases',
    Icon: FaXTwitter,
    iconColor: '#000000',
    desc: 'Follow real-time engineering dispatches, web & AI framework trends, developer discussions, and instant product announcements.',
    url: 'https://x.com/qcodes_official',
    coords: { x: 210, y: 130, size: 'medium' },
  },
];

const STAGE_BASE_WIDTH = 1000;
const STAGE_BASE_HEIGHT = 560;

export default function SocialOrbitSection() {
  const [selectedNode, setSelectedNode] = useState(socialNodes[0]); // Default LinkedIn selected
  const [hoveredNode, setHoveredNode] = useState(null);
  
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Dynamically compute responsive scale factor
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        const calculatedScale = Math.min(1, Math.max(0.32, availableWidth / STAGE_BASE_WIDTH));
        setScale(calculatedScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full max-w-full relative overflow-hidden py-14 sm:py-18 lg:py-24 bg-gradient-to-b from-white via-[#FFF8F9] to-white border-b border-border-subtle" id="social-community">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-200 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span>Connect &amp; Follow</span>
          </div>

          <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight">
            Connect With{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-primary-dark">
              Qcodes Infotech
            </span>
          </h2>

          <p className="font-sans text-xs sm:text-base text-text-muted leading-relaxed max-w-2xl">
            <span className="hidden lg:inline">Hover over any circular channel node to explore our official social presence, tech dispatches, and global community.</span>
            <span className="inline lg:hidden">Tap any circular channel node to view channel details and connect with our team below.</span>
          </p>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE SCALED CIRCLE ORBIT MATRIX                                     */}
        {/* ========================================================================= */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mx-auto select-none overflow-visible flex flex-col items-center justify-center"
          style={{
            height: `${Math.round(STAGE_BASE_HEIGHT * scale)}px`,
          }}
        >
          {/* Scaled Orbit Matrix Stage */}
          <div 
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-auto"
            style={{
              width: `${STAGE_BASE_WIDTH}px`,
              height: `${STAGE_BASE_HEIGHT}px`,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transformOrigin: 'center center',
            }}
          >
            
            {/* 1. Subtle Ambient Glow Aura */}
            <div className="absolute -z-20 pointer-events-none flex items-center justify-center">
              <div className="w-[500px] sm:w-[700px] h-[240px] sm:h-[300px] bg-gradient-to-r from-primary/10 via-pink-300/15 to-primary/10 blur-[90px] rounded-full opacity-60" />
            </div>

            {/* 2. Horizontal Meteor Lines */}
            <div className="absolute inset-0 -z-15 pointer-events-none overflow-hidden">
              <div className="meteor-track" style={{ top: '90px' }}>
                <div className="meteor-head w-40" style={{ animationDuration: '5.2s', animationDelay: '0s' }} />
              </div>
              <div className="meteor-track" style={{ top: '220px' }}>
                <div className="meteor-head w-56" style={{ animationDuration: '6.8s', animationDelay: '2.4s' }} />
              </div>
              <div className="meteor-track" style={{ top: '350px' }}>
                <div className="meteor-head w-44" style={{ animationDuration: '5.4s', animationDelay: '1.2s' }} />
              </div>
              <div className="meteor-track" style={{ top: '470px' }}>
                <div className="meteor-head w-48" style={{ animationDuration: '6.1s', animationDelay: '3.6s' }} />
              </div>
            </div>

            {/* 3. Concentric Orbit Rings */}
            <svg
              className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
              viewBox="0 0 1000 560"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <circle cx="500" cy="280" r="140" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" />
              <circle cx="500" cy="280" r="240" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.08" />
              <circle cx="500" cy="280" r="340" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.04" strokeDasharray="6 6" />
            </svg>

            {/* CENTER CORE: Qcodes Official Hub */}
            <div
              className={`absolute z-30 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredNode === 'center' || selectedNode?.id === 'center' ? 'z-[100] scale-110' : 'hover:scale-105'
              }`}
              onClick={() => {
                setSelectedNode({
                  id: 'center',
                  name: 'Qcodes Official Hub',
                  handle: 'qcodesinfotech.com',
                  role: 'Central Engineering & Technology Headquarters',
                  iconColor: '#E21E4C',
                  desc: 'Founded in 2016 in Chennai, India, delivering web, mobile, AI, cloud, and digital solutions globally across our entire social and technology network.',
                  url: 'https://qcodesinfotech.com',
                  isCenter: true,
                });
              }}
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Large Viewport Hover Card Popup */}
              <div 
                className={`hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+16px)] pointer-events-auto transition-all duration-200 z-50 ${
                  hoveredNode === 'center' ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-2 invisible pointer-events-none'
                }`}
              >
                <div className="w-72 bg-slate-900/95 backdrop-blur-md text-white p-4 rounded-xl shadow-2xl border border-white/10 ring-1 ring-primary/30 flex flex-col gap-2 text-left cursor-default">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 bg-primary/20 border border-primary/30">
                      <img src={TabIcon} alt="Qcodes" className="w-5 h-5 object-contain" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <h4 className="font-headline text-xs font-bold text-white truncate leading-tight">
                        Qcodes Official Hub
                      </h4>
                      <span className="text-[10px] font-semibold text-[#FF4D79]">
                        Global Digital Ecosystem
                      </span>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-300 font-sans leading-relaxed">
                    Founded in 2016 in Chennai, India, delivering web, mobile, AI, cloud, and digital solutions globally.
                  </p>
                  <a
                    href="https://qcodesinfotech.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between text-[10px] font-bold text-white bg-primary hover:bg-primary-dark px-2.5 py-1 rounded-lg transition-colors mt-1"
                  >
                    <span>Visit Official Website</span>
                    <span>→</span>
                  </a>
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-slate-900/95" />
                </div>
              </div>

              <div className="absolute -inset-5 sm:-inset-6 rounded-full border border-primary/25 pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-transparent border-t-primary border-r-primary animate-[spin_6s_linear_infinite]" />
              </div>

              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white shadow-[0_12px_36px_rgba(226,30,76,0.22),0_4px_12px_rgba(0,0,0,0.06)] border-4 border-[#FFF0F2] ring-1 ring-primary/30">
                  <img
                    src={TabIcon}
                    alt="Qcodes Infotech Hub"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* ORBITING SOCIAL CHANNEL NODES */}
            {socialNodes.map((node, index) => {
              const { id, name, handle, role, Icon, iconColor, desc, url, coords } = node;
              const isHovered = hoveredNode === id;
              const isSelected = selectedNode?.id === id;
              const isTopPosition = coords.y < -40;
              
              let sizeClasses = 'h-16 w-16 sm:h-18 sm:w-18 p-3.5';
              let iconSize = 'w-7 h-7 sm:w-8 sm:h-8';
              if (coords.size === 'large') {
                sizeClasses = 'h-18 w-18 sm:h-20 sm:w-20 p-4';
                iconSize = 'w-8 h-8 sm:w-9 sm:h-9';
              }

              return (
                <div
                  key={id}
                  style={{
                    transform: `translate(${coords.x}px, ${coords.y}px)`,
                  }}
                  className={`absolute z-20 cursor-pointer transition-all duration-300 ${
                    isHovered || isSelected ? 'z-[90] scale-125' : 'hover:scale-110 opacity-90 hover:opacity-100'
                  }`}
                  onClick={() => {
                    setSelectedNode(node);
                    setHoveredNode(id);
                  }}
                  onMouseEnter={() => setHoveredNode(id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Large Viewport Hover Card Popup */}
                  <div 
                    className={`hidden lg:block absolute left-1/2 -translate-x-1/2 ${
                      isTopPosition ? 'top-[calc(100%+14px)]' : 'bottom-[calc(100%+14px)]'
                    } pointer-events-auto transition-all duration-200 z-50 ${
                      isHovered ? 'opacity-100 scale-100 translate-y-0 visible' : 'opacity-0 scale-95 translate-y-2 invisible pointer-events-none'
                    }`}
                  >
                    <div className="w-68 bg-slate-900/95 backdrop-blur-md text-white p-3.5 rounded-xl shadow-2xl border border-white/10 ring-1 ring-primary/30 flex flex-col gap-2 text-left cursor-default">
                      <div className="flex items-center gap-2.5">
                        <div 
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border border-white/10"
                          style={{ backgroundColor: `${iconColor}22` }}
                        >
                          <Icon className="w-4 h-4" style={{ color: iconColor }} />
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h4 className="font-headline text-xs font-bold text-white truncate leading-tight">
                            {name}
                          </h4>
                          <span className="text-[10px] font-semibold text-[#FF4D79] truncate">
                            {handle}
                          </span>
                        </div>
                      </div>
                      <p className="text-[11px] text-slate-300 font-sans leading-relaxed line-clamp-3">
                        {desc}
                      </p>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-between text-[10px] font-bold text-white bg-primary hover:bg-primary-dark px-2.5 py-1 rounded-lg transition-colors mt-1"
                      >
                        <span>Follow on {name}</span>
                        <span>→</span>
                      </a>
                      {/* Tooltip triangle indicator */}
                      {isTopPosition ? (
                        <div className="absolute left-1/2 -translate-x-1/2 bottom-full w-0 h-0 border-x-6 border-x-transparent border-b-6 border-b-slate-900/95" />
                      ) : (
                        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-6 border-x-transparent border-t-6 border-t-slate-900/95" />
                      )}
                    </div>
                  </div>

                  <div className={`animate-[breath_${6 + (index % 3)}s_ease-in-out_${(index % 3) * 0.9}s_infinite_both]`}>
                    <div className={`flex ${sizeClasses} items-center justify-center rounded-full bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-2 sm:border-3 ${
                      isSelected ? 'border-primary ring-2 ring-primary/40 shadow-[0_8px_28px_rgba(226,30,76,0.35)]' : 'border-slate-100 ring-1 ring-slate-200/80 hover:ring-primary hover:border-[#FFF0F2]'
                    } transition-all`}>
                      <Icon className={iconSize} style={{ color: iconColor }} />
                    </div>
                  </div>
                </div>
              );
            })}

          </div>
        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE CHANNEL DRAWER CARD (Visible ONLY on Small Viewports)         */}
        {/* ========================================================================= */}
        <div className="block lg:hidden w-full max-w-2xl mx-auto mt-4 sm:mt-6">
          {selectedNode && (
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-100 shadow-[0_12px_36px_rgba(226,30,76,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300">
              
              <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-grow">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 shadow-2xs"
                  style={{ backgroundColor: `${selectedNode.iconColor || '#E21E4C'}14` }}
                >
                  {selectedNode.isCenter ? (
                    <img src={TabIcon} alt="Qcodes" className="w-7 h-7 object-contain" />
                  ) : selectedNode.Icon ? (
                    <selectedNode.Icon className="w-6 h-6" style={{ color: selectedNode.iconColor }} />
                  ) : (
                    <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                  )}
                </div>

                <div className="flex flex-col min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-headline text-base sm:text-lg font-bold text-text-main truncate">
                      {selectedNode.name}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  </div>
                  <span className="font-sans text-[11px] sm:text-xs font-semibold text-primary block">
                    {selectedNode.handle} • {selectedNode.role}
                  </span>
                  <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed line-clamp-2 sm:line-clamp-3">
                    {selectedNode.desc}
                  </p>
                </div>
              </div>

              {/* Direct Action Link */}
              <div className="w-full sm:w-auto flex justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                <a
                  href={selectedNode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white font-sans text-xs sm:text-sm font-bold shadow-md shadow-primary/25 transition-all hover:scale-[1.02]"
                >
                  <span>Visit {selectedNode.name}</span>
                  <span className="text-sm">→</span>
                </a>
              </div>

            </div>
          )}
        </div>

      </div>
    </section>
  );
}
