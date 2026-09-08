import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import '../../styles/ai-agent-modal.css';

export default function AiAgentModal() {
  const [isOpenState, setIsOpenState] = useState(false);
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const containerRef = useRef(null);
  const launcherRef = useRef(null);
  const inputRef = useRef(null);
  const tlRef = useRef(null);
  const enterEndTimeRef = useRef(0);
  const isOpenRef = useRef(false);

  const chips = [
    { label: 'Web & Mobile Apps', prompt: 'Web & Mobile App Development', icon: 'fa-laptop-code' },
    { label: 'Custom Software', prompt: 'Custom Software Solutions', icon: 'fa-cubes' },
    { label: 'Cloud & DevOps', prompt: 'Cloud & Infrastructure Services', icon: 'fa-cloud' },
    { label: 'Project Estimate', prompt: 'Estimate Project Timeline & Scope', icon: 'fa-calculator' },
  ];

  // Initialize GSAP Single Timeline Enter & Falling Physics Exit (Animations Preserved Exactly)
  useEffect(() => {
    const ctx = gsap.context(() => {
      const navEl = containerRef.current;
      if (!navEl) return;

      // Initial state
      gsap.set(navEl, { visibility: 'hidden', pointerEvents: 'none' });
      gsap.set('.nav-bg', { opacity: 0 });
      gsap.set('.nav-login', { opacity: 0, y: 8 });

      // Create Single Master Timeline
      const tl = gsap
        .timeline({ paused: true })
        .set(navEl, { visibility: 'visible', pointerEvents: 'auto' })

        // ═══ ENTER ANIMATION ═══
        .to(
          '.nav-bg',
          {
            opacity: 1,
            duration: 0.38,
            ease: 'power2.out',
          },
          0
        )
        .fromTo(
          '.nav-panel',
          { x: '110%', y: '0vh', rotation: 0 },
          {
            x: '0%',
            y: '0vh',
            rotation: 0,
            duration: 0.58,
            ease: 'back.out(1.15)',
            stagger: 0.08,
          },
          0
        )
        .fromTo(
          '.nav-item, .nav-chip',
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.65,
            ease: 'expo.out',
            stagger: 0.02,
          },
          0.08
        )
        // Morph 3-bar icon into X
        .fromTo(
          '.bar-top',
          { stroke: '#FFFFFF', attr: { x1: 3, y1: 6, x2: 17, y2: 6 } },
          { stroke: '#E21E4C', attr: { x1: 4, y1: 4, x2: 16, y2: 16 }, duration: 0.32, ease: 'back.out(1.4)' },
          0.05
        )
        .fromTo(
          '.bar-mid',
          { opacity: 1 },
          { opacity: 0, duration: 0.2 },
          0.05
        )
        .fromTo(
          '.bar-bot',
          { stroke: '#FFFFFF', attr: { x1: 3, y1: 14, x2: 17, y2: 14 } },
          { stroke: '#E21E4C', attr: { x1: 16, y1: 4, x2: 4, y2: 16 }, duration: 0.32, ease: 'back.out(1.4)' },
          0.05
        )
        .to(
          '.nav-login',
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power3.out',
          },
          0.35
        )

        // ═══ PAUSE AT OPEN STATE ═══
        .addPause();

      enterEndTimeRef.current = tl.duration();

      // ═══ EXIT ANIMATION — Physics Falling Boxes ═══
      tl
        // Morph X back to 3-bar icon
        .to('.bar-mid', { opacity: 1, duration: 0.2 })
        .to(
          '.bar-top',
          {
            attr: { x1: 3, y1: 6, x2: 17, y2: 6 },
            stroke: '#FFFFFF',
            duration: 0.2,
            ease: 'power3.in',
          },
          '<'
        )
        .to(
          '.bar-bot',
          {
            attr: { x1: 3, y1: 14, x2: 17, y2: 14 },
            stroke: '#FFFFFF',
            duration: 0.2,
            ease: 'power3.in',
          },
          '<'
        )
        // Panels tumble and fall down offscreen with physics rotation
        .to(
          '.nav-panel',
          {
            y: '115vh',
            rotation: () => gsap.utils.random(-25, 25),
            duration: 0.85,
            ease: 'power3.in',
            stagger: {
              from: 'end',
              each: 0.04,
            },
          },
          '<'
        )
        // Backdrop overlay fades out
        .to(
          '.nav-bg',
          {
            opacity: 0,
            duration: 0.3,
            ease: 'power2.in',
          },
          '<0.1'
        )
        .set(navEl, { visibility: 'hidden', pointerEvents: 'none' });

      tlRef.current = tl;
    });

    // Expose global window API for triggers
    window.QcodesAIModal = {
      toggle: () => toggleModal(),
      open: () => { if (!isOpenRef.current) toggleModal(); },
      close: () => { if (isOpenRef.current) toggleModal(); },
      isOpen: () => isOpenRef.current,
    };

    return () => {
      ctx.revert();
      delete window.QcodesAIModal;
    };
  }, []);

  const toggleModal = () => {
    const tl = tlRef.current;
    if (!tl) return;

    const nextState = !isOpenRef.current;
    isOpenRef.current = nextState;
    setIsOpenState(nextState);

    const exitSpeed = 1.6;
    const enterEndTime = enterEndTimeRef.current;

    if (nextState) {
      if (tl.time() >= enterEndTime) {
        tl.timeScale(1).restart();
      } else {
        tl.timeScale(1).play();
      }
      setTimeout(() => {
        if (inputRef.current) inputRef.current.focus();
      }, 350);
    } else {
      if (tl.time() < enterEndTime) {
        tl.timeScale(exitSpeed).reverse();
      } else {
        tl.timeScale(1).play();
      }
    }
  };

  // Keyboard shortcut (Escape key closes with falling animation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpenRef.current) {
        toggleModal();
        if (launcherRef.current) launcherRef.current.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSendPrompt = (promptText) => {
    const text = (promptText || query).trim();
    if (!text) return;

    setIsAnalyzing(true);
    setResponse({ text, stage: 'analyzing' });

    setTimeout(() => {
      setIsAnalyzing(false);
      setResponse({
        text,
        stage: 'completed',
        recommendation: `We offer custom engineering services tailored for "${text}". Connect directly with our solutions team to discuss milestones, tech stack, and rapid prototyping.`,
      });
    }, 600);

    setQuery('');
  };

  const handleNavClick = () => {
    if (isOpenRef.current) {
      toggleModal();
    }
  };

  return (
    <>
      {/* Floating Orb Launcher Trigger Button */}
      <button
        ref={launcherRef}
        id="qcAiLauncherBtn"
        className="qc-ai-launcher-btn"
        onClick={toggleModal}
        aria-expanded={isOpenState}
        aria-label="Toggle AI Assistant"
        type="button"
      >
        <div className="qc-ai-orb-wrap">
          <span className="qc-ai-orb-pulse"></span>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="qc-ai-icon-svg">
            <line className="bar bar-top" x1="3" y1="6" x2="17" y2="6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <line className="bar bar-mid" x1="3" y1="10" x2="17" y2="10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
            <line className="bar bar-bot" x1="3" y1="14" x2="17" y2="14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
        <div className="qc-ai-launcher-label">
          <span className="qc-ai-launcher-title">
            <span className="qc-ai-status-dot"></span>
            AI Assistant
          </span>
          <span className="qc-ai-launcher-sub">Quick Help</span>
        </div>
      </button>

      {/* Multi-Panel Modal Overlay Drawer */}
      <div
        ref={containerRef}
        id="nav"
        className="nav"
      >
        {/* Backdrop Overlay */}
        <div
          className="nav-bg"
          id="qcNavBg"
          onClick={toggleModal}
        ></div>

        {/* Top Panel: Clean AI Assistant & Quick Navigation */}
        <div
          className="nav-top nav-border nav-panel"
          id="navTop"
        >
          <div className="nav-top-header">
            <div className="nav-top-brand">
              <div className="nav-top-brand-icon">
                <i className="fa-solid fa-sparkles"></i>
              </div>
              <div>
                <div className="nav-top-brand-title">Qcodes AI Assistant</div>
                <span className="nav-top-brand-badge">Online • 24/7</span>
              </div>
            </div>
            <button
              className="nav-close-btn"
              id="qcNavCloseBtn"
              onClick={toggleModal}
              aria-label="Close modal"
              type="button"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          {/* Interactive AI Query Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendPrompt();
            }}
            className="nav-ai-input-wrap"
          >
            <input
              ref={inputRef}
              id="qcNavAiInput"
              type="text"
              className="nav-ai-input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about our services, pricing, or tech stack..."
              autoComplete="off"
            />
            <button type="submit" className="nav-ai-send-btn" id="qcNavAiSendBtn">
              <span>Ask</span>
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </form>

          {/* Quick Suggestion Chips */}
          <div className="nav-chips-list">
            {chips.map((chip) => (
              <button
                key={chip.label}
                type="button"
                className="nav-chip"
                onClick={() => handleSendPrompt(chip.prompt)}
              >
                <i className={`fa-solid ${chip.icon} text-red-500`}></i> {chip.label}
              </button>
            ))}
          </div>

          {/* Dynamic AI Feedback Response Box */}
          {response && (
            <div
              id="qcAiResponseBox"
              style={{
                display: 'block',
                padding: '12px 14px',
                background: '#FFF8F9',
                border: '1px solid #FFE4E8',
                borderRadius: '12px',
                marginBottom: '14px',
                fontSize: '0.82rem',
                color: '#1F2937',
                lineHeight: '1.5',
              }}
            >
              {response.stage === 'analyzing' ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fa-solid fa-spinner fa-spin" style={{ color: '#E21E4C' }}></i>
                  <span style={{ fontWeight: 600, color: '#11141a' }}>Searching services for "{response.text}"...</span>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className="qc-ai-status-dot"></span>
                    <span style={{ fontWeight: 700, color: '#11141a' }}>Recommendation</span>
                  </div>
                  <p style={{ color: '#4B5563', margin: 0, fontSize: '0.8rem' }}>
                    {response.recommendation}
                  </p>
                  <div style={{ paddingTop: '6px', display: 'flex', justifyContent: 'flex-end' }}>
                    <Link
                      to="/contact"
                      onClick={handleNavClick}
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: '#E21E4C',
                        textDecoration: 'none',
                      }}
                    >
                      Schedule Discovery Call &rarr;
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Quick Page Navigation Grid */}
          <ul className="nav-list">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={handleNavClick}>
                <span><i className="fa-solid fa-house mr-2 text-red-500"></i> Home</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" onClick={handleNavClick}>
                <span><i className="fa-solid fa-building mr-2 text-red-500"></i> About Us</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services" onClick={handleNavClick}>
                <span><i className="fa-solid fa-layer-group mr-2 text-red-500"></i> Services</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/solutions" onClick={handleNavClick}>
                <span><i className="fa-solid fa-lightbulb mr-2 text-red-500"></i> Solutions</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery" onClick={handleNavClick}>
                <span><i className="fa-solid fa-images mr-2 text-red-500"></i> Portfolio Gallery</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={handleNavClick}>
                <span><i className="fa-solid fa-envelope mr-2 text-red-500"></i> Contact Us</span>
                <i className="fa-solid fa-chevron-right"></i>
              </Link>
            </li>
          </ul>

          <div className="nav-login">
            <span>Ready to start your project?</span>
            <Link to="/contact" onClick={handleNavClick}>Get in Touch &rarr;</Link>
          </div>
        </div>

        {/* Middle Panel: Custom Consultation Card */}
        <div
          className="nav-middle nav-border nav-panel"
          id="navMiddle"
        >
          <div className="nav-middle-header">
            <span className="qc-ai-status-dot"></span>
            <span>Enterprise Consultation</span>
          </div>
          <div className="nav-middle-card">
            <div className="nav-middle-badge">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
              </svg>
            </div>
            <div className="nav-middle-info">
              <div className="nav-middle-title">Need a Custom Solution?</div>
              <div className="nav-middle-desc">Consult with our senior technical leads for project scoping and estimates.</div>
            </div>
          </div>
          <div className="nav-middle-actions">
            <Link to="/contact" onClick={handleNavClick} className="primary-pill">Request a Quote</Link>
            <Link to="/services" onClick={handleNavClick}>Explore Services</Link>
          </div>
        </div>

        {/* Bottom Panel: Quick Links & Support */}
        <div
          className="nav-bottom nav-border nav-panel"
          id="navBottom"
        >
          <ul className="nav-socials">
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin mr-1"></i> LinkedIn</a></li>
            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github mr-1"></i> GitHub</a></li>
            <li><Link to="/about" onClick={handleNavClick}><i className="fa-solid fa-info-circle mr-1"></i> About</Link></li>
            <li><Link to="/contact" onClick={handleNavClick}><i className="fa-solid fa-headset mr-1"></i> Support</Link></li>
          </ul>
          <div className="nav-telemetry-badge">
            <i className="fa-solid fa-check-circle"></i>
            <span>Qcodes Infotech</span>
          </div>
        </div>
      </div>
    </>
  );
}
