import React, { useState, useEffect } from 'react';

const NOTIFICATION_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ ', color: 'text-[#f8fafc]' },
      { text: 'useState ', color: 'text-[#38bdf8]' },
      { text: '} ', color: 'text-[#f8fafc]' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'react'", color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ ', color: 'text-[#f8fafc]' },
      { text: 'Switch ', color: 'text-[#38bdf8]' },
      { text: '} ', color: 'text-[#f8fafc]' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@headlessui/react'", color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-0',
    spacer: true,
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'function ', color: 'text-[#60a5fa]' },
      { text: 'Example', color: 'text-[#fcd34d]' },
      { text: '() {', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: '[enabled, setEnabled] = ', color: 'text-[#f8fafc]' },
      { text: 'useState', color: 'text-[#38bdf8]' },
      { text: '(', color: 'text-[#f8fafc]' },
      { text: 'true', color: 'text-[#f472b6]' },
      { text: ')', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-0',
    spacer: true,
  },
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
      { text: '<', color: 'text-[#f8fafc]' },
      { text: 'form ', color: 'text-[#60a5fa]' },
      { text: 'action', color: 'text-[#38bdf8]' },
      { text: '=', color: 'text-[#f8fafc]' },
      { text: '"/notification-settings" ', color: 'text-[#34d399]' },
      { text: 'method', color: 'text-[#38bdf8]' },
      { text: '=', color: 'text-[#f8fafc]' },
      { text: '"post"', color: 'text-[#34d399]' },
      { text: '>', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<', color: 'text-[#f8fafc]' },
      { text: 'Switch ', color: 'text-[#60a5fa]' },
      { text: 'checked', color: 'text-[#38bdf8]' },
      { text: '={', color: 'text-[#f8fafc]' },
      { text: 'enabled', color: 'text-[#f8fafc]' },
      { text: '} ', color: 'text-[#f8fafc]' },
      { text: 'onChange', color: 'text-[#38bdf8]' },
      { text: '={', color: 'text-[#f8fafc]' },
      { text: 'setEnabled', color: 'text-[#f8fafc]' },
      { text: '} ', color: 'text-[#f8fafc]' },
      { text: 'name', color: 'text-[#38bdf8]' },
      { text: '=', color: 'text-[#f8fafc]' },
      { text: '"not', color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-16',
    tokens: [
      { text: '{/* ... */}', color: 'text-slate-500 italic' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '</', color: 'text-[#f8fafc]' },
      { text: 'Switch', color: 'text-[#60a5fa]' },
      { text: '>', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<', color: 'text-[#f8fafc]' },
      { text: 'button', color: 'text-[#60a5fa]' },
      { text: '>', color: 'text-[#f8fafc]' },
      { text: 'Submit', color: 'text-white font-medium' },
      { text: '</', color: 'text-[#f8fafc]' },
      { text: 'button', color: 'text-[#60a5fa]' },
      { text: '>', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '</', color: 'text-[#f8fafc]' },
      { text: 'form', color: 'text-[#60a5fa]' },
      { text: '>', color: 'text-[#f8fafc]' },
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

const APP_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ ', color: 'text-[#f8fafc]' },
      { text: 'NotificationSetting ', color: 'text-[#38bdf8]' },
      { text: '} ', color: 'text-[#f8fafc]' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'./NotificationSetting'", color: 'text-[#34d399]' },
    ],
  },
  {
    indent: 'pl-0',
    spacer: true,
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export default ', color: 'text-[#c084fc]' },
      { text: 'function ', color: 'text-[#60a5fa]' },
      { text: 'App', color: 'text-[#fcd34d]' },
      { text: '() {', color: 'text-[#f8fafc]' },
    ],
  },
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
      { text: '<', color: 'text-[#f8fafc]' },
      { text: 'main ', color: 'text-[#60a5fa]' },
      { text: 'className', color: 'text-[#38bdf8]' },
      { text: '=', color: 'text-[#f8fafc]' },
      { text: '"min-h-screen bg-slate-900 text-white p-8"', color: 'text-[#34d399]' },
      { text: '>', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<', color: 'text-[#f8fafc]' },
      { text: 'NotificationSetting ', color: 'text-[#60a5fa]' },
      { text: '/>', color: 'text-[#f8fafc]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '</', color: 'text-[#f8fafc]' },
      { text: 'main', color: 'text-[#60a5fa]' },
      { text: '>', color: 'text-[#f8fafc]' },
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

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('NotificationSetting.jsx');
  const [copied, setCopied] = useState(false);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const initialTotalChars = getTotalLength(NOTIFICATION_LINES);

  // Single-run typing animation on initial page load / browser reload only
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

  const currentLines = activeTab === 'NotificationSetting.jsx' ? NOTIFICATION_LINES : APP_LINES;
  const currentTotal = getTotalLength(currentLines);
  const effectiveCharCount = isDoneTyping || activeTab !== 'NotificationSetting.jsx' ? currentTotal : charIndex;

  const notificationCode = `import { useState } from 'react'
import { Switch } from '@headlessui/react'

function Example() {
  const [enabled, setEnabled] = useState(true)

  return (
    <form action="/notification-settings" method="post">
      <Switch checked={enabled} onChange={setEnabled} name="not
        {/* ... */}
      </Switch>
      <button>Submit</button>
    </form>
  )
}`;

  const appCode = `import { NotificationSetting } from './NotificationSetting'

export default function App() {
  return (
    <main className="min-h-screen bg-slate-900 text-white p-8">
      <header className="max-w-4xl mx-auto mb-8">
        <h1 className="text-3xl font-bold">Qcodes Infotech Platform</h1>
        <p className="text-slate-400 text-sm mt-1">Enterprise digital solutions</p>
      </header>
      <div className="max-w-4xl mx-auto bg-slate-800/80 p-6 rounded-2xl border border-red-900/30">
        <NotificationSetting />
      </div>
    </main>
  )
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(activeTab === 'NotificationSetting.jsx' ? notificationCode : appCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Render tokens character by character according to effectiveCharCount
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
    <section className="relative w-full overflow-hidden bg-[#F8F9FA] text-text-main border-b border-border-subtle">
      {/* Ambient Qcodes Energy Backlights */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-red-100/60 via-pink-50/50 to-transparent blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-amber-50/50 blur-[130px] pointer-events-none rounded-full" />

      <div className="relative w-full pl-4 sm:pl-8 lg:pl-12 xl:pl-16 pr-0 pt-8 sm:pt-12 pb-14 sm:pb-20">
        {/* Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          {/* Left Column: Heading & Actions (5 Cols on lg/xl) */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col items-start gap-6 z-10 max-w-xl pr-2 sm:pr-4">
            {/* Main Headline in Single Line */}
            <h1 className="text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] 2xl:text-[42px] font-extrabold tracking-tight text-text-main leading-tight font-headline whitespace-nowrap">
              Why{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3366] via-primary to-primary-dark">
                QCODES INFOTECH?
              </span>
            </h1>

            {/* Description Paragraph */}
            <p className="font-sans text-lg sm:text-xl lg:text-[21px] text-text-muted leading-relaxed max-w-xl">
              We offer web &amp; mobile web development, digital marketing, blockchain, IoT &amp; UI/UX design, we provide process-driven digital solutions for clients in the global marketplace.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://qcodesinfotech.com/#how-it-work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-primary hover:bg-primary-dark text-white font-headline text-sm font-bold shadow-[0_4px_16px_rgba(226,30,76,0.35)] hover:shadow-[0_6px_24px_rgba(226,30,76,0.55)] transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
              </a>

              <a
                href="https://qcodesinfotech.com/aboutus#get-started"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white border border-border-strong text-text-main font-headline text-sm font-bold hover:bg-surface-dim shadow-xs transition-all duration-300"
              >
                <span>How It Work</span>
              </a>
            </div>
          </div>

          {/* Right Column: Pink/Crimson Curved Backdrop + Code Snippet Window (Flush Touching Right Viewport) */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex justify-end mr-0 pr-0">
            {/* Outer Pink/Crimson Curved Container Flush to the Right Viewport Edge (Wider Size) */}
            <div className="relative w-full max-w-[660px] xl:max-w-[760px] 2xl:max-w-[850px] bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] rounded-l-[3.25rem] rounded-r-none pl-5 sm:pl-7 xl:pl-8 pr-0 sm:pr-0 lg:pr-0 xl:pr-0 2xl:pr-0 pt-6 sm:pt-8 pb-6 sm:pb-8 mr-0 shadow-2xl shadow-red-900/30 overflow-hidden">
              {/* Subtle ambient light gradient inside pink backdrop */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/15 blur-3xl pointer-events-none rounded-full" />

              {/* Inner Code Editor Terminal Window (No Right Margin, Edge to Edge on the Right) */}
              <div className="relative w-full bg-[#0B0F19] rounded-l-2xl rounded-r-none border-t border-l border-b border-r-0 border-red-900/30 shadow-2xl overflow-hidden font-mono mr-0">
                {/* Editor Tabs Bar */}
                <div className="flex items-center justify-between bg-[#111827]/95 border-b border-slate-800/90 pl-3.5 pr-3 pt-2.5">
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setActiveTab('NotificationSetting.jsx')}
                      className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all ${
                        activeTab === 'NotificationSetting.jsx'
                          ? 'bg-[#0B0F19] text-white border-t border-l border-r border-slate-800 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      NotificationSetting.jsx
                    </button>
                    <button
                      onClick={() => setActiveTab('App.jsx')}
                      className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-t-lg transition-all ${
                        activeTab === 'App.jsx'
                          ? 'bg-[#0B0F19] text-white border-t border-l border-r border-slate-800 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                      }`}
                    >
                      App.jsx
                    </button>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-colors mb-1 mr-2.5"
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
        </div>
      </div>
    </section>
  );
}
