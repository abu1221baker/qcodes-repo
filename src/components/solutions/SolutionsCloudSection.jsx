import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ConnectedWorldSvg } from '../../assets';

gsap.registerPlugin(ScrollTrigger);

const projectSteps = [
  {
    num: '01',
    icon: 'groups',
    category: 'ALIGNMENT',
    title: 'Project Kick-Off Meetings',
    desc: "The main goal of a kick-off meeting is to align all stakeholders on the project's objectives, scope, timeline, and budget.",
    highlight: 'Stakeholder Alignment',
    milestone: 'Objective Lock',
  },
  {
    num: '02',
    icon: 'chat_bubble',
    category: 'CLARITY',
    title: 'Clear, Correct & Concise Information',
    desc: 'Information should be presented in a way that is easy to understand and can be interpreted correctly across engineering and executive teams.',
    highlight: 'Zero Ambiguity',
    milestone: 'Specification Clarity',
  },
  {
    num: '03',
    icon: 'person_pin',
    category: 'GOVERNANCE',
    title: 'Single Point of Contact (SPOC)',
    desc: 'A single point of contact (SPOC) is a designated individual or team that serves as the primary point of communication and coordination for a project.',
    highlight: 'Dedicated Lead',
    milestone: 'Direct Ownership',
  },
  {
    num: '04',
    icon: 'forum',
    category: 'CHANNELS',
    title: 'Multiple Communication Channels',
    desc: 'Utilize various communication channels such as email, instant messaging, video conferencing, and project management software to ensure all team members are informed and on the same page.',
    highlight: 'Omni-Channel',
    milestone: 'Synchronized Comms',
  },
  {
    num: '05',
    icon: 'lock_open_right',
    category: 'WORKFLOW',
    title: 'Project Workflow Accessibility',
    desc: 'Clearly define roles and responsibilities for all team members to ensure proper access to project tasks, development branches, and design resources.',
    highlight: 'Role Governance',
    milestone: 'Access Provisioning',
  },
  {
    num: '06',
    icon: 'shield_lock',
    category: 'COMPLIANCE',
    title: 'Privacy & Security Protocols',
    desc: 'Ensure all team members understand and abide by enterprise company data privacy, non-disclosure agreements, and SOC-2 security policies.',
    highlight: 'Zero-Trust Shield',
    milestone: 'SOC-2 Compliance',
  },
  {
    num: '07',
    icon: 'space_dashboard',
    category: 'STACK',
    title: 'Modern Project Management Tools',
    desc: 'We leverage industry-leading agile project management platforms including Trello, Jira, Basecamp, Linear, and Asana for real-time sprint tracking.',
    highlight: 'Jira • Trello • Asana',
    milestone: 'Toolchain Integration',
  },
  {
    num: '08',
    icon: 'radar',
    category: 'EXECUTION',
    title: 'Proactive & Upfront Execution',
    desc: 'Being proactive means preemptively identifying architectural bottlenecks, evaluating emerging risks, and capturing opportunities before they impact delivery.',
    highlight: 'Risk Prevention',
    milestone: 'Preemptive Mitigation',
  },
  {
    num: '09',
    icon: 'event_repeat',
    category: 'CADENCE',
    title: 'Weekly / Fortnightly Reviews',
    desc: 'Regular scheduled check-ins on project velocity and deliverables to identify blockers, demo iterations, and maintain rapid forward momentum.',
    highlight: 'Sprint Milestones',
    milestone: 'Continuous Feedback',
  },
  {
    num: '10',
    icon: 'menu_book',
    category: 'KNOWLEDGE',
    title: 'Complete System Documentation',
    desc: 'Clear, comprehensive, and consistent technical documentation communicates architectural goals, API contracts, and user guides to all stakeholders.',
    highlight: 'Living Architecture',
    milestone: 'System Blueprints',
  },
  {
    num: '11',
    icon: 'query_stats',
    category: 'TELEMETRY',
    title: 'Transparent Status Reports',
    desc: 'Granular status reports provide executive visibility over sprint burndown, milestone completion, budget burn rate, and test coverage metrics.',
    highlight: 'Real-time Metrics',
    milestone: 'Burndown Telemetry',
  },
  {
    num: '12',
    icon: 'military_tech',
    category: 'LANDING BASE',
    title: 'Respect & Dynamic Flexibility',
    desc: 'Treating all team members, stakeholders, and clients with utmost dignity and consideration, combined with agile flexibility to achieve 100% mission success.',
    highlight: 'Touchdown Complete',
    milestone: 'Mission Accomplished',
  },
];

export default function SolutionsCloudSection() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const rocketTrackerRef = useRef(null);
  const svgPathRef = useRef(null);
  const guidePathRef = useRef(null);
  const atmosphericFlameRef = useRef(null);
  const orbitalFlameRef = useRef(null);
  const leftBoosterRef = useRef(null);
  const rightBoosterRef = useRef(null);
  const stage1Ref = useRef(null);
  const lesTowerRef = useRef(null);
  const sepFxRef = useRef(null);
  const currentStepRef = useRef(1);
  const isLandedRef = useRef(false);
  const landingCardRef = useRef(null);
  const landingCircleRef = useRef(null);
  const landingBadgeRef = useRef(null);
  const landingIconRef = useRef(null);
  const landingIndicatorRef = useRef(null);
  const landingFooterRef = useRef(null);
  const [pathD, setPathD] = useState('');

  // Generate ultra-smooth Zig-Zag Bezier path leading directly to Card 12 Landing Site
  const calculateZigZagPath = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const anchors = track.querySelectorAll('.timeline-anchor-point');
    if (!anchors || anchors.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const points = [];
    const isMobile = window.innerWidth < 1024;

    // Start point slightly above the first milestone
    const firstAnchorRect = anchors[0].getBoundingClientRect();
    const firstAnchorCenterX = firstAnchorRect.left + firstAnchorRect.width / 2 - trackRect.left;
    const startX = isMobile ? firstAnchorCenterX : (trackRect.width / 2);
    const firstAnchorCenterY = firstAnchorRect.top + firstAnchorRect.height / 2 - trackRect.top;
    const startY = Math.max(10, firstAnchorCenterY - 80);
    points.push({ x: startX, y: startY });

    // Collect center coordinates of each milestone anchor point relative to the track
    anchors.forEach((anchor) => {
      const rect = anchor.getBoundingClientRect();
      const x = rect.left + rect.width / 2 - trackRect.left;
      const y = rect.top + rect.height / 2 - trackRect.top;
      points.push({ x, y });
    });

    if (points.length < 2) return;

    // Centripetal Catmull-Rom to Cubic Bezier with optimal smooth tension (0.26 desktop, 0.15 mobile)
    const tension = isMobile ? 0.15 : 0.26;
    let d = `M ${points[0].x.toFixed(1)} ${points[0].y.toFixed(1)}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i === 0 ? 0 : i - 1];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2 < points.length ? i + 2 : i + 1];

      const cp1x = p1.x + (p2.x - p0.x) * tension;
      const cp1y = p1.y + (p2.y - p0.y) * tension;
      const cp2x = p2.x - (p3.x - p1.x) * tension;
      const cp2y = p2.y - (p3.y - p1.y) * tension;

      d += ` C ${cp1x.toFixed(1)} ${cp1y.toFixed(1)}, ${cp2x.toFixed(1)} ${cp2y.toFixed(1)}, ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
    }

    setPathD(d);
  }, []);

  useEffect(() => {
    calculateZigZagPath();
    const timer = setTimeout(calculateZigZagPath, 150);

    // Use ResizeObserver for responsive recalculation without scroll jank
    let resizeObserver;
    if (window.ResizeObserver && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        calculateZigZagPath();
        ScrollTrigger.refresh();
      });
      resizeObserver.observe(trackRef.current);
    }

    const handleResize = () => {
      calculateZigZagPath();
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => {
      clearTimeout(timer);
      if (resizeObserver) resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [calculateZigZagPath]);

  // Animation state refs — live outside React render cycle for zero-overhead access
  const animStateRef = useRef({
    targetProgress: 0,
    currentProgress: 0,
    smoothAngle: 0,
    direction: 1,
    running: false,
    rafId: 0,
    lastStepIndex: 1,
    lastLanded: false,
  });

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    const rocket = rocketTrackerRef.current;
    const path = svgPathRef.current;

    if (!section || !track || !rocket || !path || !pathD) return;

    const state = animStateRef.current;
    const pathLength = path.getTotalLength();
    const isMobile = window.innerWidth < 1024;
    const baseScale = window.innerWidth < 768 ? 0.82 : 1;

    // ═══ Pre-compute 1000-point LUT for O(1) path lookups ═══
    const LUT_SIZE = 1000;
    const lutX = new Float32Array(LUT_SIZE);
    const lutY = new Float32Array(LUT_SIZE);
    for (let i = 0; i < LUT_SIZE; i++) {
      const pt = path.getPointAtLength((i / (LUT_SIZE - 1)) * pathLength);
      lutX[i] = pt.x;
      lutY[i] = pt.y;
    }

    const getPoint = (dist) => {
      const t = dist <= 0 ? 0 : dist >= pathLength ? 1 : dist / pathLength;
      const idx = t * (LUT_SIZE - 1);
      const i0 = idx | 0; // fast floor
      const i1 = i0 + 1 < LUT_SIZE ? i0 + 1 : i0;
      const f = idx - i0;
      return {
        x: lutX[i0] + (lutX[i1] - lutX[i0]) * f,
        y: lutY[i0] + (lutY[i1] - lutY[i0]) * f,
      };
    };

    // ═══ Initial setup ═══
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    const startPt = getPoint(0);
    const nextPt = getPoint(Math.min(15, pathLength));
    const initialAngle = Math.atan2(nextPt.y - startPt.y, nextPt.x - startPt.x) * (180 / Math.PI) - 90;
    state.smoothAngle = initialAngle;
    state.currentProgress = 0;
    state.targetProgress = 0;

    rocket.style.transform = `translate3d(${startPt.x}px, ${startPt.y}px, 0) translate(-50%, -50%) rotate(${initialAngle}deg) scale(${baseScale})`;
    rocket.style.willChange = 'transform';

    // Cache DOM refs once
    const cards = track.querySelectorAll('.timeline-step-card');
    const nodes = track.querySelectorAll('.timeline-track-node');
    const totalSteps = projectSteps.length;
    const leftBooster = leftBoosterRef.current;
    const rightBooster = rightBoosterRef.current;
    const stage1El = stage1Ref.current;
    const lesTowerEl = lesTowerRef.current;
    const atmosFlame = atmosphericFlameRef.current;
    const orbFlame = orbitalFlameRef.current;

    // ═══ ScrollTrigger: Tracks raw progress with calibrated mobile endpoints ═══
    const st = ScrollTrigger.create({
      trigger: track,
      start: isMobile ? 'top 65%' : 'top 55%',
      end: isMobile ? 'bottom 88%' : 'bottom 75%',
      onUpdate: (self) => {
        state.targetProgress = self.progress;
        state.direction = self.direction;
        // Kick the render loop if it's sleeping
        if (!state.running) {
          state.running = true;
          state.rafId = requestAnimationFrame(renderLoop);
        }
      },
    });

    // ═══ CORE RENDER LOOP — runs at native display refresh rate ═══
    const LERP = 0.14; // Smoothing factor: higher = faster tracking, lower = smoother
    const EPSILON = 0.00005; // Stop threshold

    function renderLoop() {
      const target = state.targetProgress;
      let cur = state.currentProgress;

      // Lerp toward target
      cur += (target - cur) * LERP;

      // Snap if close enough — prevent infinite drift
      if (Math.abs(target - cur) < EPSILON) {
        cur = target;
        state.running = false; // Sleep until next scroll event
      }

      state.currentProgress = cur;

      const dist = cur * pathLength;
      const dir = state.direction;

      // 1. Path trail — single property write
      path.style.strokeDashoffset = pathLength - dist;

      // 2. Rocket position + rotation
      const sampleDist = pathLength * 0.015 > 12 ? pathLength * 0.015 : 12;
      const pC = getPoint(dist);
      const pA = getPoint(dist + sampleDist);
      const pB = getPoint(dist - sampleDist);

      const targetAngle = dir >= 0
        ? Math.atan2(pA.y - pC.y, pA.x - pC.x) * 57.2958 - 90  // 180/PI = 57.2958
        : Math.atan2(pB.y - pC.y, pB.x - pC.x) * 57.2958 - 90;

      const curvature = (pA.x - 2 * pC.x + pB.x) * 0.08;
      const bank = curvature < -12 ? -12 : curvature > 12 ? 12 : curvature;
      const desired = targetAngle + bank;

      let angDiff = (desired - state.smoothAngle) % 360;
      if (angDiff > 180) angDiff -= 360;
      if (angDiff < -180) angDiff += 360;
      state.smoothAngle += angDiff * 0.28;

      // 3. Landing — initiates as rocket descends to Card 12 and confirms on touchdown
      const isApproachingLanding = cur > 0.92;
      const isTouchdownConfirmed = cur >= 0.97;
      let finalAngle = state.smoothAngle;
      let scale = baseScale;
      if (isApproachingLanding) {
        const lr = Math.min(1, (cur - 0.92) / 0.08);
        finalAngle = state.smoothAngle * (1 - lr);
        scale = baseScale * (1 - lr * 0.12);
        if (orbFlame) orbFlame.style.opacity = Math.max(0, 1 - lr * 1.6);
      }

      // Single composite transform — one GPU layer, one style write
      rocket.style.transform = `translate3d(${pC.x}px,${pC.y}px,0) translate(-50%,-50%) rotate(${finalAngle}deg) scale(${scale})`;

      // 4. Stage separations
      const sideR = cur < 0.20 ? 0 : cur > 0.45 ? 1 : (cur - 0.20) * 4; // /0.25 = *4
      if (leftBooster && rightBooster) {
        const bOp = sideR >= 1 ? 0 : 1 - sideR * sideR * 0.77; // approximation of pow(1.3)
        leftBooster.setAttribute('transform', `translate(${-sideR * 130},${-sideR * 140}) rotate(${-sideR * 45} 21 54)`);
        leftBooster.style.opacity = bOp;
        rightBooster.setAttribute('transform', `translate(${sideR * 130},${-sideR * 140}) rotate(${sideR * 45} 79 54)`);
        rightBooster.style.opacity = bOp;
      }

      const s1R = cur < 0.42 ? 0 : cur > 0.65 ? 1 : (cur - 0.42) * 4.348; // /0.23
      if (stage1El) {
        const s1Op = s1R >= 1 ? 0 : 1 - s1R * s1R * 0.83;
        stage1El.setAttribute('transform', `translate(0,${-s1R * 160}) rotate(${s1R * 12} 50 40)`);
        stage1El.style.opacity = s1Op;
      }

      const lesR = cur < 0.36 ? 0 : cur > 0.55 ? 1 : (cur - 0.36) * 5.263; // /0.19
      if (lesTowerEl) {
        const lesOp = lesR >= 1 ? 0 : 1 - lesR * lesR * 0.9;
        lesTowerEl.setAttribute('transform', `translate(0,${lesR * 140}) rotate(${lesR * 20} 50 175)`);
        lesTowerEl.style.opacity = lesOp;
      }

      // Flames
      if (atmosFlame) atmosFlame.style.opacity = s1R < 0.667 ? 1 : Math.max(0, 1 - s1R * 1.5);
      if (orbFlame && !isApproachingLanding) {
        orbFlame.style.opacity = cur < 0.38 ? 0 : Math.min(1, (cur - 0.38) * 7.143); // /0.14
      }

      // 5. Cards — same rAF frame, no extra scheduling needed
      const stepFloat = cur * (totalSteps - 1);
      for (let i = 0; i < cards.length; i++) {
        const d = stepFloat - i;
        const ad = d < 0 ? -d : d;
        cards[i].style.opacity = ad < 1.31 ? Math.max(0.28, 1 - ad * 0.55) : 0.28;
        cards[i].style.transform = ad < 1.43 ? `scale(${Math.max(0.95, 1 - ad * 0.035)})` : 'scale(0.95)';

        if (nodes[i]) {
          if (ad < 0.6) {
            nodes[i].style.transform = 'scale(1.35)';
            nodes[i].style.backgroundColor = '#E21E4C';
          } else {
            nodes[i].style.transform = 'scale(0.85)';
            nodes[i].style.backgroundColor = '#E5E7EB';
          }
        }
      }

      // Update refs (no React re-render)
      const stepIdx = Math.min(totalSteps, Math.max(1, Math.round(stepFloat) + 1));
      currentStepRef.current = stepIdx;

      // Card 12 landing state — direct DOM manipulation, zero re-renders
      if (isTouchdownConfirmed !== isLandedRef.current) {
        isLandedRef.current = isTouchdownConfirmed;
        const lCard = landingCardRef.current;
        const lCircle = landingCircleRef.current;
        const lBadge = landingBadgeRef.current;
        const lIcon = landingIconRef.current;
        const lIndicator = landingIndicatorRef.current;
        const lFooter = landingFooterRef.current;

        if (isTouchdownConfirmed) {
          if (lCard) {
            lCard.style.borderColor = '#0ae448';
            lCard.style.boxShadow = '0 0 35px rgba(10,228,72,0.25)';
            lCard.style.outline = '2px solid rgba(10,228,72,0.4)';
            lCard.style.outlineOffset = '-2px';
          }
          if (lCircle) lCircle.style.background = 'linear-gradient(to bottom right, #0ae448, #05ba39, #048729)';
          if (lBadge) {
            lBadge.textContent = 'TOUCHDOWN CONFIRMED';
            lBadge.style.backgroundColor = '#EBFDF0';
            lBadge.style.color = '#05ba39';
            lBadge.style.borderColor = 'rgba(10,228,72,0.3)';
          }
          if (lIcon) {
            lIcon.textContent = 'task_alt';
            lIcon.style.color = '#05ba39';
          }
          if (lIndicator) { lIndicator.style.opacity = '1'; lIndicator.style.visibility = 'visible'; }
          if (lFooter) lFooter.style.color = '#05ba39';
        } else {
          if (lCard) {
            lCard.style.borderColor = '';
            lCard.style.boxShadow = '';
            lCard.style.outline = '';
            lCard.style.outlineOffset = '';
          }
          if (lCircle) lCircle.style.background = '';
          if (lBadge) {
            lBadge.textContent = 'LANDING BASE';
            lBadge.style.backgroundColor = '';
            lBadge.style.color = '';
            lBadge.style.borderColor = '';
          }
          if (lIcon) {
            lIcon.textContent = 'military_tech';
            lIcon.style.color = '';
          }
          if (lIndicator) { lIndicator.style.opacity = '0'; lIndicator.style.visibility = 'hidden'; }
          if (lFooter) lFooter.style.color = '';
        }
      }

      // Continue loop if not settled
      if (state.running) {
        state.rafId = requestAnimationFrame(renderLoop);
      }
    }

    return () => {
      state.running = false;
      cancelAnimationFrame(state.rafId);
      st.kill();
    };
  }, [pathD]);

  return (
    <section
      ref={sectionRef}
      className="w-full px-4 sm:px-8 xl:px-12 py-16 lg:py-24 relative bg-[#F9FAFC] border-t border-border-subtle overflow-visible"
      id="section-cloud"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Section Header with Expanded Text & SVG Illustration on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white p-6 sm:p-10 rounded-2xl border border-border-subtle shadow-[0_6px_30px_rgba(0,0,0,0.03)]">
          {/* Left Column: Expanded Technical Narrative & Tenets */}
          <div className="lg:col-span-7 flex flex-col items-start gap-4">
            <h2 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1C1C1C] tracking-tight leading-tight">
              Project Execution &amp; Delivery
            </h2>

            <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
              From initial scoping to full production launch, our delivery process follows 12 structured milestones to ensure quality, transparency, and timely delivery.
            </p>

            {/* Quick Framework Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full pt-1">
              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">verified</span>
                  <span className="font-mono text-[11px] font-bold">CLEAR SCOPING</span>
                </div>
                <span className="text-xs text-text-muted">Dedicated project lead and centralized planning.</span>
              </div>

              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">insights</span>
                  <span className="font-mono text-[11px] font-bold">REAL-TIME TRACKING</span>
                </div>
                <span className="text-xs text-text-muted">Scheduled sprint reviews and progress updates.</span>
              </div>

              <div className="bg-[#F8F9FB] border border-border-subtle rounded-xl p-3 flex flex-col gap-1">
                <div className="flex items-center gap-1.5 text-primary">
                  <span className="material-symbols-outlined text-[18px]">security</span>
                  <span className="font-mono text-[11px] font-bold">SECURITY &amp; QUALITY</span>
                </div>
                <span className="text-xs text-text-muted">High security standards and complete confidentiality.</span>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-primary font-mono text-xs font-bold">
              <span className="material-symbols-outlined text-[18px] animate-bounce">arrow_downward</span>
              <span>Scroll down to follow each project milestone step-by-step.</span>
            </div>
          </div>

          {/* Right Column: SVG Illustration Card with Live Telemetry Badges */}
          <div className="lg:col-span-5 flex items-center justify-center relative">
            <div className="relative w-full max-w-[380px] bg-gradient-to-br from-[#FFF0F2] via-white to-surface-dim p-6 rounded-2xl border border-primary/20 shadow-sm flex flex-col items-center justify-center overflow-hidden group">
              {/* Background Accent Glow */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-primary/10 rounded-full blur-2xl pointer-events-none"></div>

              {/* Connected World SVG Image */}
              <img
                src={ConnectedWorldSvg}
                alt="Qcodes Project Execution & Connected Global Delivery"
                className="w-full h-auto max-h-[230px] object-contain group-hover:scale-105 transition-transform duration-500 relative z-10"
              />

              {/* Floating SLA Badge */}
              <div className="mt-4 w-full flex items-center justify-between gap-2 px-3 py-2 bg-white/90 backdrop-blur-sm border border-border-subtle rounded-xl shadow-xs relative z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] shadow-[0_0_8px_#0ae448]"></span>
                  <span className="font-mono text-[11px] text-text-main font-bold">MISSION SLA: 99.8%</span>
                </div>
                <span className="font-mono text-[11px] text-primary font-extrabold">12 MILESTONES</span>
              </div>
            </div>
          </div>
        </div>



        {/* ═══ VERTICAL ZIG-ZAG ROCKET FLIGHT TRAJECTORY TRACK ═══ */}
        <div ref={trackRef} className="relative w-full py-12 overflow-visible">
          
          {/* Full-Height Smooth Zig-Zag SVG Flight Conduits */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="zigzagPlasmaGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#E21E4C" />
                <stop offset="50%" stopColor="#FF3366" />
                <stop offset="100%" stopColor="#A91639" />
              </linearGradient>
            </defs>

            {/* Base Dashed Guide Line */}
            {pathD && (
              <path
                ref={guidePathRef}
                d={pathD}
                fill="none"
                stroke="#E5E7EB"
                strokeWidth="2.5"
                strokeDasharray="6 6"
                strokeLinecap="round"
              />
            )}

            {/* Active Filled Plasma Beam Line */}
            {pathD && (
              <path
                ref={svgPathRef}
                d={pathD}
                fill="none"
                stroke="url(#zigzagPlasmaGrad)"
                strokeWidth="4"
                strokeLinecap="round"
                style={{ willChange: 'stroke-dashoffset' }}
              />
            )}
          </svg>

          {/* Flying Apollo Multi-Stage Rocket (Banking and landing on Card 12) */}
          <div
            ref={rocketTrackerRef}
            className="absolute top-0 left-0 z-20 pointer-events-none origin-center overflow-visible will-change-transform"
            style={{
              width: '96px',
              height: '154px',
              backfaceVisibility: 'hidden',
              contain: 'layout style',
            }}
          >
            {/* Apollo Saturn V Spacecraft */}
            <svg
              width="96"
              height="154"
              viewBox="0 0 100 180"
              fill="none"
              overflow="visible"
              style={{ overflow: 'visible' }}
              xmlns="http://www.w3.org/2000/svg"
              className="overflow-visible"
            >
              <defs>
                {/* Metallic Shaders & Gradients */}
                <linearGradient id="apolloHullWhite" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="40%" stopColor="#F8FAFC" />
                  <stop offset="75%" stopColor="#E2E8F0" />
                  <stop offset="100%" stopColor="#CBD5E1" />
                </linearGradient>

                <linearGradient id="apolloCrimson" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3366" />
                  <stop offset="50%" stopColor="#E21E4C" />
                  <stop offset="100%" stopColor="#A91639" />
                </linearGradient>

                <linearGradient id="apolloDark" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E293B" />
                  <stop offset="50%" stopColor="#0F172A" />
                  <stop offset="100%" stopColor="#020617" />
                </linearGradient>

                <linearGradient id="apolloNozzle" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#475569" />
                  <stop offset="50%" stopColor="#1E293B" />
                  <stop offset="100%" stopColor="#0F172A" />
                </linearGradient>

                {/* Atmospheric Heavy Rocket Flame (Orange/Yellow/Crimson) */}
                <linearGradient id="apolloPlumeFlame" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFEA00" />
                  <stop offset="35%" stopColor="#FF6B00" />
                  <stop offset="70%" stopColor="#E21E4C" />
                  <stop offset="100%" stopColor="#A91639" stopOpacity="0" />
                </linearGradient>

                {/* Sovereign Vacuum Space Ion Flame (Cyan/Violet Plasma) */}
                <linearGradient id="apolloOrbitalPlume" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" />
                  <stop offset="30%" stopColor="#00E5FF" />
                  <stop offset="70%" stopColor="#7C3AED" />
                  <stop offset="100%" stopColor="#E21E4C" stopOpacity="0" />
                </linearGradient>


              </defs>

              {/* ═══ ORBITAL VACUUM SPACE ENGINE PLUME ═══ */}
              <g ref={orbitalFlameRef} opacity="0" transform="rotate(180 50 148)">
                <path
                  d="M 43 148 Q 50 85 50 70 Q 50 85 57 148 Z"
                  fill="url(#apolloOrbitalPlume)"
                  opacity="0.95"
                />
                <ellipse cx="50" cy="120" rx="2.5" ry="12" fill="#FFFFFF" opacity="0.9" />
                <ellipse cx="50" cy="100" rx="1.5" ry="6" fill="#00E5FF" opacity="0.8" />
              </g>

              {/* ═══ SEPARATION PUFF FX ═══ */}
              <g ref={sepFxRef} opacity="0" pointerEvents="none">
                <circle cx="21" cy="54" r="18" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.7" />
                <circle cx="21" cy="54" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                <circle cx="79" cy="54" r="18" fill="none" stroke="#FF6B00" strokeWidth="2" opacity="0.7" />
                <circle cx="79" cy="54" r="28" fill="none" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
                <ellipse cx="50" cy="66" rx="24" ry="10" fill="none" stroke="#E21E4C" strokeWidth="2" opacity="0.6" />
              </g>

              {/* ═══ LEFT SIDE STRAP-ON BOOSTER GROUP ═══ */}
              <g ref={leftBoosterRef} id="leftBoosterAssembly">
                <g transform="rotate(180 21 14)">
                  <path
                    d="M 16 14 Q 21 -16 21 -24 Q 21 -16 26 14 Z"
                    fill="url(#apolloPlumeFlame)"
                    opacity="0.9"
                  />
                  <path
                    d="M 18 14 Q 21 -8 21 -14 Q 21 -8 24 14 Z"
                    fill="#FFFFFF"
                  />
                </g>
                <rect x="25" y="38" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="25" y="68" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="14" y="24" width="14" height="60" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="14" y="24" width="14" height="8" fill="url(#apolloCrimson)" />
                <rect x="14" y="52" width="7" height="16" fill="url(#apolloDark)" />
                <polygon points="14,84 28,84 21,98" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="15,24 27,24 25,14 17,14" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
              </g>

              {/* ═══ RIGHT SIDE STRAP-ON BOOSTER GROUP ═══ */}
              <g ref={rightBoosterRef} id="rightBoosterAssembly">
                <g transform="rotate(180 79 14)">
                  <path
                    d="M 74 14 Q 79 -16 79 -24 Q 79 -16 84 14 Z"
                    fill="url(#apolloPlumeFlame)"
                    opacity="0.9"
                  />
                  <path
                    d="M 76 14 Q 79 -8 79 -14 Q 79 -8 82 14 Z"
                    fill="#FFFFFF"
                  />
                </g>
                <rect x="69" y="38" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="69" y="68" width="6" height="3" fill="url(#apolloDark)" />
                <rect x="72" y="24" width="14" height="60" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="72" y="24" width="14" height="8" fill="url(#apolloCrimson)" />
                <rect x="79" y="52" width="7" height="16" fill="url(#apolloDark)" />
                <polygon points="72,84 86,84 79,98" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="73,24 85,24 83,14 75,14" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
              </g>

              {/* ═══ STAGE 1 (S-IC) CORE BOOSTER & ATMOSPHERIC ENGINES ═══ */}
              <g ref={stage1Ref} id="stage1BoosterBase">
                <g ref={atmosphericFlameRef} transform="rotate(180 50 20)">
                  <path
                    d="M 36 20 Q 50 -34 50 -48 Q 50 -34 64 20 Z"
                    fill="url(#apolloPlumeFlame)"
                    opacity="0.95"
                  />
                  <path
                    d="M 42 20 Q 50 -20 50 -30 Q 50 -20 58 20 Z"
                    fill="#FFFFFF"
                  />
                  <ellipse cx="50" cy="-8" rx="3.5" ry="7" fill="#FFEA00" opacity="0.9" />
                </g>
                <path d="M 30 52 L 10 30 L 12 20 L 30 32 Z" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <path d="M 70 52 L 90 30 L 88 20 L 70 32 Z" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <polygon points="33,20 42,20 40,10 35,10" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <polygon points="45,20 55,20 54,8 46,8" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <polygon points="58,20 67,20 65,10 60,10" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <rect x="30" y="20" width="40" height="46" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="30" y="20" width="10" height="24" fill="url(#apolloDark)" />
                <rect x="50" y="20" width="10" height="24" fill="url(#apolloDark)" />
                <rect x="40" y="20" width="10" height="6" fill="url(#apolloCrimson)" />
                <rect x="60" y="20" width="10" height="6" fill="url(#apolloCrimson)" />
                <line x1="30" y1="20" x2="30" y2="66" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="70" y1="20" x2="70" y2="66" stroke="#0F172A" strokeWidth="1.5" />
                <line x1="49.5" y1="20" x2="49.5" y2="66" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="3 2" />
                <rect x="29" y="66" width="42" height="4" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
              </g>

              {/* ═══ UPPER STAGE 2 (S-II) & ORBITAL SPACECRAFT ═══ */}
              <g id="apolloOrbitalSpacecraft">
                <rect x="31" y="70" width="38" height="34" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="31" y="80" width="10" height="14" fill="url(#apolloDark)" />
                <rect x="59" y="80" width="10" height="14" fill="url(#apolloDark)" />
                <rect x="41" y="85" width="18" height="4" fill="url(#apolloCrimson)" />
                <polygon points="31,104 69,104 66,114 34,114" fill="url(#apolloDark)" stroke="#0F172A" strokeWidth="1" />
                <rect x="34" y="114" width="32" height="22" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <rect x="34" y="130" width="16" height="6" fill="url(#apolloCrimson)" />
                <rect x="50" y="130" width="16" height="6" fill="url(#apolloDark)" />
                <polygon points="34,136 66,136 60,150 40,150" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1.2" />
                <polygon points="46,148 54,148 53,142 47,142" fill="url(#apolloNozzle)" stroke="#0F172A" strokeWidth="0.8" />
                <rect x="40" y="150" width="20" height="10" fill="url(#apolloHullWhite)" stroke="#0F172A" strokeWidth="1" />
                <rect x="44" y="150" width="12" height="3" fill="url(#apolloCrimson)" />
                <polygon points="40,160 60,160 52,169 48,169" fill="url(#apolloCrimson)" stroke="#0F172A" strokeWidth="1" />
                <circle cx="50" cy="164" r="2" fill="#00C9FF" stroke="#FFFFFF" strokeWidth="0.6" />
              </g>

              {/* ═══ LAUNCH ESCAPE SYSTEM (LES TOWER) ═══ */}
              <g ref={lesTowerRef} id="lesEscapeTower">
                <rect x="47" y="169" width="6" height="2" fill="url(#apolloDark)" />
                <line x1="48" y1="171" x2="49.5" y2="176" stroke="#64748B" strokeWidth="1" />
                <line x1="52" y1="171" x2="50.5" y2="176" stroke="#64748B" strokeWidth="1" />
                <line x1="48" y1="174" x2="52" y2="174" stroke="#64748B" strokeWidth="0.8" />
                <rect x="48.5" y="176" width="3" height="4" fill="url(#apolloCrimson)" />
                <line x1="50" y1="180" x2="50" y2="187" stroke="#0F172A" strokeWidth="1.5" strokeLinecap="round" />
              </g>
            </svg>
          </div>

          {/* 12-Step Alternating Interactive Timeline Grid */}
          <div className="flex flex-col gap-14 lg:gap-20">
            {projectSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              const isLast = index === projectSteps.length - 1;

              return (
                <div
                  key={step.num}
                  className={`relative flex items-center w-full ${
                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                  }`}
                >
                  {/* Invisible Anchor Point for SVG Zig-Zag Path Calculation */}
                  <div
                    className={`timeline-anchor-point absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 pointer-events-none ${
                      isEven ? 'left-6 lg:left-[46%]' : 'left-6 lg:left-[54%]'
                    }`}
                  ></div>

                  {/* Milestone Node on the Card Border */}
                  <div
                    className="timeline-track-node absolute left-6 lg:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full border-4 border-white shadow-md z-10 transition-transform"
                    style={{ backgroundColor: index === 0 ? '#E21E4C' : '#E5E7EB' }}
                  ></div>

                  {/* Step Card */}
                  <div
                    ref={isLast ? landingCardRef : undefined}
                    className={`timeline-step-card w-full lg:w-[46%] pl-12 sm:pl-14 lg:pl-8 p-6 sm:p-7 rounded-2xl border bg-white transition-all duration-300 flex flex-col gap-4 group cursor-pointer relative ${
                      isLast
                        ? 'border-primary/40 shadow-lg shadow-red-500/10'
                        : 'border-border-subtle shadow-sm hover:shadow-xl hover:border-primary/30 hover:-translate-y-1'
                    }`}
                  >
                    {/* Card Header: Prominent Enlarged Dark Pink Number Circle + Category Badge + Icon */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3.5">
                        <span
                          ref={isLast ? landingCircleRef : undefined}
                          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full text-white flex items-center justify-center font-mono text-xl sm:text-2xl font-black tracking-tight shadow-lg shadow-red-500/30 border-2 border-white/30 group-hover:scale-110 transition-all shrink-0 bg-gradient-to-br from-primary via-primary-dark to-[#A91639]"
                        >
                          {step.num}
                        </span>
                        <span
                          ref={isLast ? landingBadgeRef : undefined}
                          className="font-mono text-xs font-bold tracking-wider px-3.5 py-1.5 rounded-full border bg-primary/10 text-primary border-primary/20"
                        >
                          {step.category}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] text-text-muted hidden sm:inline">
                          {step.milestone}
                        </span>
                        <span
                          ref={isLast ? landingIconRef : undefined}
                          className="material-symbols-outlined text-[24px] text-primary group-hover:scale-110 transition-transform"
                        >
                          {step.icon}
                        </span>
                      </div>
                    </div>

                    {/* Step Title & Description */}
                    <div>
                      <h4 className="font-headline text-lg sm:text-xl font-extrabold text-[#11141A] group-hover:text-primary transition-colors leading-snug">
                        {step.title}
                      </h4>
                      <p className="font-sans text-sm text-text-muted leading-relaxed mt-2">
                        {step.desc}
                      </p>
                    </div>

                    {/* Special Landing Base Status for Card 12 — always rendered, toggled via ref */}
                    {isLast && (
                      <div
                        ref={landingIndicatorRef}
                        className="flex items-center gap-2 py-2 px-3 bg-[#EBFDF0] border border-[#0ae448]/30 rounded-xl transition-opacity duration-300"
                        style={{ opacity: 0, visibility: 'hidden' }}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#0ae448] animate-ping"></span>
                        <span className="font-mono text-xs font-bold text-[#05ba39]">
                          MISSION SUCCESSFUL // SAFE TOUCHDOWN AT COMMAND BASE
                        </span>
                      </div>
                    )}

                    {/* Footer Milestone Pill */}
                    <div className="mt-auto pt-3.5 border-t border-border-subtle flex items-center justify-between font-mono text-xs">
                      <span className="text-text-muted font-medium">CORE VALUE</span>
                      <span
                        ref={isLast ? landingFooterRef : undefined}
                        className="text-primary font-bold"
                      >
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
