import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const IDEA_LAUNCH_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ QcodesEngine, LaunchPipeline } ', color: 'text-[#f8fafc]' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/core'", color: 'text-[#34d399]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export async function ', color: 'text-[#c084fc]' },
      { text: 'buildYourProduct', color: 'text-[#fcd34d]' },
      { text: '(idea: ProjectBlueprint) {', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: 'product = ', color: 'text-[#f8fafc]' },
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'QcodesEngine', color: 'text-[#38bdf8]' },
      { text: '.', color: 'text-[#f8fafc]' },
      { text: 'architect', color: 'text-[#60a5fa]' },
      { text: '({', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'framework: ', color: 'text-slate-300' },
      { text: "'React 19 & Next.js SSR'", color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'backend: ', color: 'text-slate-300' },
      { text: "'High-Concurrency Microservices'", color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'database: ', color: 'text-slate-300' },
      { text: "'Multi-Region Distributed Mesh'", color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'security: ', color: 'text-slate-300' },
      { text: "'SOC2 & End-to-End Encryption'", color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '})', color: 'text-[#f8fafc]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: 'LaunchPipeline', color: 'text-[#38bdf8]' },
      { text: '.', color: 'text-[#f8fafc]' },
      { text: 'deployToProduction', color: 'text-[#60a5fa]' },
      { text: '({', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'status: ', color: 'text-slate-300' },
      { text: "'Ready for Global Scale 🚀'", color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'performance: ', color: 'text-slate-300' },
      { text: "'Sub-100ms Hydration'", color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '})', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-[#f8fafc]' },
    ],
  },
];

const FULLSTACK_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ createDigitalExperience } ', color: 'text-[#f8fafc]' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/solutions'", color: 'text-[#34d399]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export default function ', color: 'text-[#c084fc]' },
      { text: 'EnterpriseApp', color: 'text-[#fcd34d]' },
      { text: '() {', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: '{ isLive } = ', color: 'text-[#f8fafc]' },
      { text: 'createDigitalExperience', color: 'text-[#38bdf8]' },
      { text: '({', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'design: ', color: 'text-slate-300' },
      { text: '"Tailored UI/UX & Responsive Flow"', color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'analytics: ', color: 'text-slate-300' },
      { text: '"Real-time AI Business Telemetry"', color: 'text-[#34d399]' },
      { text: ',', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'availability: ', color: 'text-slate-300' },
      { text: '"99.99% Multi-Cloud SLA"', color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '})', color: 'text-[#f8fafc]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: '(', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '<section ', color: 'text-[#60a5fa]' },
      { text: 'className', color: 'text-[#38bdf8]' },
      { text: '=', color: 'text-[#f8fafc]' },
      { text: '"product-launch-hub"', color: 'text-[#34d399]' },
      { text: '>', color: 'text-[#60a5fa]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<h1>', color: 'text-[#60a5fa]' },
      { text: 'Turned Into Reality', color: 'text-white' },
      { text: '</h1>', color: 'text-[#60a5fa]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<p>', color: 'text-[#60a5fa]' },
      { text: 'From Concept to Global Marketplace', color: 'text-white' },
      { text: '</p>', color: 'text-[#60a5fa]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '</section>', color: 'text-[#60a5fa]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: ')', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-[#f8fafc]' },
    ],
  },
];

const getTotalLength = (lines) => {
  return lines.reduce((total, line) => {
    if (line.spacer) return total + 1;
    return total + (line.tokens ? line.tokens.reduce((acc, t) => acc + t.text.length, 0) : 0);
  }, 0);
};

export default function IdeaToRealitySection() {
  const [activeTab, setActiveTab] = useState('IdeaToLaunch.ts');
  const [copied, setCopied] = useState(false);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const initialTotalChars = getTotalLength(IDEA_LAUNCH_LINES);

  // Single-run fast typing animation on initial page load / browser reload only
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCharIndex((prev) => {
        if (prev < initialTotalChars) {
          return prev + 1;
        } else {
          clearInterval(intervalId);
          setIsDoneTyping(true);
          return prev;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [initialTotalChars]);

  const ideaCode = `import { QcodesEngine, LaunchPipeline } from '@qcodes/core'

export async function buildYourProduct(idea: ProjectBlueprint) {
  const product = await QcodesEngine.architect({
    framework: 'React 19 & Next.js SSR',
    backend: 'High-Concurrency Microservices',
    database: 'Multi-Region Distributed Mesh',
    security: 'SOC2 & End-to-End Encryption'
  })

  return LaunchPipeline.deployToProduction({
    status: 'Ready for Global Scale 🚀',
    performance: 'Sub-100ms Hydration'
  })
}`;

  const fullstackCode = `import { createDigitalExperience } from '@qcodes/solutions'

export default function EnterpriseApp() {
  const { isLive } = createDigitalExperience({
    design: 'Tailored UI/UX & Responsive Flow',
    analytics: 'Real-time AI Business Telemetry',
    availability: '99.99% Multi-Cloud SLA'
  })

  return (
    <section className="product-launch-hub">
      <h1>Turned Into Reality</h1>
      <p>From Concept to Global Marketplace</p>
    </section>
  )
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'IdeaToLaunch.ts' ? ideaCode : fullstackCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const currentLines = activeTab === 'IdeaToLaunch.ts' ? IDEA_LAUNCH_LINES : FULLSTACK_LINES;
  const currentTotal = getTotalLength(currentLines);
  const effectiveCharCount = isDoneTyping || activeTab !== 'IdeaToLaunch.ts' ? currentTotal : charIndex;

  let remaining = effectiveCharCount;
  let cursorPlaced = false;

  const renderedLines = currentLines.map((line, lineIdx) => {
    if (line.spacer) {
      if (remaining <= 0 && cursorPlaced) return null;
      if (remaining > 0) remaining -= 1;
      return <div key={lineIdx} className="h-4" />;
    }

    const tokenElements = [];
    for (let tIdx = 0; tIdx < line.tokens.length; tIdx++) {
      const token = line.tokens[tIdx];
      const len = token.text.length;

      if (remaining <= 0) {
        if (!cursorPlaced) {
          tokenElements.push(
            <span
              key="cursor"
              className="inline-block w-[2px] h-[1.15em] bg-[#FF4D79] ml-[1px] align-middle animate-pulse shadow-[0_0_8px_#FF4D79]"
            />
          );
          cursorPlaced = true;
        }
        break;
      }

      if (remaining >= len) {
        tokenElements.push(
          <span key={tIdx} className={token.color}>
            {token.text}
          </span>
        );
        remaining -= len;
      } else {
        const slice = token.text.slice(0, remaining);
        tokenElements.push(
          <span key={tIdx} className={token.color}>
            {slice}
          </span>
        );
        tokenElements.push(
          <span
            key="cursor"
            className="inline-block w-[2px] h-[1.15em] bg-[#FF4D79] ml-[1px] align-middle animate-pulse shadow-[0_0_8px_#FF4D79]"
          />
        );
        cursorPlaced = true;
        remaining = 0;
        break;
      }
    }

    if (remaining === 0 && !cursorPlaced && tokenElements.length > 0) {
      tokenElements.push(
        <span
          key="cursor"
          className="inline-block w-[2px] h-[1.15em] bg-[#FF4D79] ml-[1px] align-middle animate-pulse shadow-[0_0_8px_#FF4D79]"
        />
      );
      cursorPlaced = true;
    }

    if (tokenElements.length === 0 && cursorPlaced) {
      return null;
    }

    return (
      <div key={lineIdx} className={line.indent}>
        {tokenElements}
      </div>
    );
  });

  return (
    <section className="relative w-full overflow-hidden bg-white text-text-main border-b border-border-subtle py-12 sm:py-16 lg:py-20">
      {/* Ambient Qcodes Energy Backlights */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-red-100/50 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-[650px] h-[450px] bg-gradient-to-tr from-red-100/60 via-pink-50/50 to-transparent blur-[140px] pointer-events-none rounded-full" />

      {/* Main Container - note pl-0 so left curved container hits the left-most viewport edge */}
      <div className="relative w-full pl-0 pr-4 sm:pr-8 lg:pr-12 xl:pr-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* LEFT COLUMN: Pink/Crimson Curved Backdrop + Code Snippet Window (Flush Touching Left Viewport) */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex justify-start ml-0 pl-0">
            {/* Outer Pink/Crimson Curved Container Flush to the Left Viewport Edge */}
            <div className="relative w-full max-w-[660px] xl:max-w-[760px] 2xl:max-w-[850px] bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] rounded-r-[3.25rem] rounded-l-none pr-5 sm:pr-7 xl:pr-8 pl-0 pt-6 sm:pt-8 pb-6 sm:pb-8 ml-0 shadow-2xl shadow-red-900/30 overflow-hidden">
              {/* Subtle ambient light gradient inside pink backdrop */}
              <div className="absolute top-0 left-0 w-80 h-80 bg-white/15 blur-3xl pointer-events-none rounded-full" />

              {/* Inner Code Editor Terminal Window (No Left Margin, Edge to Edge on the Left) */}
              <div className="relative w-full bg-[#0B0F19] rounded-r-2xl rounded-l-none border-t border-r border-b border-l-0 border-red-900/30 shadow-2xl overflow-hidden font-mono ml-0">
                {/* Editor Tabs Bar */}
                <div className="flex items-center justify-between bg-[#111827]/95 border-b border-slate-800/90 pl-3.5 pr-3 pt-2.5">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('IdeaToLaunch.ts')}
                      className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer ${
                        activeTab === 'IdeaToLaunch.ts'
                          ? 'bg-[#0B0F19] text-white border-t border-l border-r border-slate-800 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      IdeaToLaunch.ts
                    </button>
                    <button
                      onClick={() => setActiveTab('FullStackEngine.jsx')}
                      className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all cursor-pointer ${
                        activeTab === 'FullStackEngine.jsx'
                          ? 'bg-[#0B0F19] text-white border-t border-l border-r border-slate-800 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      FullStackEngine.jsx
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-colors mb-1 mr-2.5 cursor-pointer"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[14px] text-[#FF4D79]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Code Body with High-Fidelity Syntax Highlighting & Typing Animation */}
                <div className="p-4 sm:p-6 xl:p-7 text-[13px] sm:text-[14px] leading-relaxed overflow-x-auto select-text text-slate-300 min-h-[380px] sm:min-h-[440px]">
                  <div className="space-y-1 font-mono">
                    {renderedLines}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: About the section with Headline & Actions */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-6 z-10 max-w-xl pl-4 sm:pl-6 lg:pl-4">
            
            {/* Main Section Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] 2xl:text-[40px] font-extrabold tracking-tight text-text-main leading-tight font-headline">
              Have an Idea?{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-primary-dark block mt-1">
                Let’s Make It Real.
              </span>
            </h2>

            {/* Narrative Paragraph */}
            <p className="font-sans text-base sm:text-lg lg:text-xl text-text-muted leading-relaxed max-w-xl">
              Whether you are architecting a breakthrough startup MVP or transforming mission-critical enterprise systems, we turn complex blueprints into high-performance web platforms, native mobile apps, and scalable cloud architectures.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold shadow-[0_4px_16px_rgba(226,30,76,0.35)] hover:shadow-[0_6px_24px_rgba(226,30,76,0.55)] transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Discuss Your Project</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>

              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm font-bold hover:bg-surface-dim shadow-xs transition-all duration-300 cursor-pointer"
              >
                <span>View Solutions</span>
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
