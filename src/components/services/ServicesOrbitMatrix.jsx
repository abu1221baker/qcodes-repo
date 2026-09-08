import React, { useState, useEffect, useRef } from 'react';
import {
  SiN8N,
  SiDjango,
  SiNextdotjs,
  SiReact,
  SiFlutter,
  SiKotlin,
  SiPython,
  SiRedis,
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiAngular,
  SiJquery,
  SiDrupal,
  SiWordpress,
  SiApache,
  SiLaravel,
  SiDotnet,
} from 'react-icons/si';
import { FaJava, FaSalesforce, FaAws, FaDatabase, FaHtml5 } from 'react-icons/fa6';
import { GrOracle } from 'react-icons/gr';
import { TabIcon } from '../../assets';

// Comprehensive catalog of all requested technologies with spacious non-overlapping orbital positions
const allTechNodes = [
  // Database & Cloud Pillar
  {
    id: 'oracle',
    name: 'Oracle Database',
    category: 'Data Mining & Databases',
    pillar: 'database',
    Icon: GrOracle,
    iconColor: '#F80000',
    desc: 'High-availability enterprise relational database management, multi-model grid computing, and ACID transaction reliability.',
    url: 'https://qcodesinfotech.com/oracle',
    coords: { x: -370, y: 140, size: 'medium' },
  },
  {
    id: 'sql',
    name: 'SQL Database',
    category: 'Data Mining & Databases',
    pillar: 'database',
    Icon: FaDatabase,
    iconColor: '#336791',
    desc: 'Structured query data modeling, indexed table partitioning, complex joins, and scalable PostgreSQL/MySQL database architectures.',
    url: 'https://qcodesinfotech.com/sql-database',
    coords: { x: -110, y: 240, size: 'small' },
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL Database',
    category: 'Data Mining & Databases',
    pillar: 'database',
    Icon: SiPostgresql,
    iconColor: '#4169E1',
    desc: 'Advanced enterprise open-source relational database with ACID compliance, JSONB document querying, and high-concurrency indexing.',
    url: 'https://qcodesinfotech.com/sql-database',
    coords: { x: 350, y: 0, size: 'medium' },
  },
  {
    id: 'redis',
    name: 'Redis In-Memory Data',
    category: 'Data Mining & Databases',
    pillar: 'database',
    Icon: SiRedis,
    iconColor: '#DC382D',
    desc: 'Sub-millisecond latency in-memory data structures, distributed pub/sub messaging queues, and high-velocity session clustering.',
    url: 'https://qcodesinfotech.com/redis',
    coords: { x: 0, y: 250, size: 'medium' },
  },
  {
    id: 'mongodb',
    name: 'MongoDB NoSQL',
    category: 'Data Mining & Databases',
    pillar: 'database',
    Icon: SiMongodb,
    iconColor: '#47A248',
    desc: 'Scalable document database with horizontal sharding, flexible JSON schema modeling, and high-throughput aggregation pipelines.',
    url: 'https://qcodesinfotech.com/mongodb',
    coords: { x: -220, y: 160, size: 'large' },
  },
  {
    id: 'aws',
    name: 'AWS Development',
    category: 'Cloud & Infrastructure',
    pillar: 'database',
    Icon: FaAws,
    iconColor: '#FF9900',
    desc: 'Cloud-native serverless lambda architectures, containerized ECS/EKS clusters, S3 storage pipelines, and resilient multi-zone infrastructure.',
    url: 'https://qcodesinfotech.com/aws-development',
    coords: { x: -100, y: 90, size: 'small' },
  },

  // Frontend & CMS Pillar
  {
    id: 'htmlcss',
    name: 'HTML5 & CSS3',
    category: 'Frontend & UI',
    pillar: 'frontend',
    Icon: FaHtml5,
    iconColor: '#E34F26',
    desc: 'Semantic web standard structure, modern CSS responsive layouts, glassmorphic typography, and WCAG accessibility compliance.',
    url: 'https://qcodesinfotech.com/html-css',
    coords: { x: -370, y: -140, size: 'medium' },
  },
  {
    id: 'react',
    name: 'React Ecosystem',
    category: 'Frontend & UI',
    pillar: 'frontend',
    Icon: SiReact,
    iconColor: '#61DAFB',
    desc: 'High-performance reactive user interfaces, component-driven design systems, atomic hydration, and Core Web Vitals optimization.',
    url: 'https://qcodesinfotech.com/website-development',
    coords: { x: -230, y: 0, size: 'large' },
  },
  {
    id: 'nextjs',
    name: 'Node JS & Next Js',
    category: 'Frontend & Serverless',
    pillar: 'frontend',
    Icon: SiNextdotjs,
    iconColor: '#000000',
    desc: 'Server-Side Rendering (SSR), Incremental Static Regeneration (ISR), dynamic edge routing, and enterprise full-stack web platforms.',
    url: 'https://qcodesinfotech.com/node-js-next-js',
    coords: { x: -100, y: -90, size: 'small' },
  },
  {
    id: 'angular',
    name: 'Angular JS',
    category: 'Frontend & UI',
    pillar: 'frontend',
    Icon: SiAngular,
    iconColor: '#DD0031',
    desc: 'TypeScript-based client-side architecture, dependency injection, reactive forms, and scalable enterprise single-page applications.',
    url: 'https://qcodesinfotech.com/angular-js',
    coords: { x: -110, y: -240, size: 'small' },
  },
  {
    id: 'jquery',
    name: 'JQuery & DOM Engine',
    category: 'Frontend & UI',
    pillar: 'frontend',
    Icon: SiJquery,
    iconColor: '#0769AD',
    desc: 'Fast, lightweight DOM event handling, cross-browser JavaScript utilities, and animation plugins.',
    url: 'https://qcodesinfotech.com/jquery',
    coords: { x: -360, y: -30, size: 'small' },
  },
  {
    id: 'wordpress',
    name: 'WordPress CMS',
    category: 'Content Management',
    pillar: 'frontend',
    Icon: SiWordpress,
    iconColor: '#21759B',
    desc: 'Custom headless theme architecture, WooCommerce multi-vendor stores, and optimized enterprise content publishing workflows.',
    url: 'https://qcodesinfotech.com/word-press',
    coords: { x: 100, y: -90, size: 'small' },
  },
  {
    id: 'drupal',
    name: 'Drupal CMS',
    category: 'Content Management',
    pillar: 'frontend',
    Icon: SiDrupal,
    iconColor: '#0678BE',
    desc: 'Enterprise-scale multilingual taxonomy, modular block rendering, and secure digital content management platforms.',
    url: 'https://qcodesinfotech.com/drupal',
    coords: { x: 110, y: -240, size: 'small' },
  },

  // Server Side Scripting Pillar
  {
    id: 'python',
    name: 'Python & AI Engineering',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: SiPython,
    iconColor: '#3776AB',
    desc: 'High-throughput async server microservices, machine learning model training, automated data processing, and FastAPI gateways.',
    url: 'https://qcodesinfotech.com/python-django',
    coords: { x: 230, y: 0, size: 'large' },
  },
  {
    id: 'django',
    name: 'Python & Django',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: SiDjango,
    iconColor: '#092E20',
    desc: 'Secure, batteries-included enterprise web backends with ORM, authentication, REST frameworks, and sub-100ms response latency.',
    url: 'https://qcodesinfotech.com/python-django',
    coords: { x: -220, y: -160, size: 'large' },
  },
  {
    id: 'java',
    name: 'Spring & Java',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: FaJava,
    iconColor: '#E76F00',
    desc: 'Mission-critical distributed systems, Spring Boot microservices, transactional databases, and ERP business applications.',
    url: 'https://qcodesinfotech.com/spring-java',
    coords: { x: 220, y: 160, size: 'large' },
  },
  {
    id: 'apachecxf',
    name: 'ApacheCXF',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: SiApache,
    iconColor: '#D22128',
    desc: 'Open-source enterprise services framework providing SOAP/JAX-WS, RESTful JAX-RS, and protocol transformation bridges.',
    url: 'https://qcodesinfotech.com/apache-cxf',
    coords: { x: 100, y: 90, size: 'small' },
  },
  {
    id: 'php',
    name: 'PHP, Laravel & Codeigniter',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: SiLaravel,
    iconColor: '#FF2D20',
    desc: 'Modern MVC backend scripting, Eloquent ORM, robust REST API scaffolding, and rapid custom web application engineering.',
    url: 'https://qcodesinfotech.com/php-laravel-codeigniter',
    coords: { x: 110, y: 240, size: 'small' },
  },
  {
    id: 'dotnet',
    name: '.NET & C#',
    category: 'Server Side Scripting',
    pillar: 'backend',
    Icon: SiDotnet,
    iconColor: '#512BD4',
    desc: 'Cross-platform enterprise C# services, ASP.NET Core web APIs, Azure microservices, and high-performance multithreading.',
    url: 'https://qcodesinfotech.com/dotnet-c-sharp',
    coords: { x: 370, y: 140, size: 'medium' },
  },
  {
    id: 'postman',
    name: 'Postman API Platform',
    category: 'API Testing & Automation',
    pillar: 'backend',
    Icon: SiPostman,
    iconColor: '#FF6C37',
    desc: 'Comprehensive API development platform, automated endpoint testing suites, mock servers, and OpenAPI collaboration pipelines.',
    url: 'https://qcodesinfotech.com/technical',
    coords: { x: 370, y: -140, size: 'medium' },
  },

  // Mobile & Enterprise Automation Pillar
  {
    id: 'flutter',
    name: 'Flutter & Cross Platform',
    category: 'Mobile App Development',
    pillar: 'mobile',
    Icon: SiFlutter,
    iconColor: '#02569B',
    desc: 'High-performance iOS, Android, and web apps from a unified codebase with 60 FPS hardware-accelerated animations.',
    url: 'https://qcodesinfotech.com/cross-platform-development',
    coords: { x: 220, y: -160, size: 'large' },
  },
  {
    id: 'kotlin',
    name: 'Kotlin & Android',
    category: 'Native Mobile',
    pillar: 'mobile',
    Icon: SiKotlin,
    iconColor: '#7F52FF',
    desc: 'Modern Android applications utilizing Jetpack Compose, coroutines, offline SQLite synchronization, and biometric security.',
    url: 'https://qcodesinfotech.com/kotlin',
    coords: { x: 0, y: -250, size: 'medium' },
  },
  {
    id: 'n8n',
    name: 'n8n Automation',
    category: 'RPA & Automation',
    pillar: 'mobile',
    Icon: SiN8N,
    iconColor: '#EA4B71',
    desc: 'Fair-code workflow automation, event-driven integration hooks, API data transformation, and multi-service orchestration.',
    url: 'https://qcodesinfotech.com/software-development',
    coords: { x: -470, y: 0, size: 'medium' },
  },
  {
    id: 'salesforce',
    name: 'Salesforce & CRM',
    category: 'Enterprise CRM Platforms',
    pillar: 'mobile',
    Icon: FaSalesforce,
    iconColor: '#00A1E0',
    desc: 'Custom CRM software development, customer lifecycle automation, HR & payroll integration, and enterprise data sync.',
    url: 'https://qcodesinfotech.com/crm-software-developmet',
    coords: { x: 470, y: 0, size: 'medium' },
  },
];

const categories = [
  { id: 'all', label: 'All Technologies' },
  { id: 'database', label: 'Databases & Cloud' },
  { id: 'frontend', label: 'Frontend & CMS' },
  { id: 'backend', label: 'Server Side Scripting' },
  { id: 'mobile', label: 'Mobile & Automation' },
];

const STAGE_BASE_WIDTH = 1140;
const STAGE_BASE_HEIGHT = 680;

export default function ServicesOrbitMatrix() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedNode, setSelectedNode] = useState(allTechNodes[7]); // Default selected (React Ecosystem)
  const [hoveredNode, setHoveredNode] = useState(null);
  
  const containerRef = useRef(null);
  const [scale, setScale] = useState(1);

  // Dynamically compute responsive scale to fit ANY viewport seamlessly
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const availableWidth = containerRef.current.clientWidth;
        // Calculate responsive scale factor
        const calculatedScale = Math.min(1, Math.max(0.30, availableWidth / STAGE_BASE_WIDTH));
        setScale(calculatedScale);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const displayedNodes = activeCategory === 'all' 
    ? allTechNodes 
    : allTechNodes.filter(node => node.pillar === activeCategory);

  // Get active item details for display
  const activeNodeData = hoveredNode === 'center'
    ? {
        id: 'center',
        name: 'Qcodes Infotech Core',
        category: 'Enterprise Architecture Hub',
        iconColor: '#E21E4C',
        desc: 'Central engineering headquarters founded in 2016 in Chennai, India, coordinating full-stack web, mobile, database, and cloud systems worldwide.',
        url: 'https://qcodesinfotech.com/aboutus',
        isCenter: true,
      }
    : (hoveredNode && allTechNodes.find(n => n.id === hoveredNode)) || selectedNode || allTechNodes[7];

  return (
    <section className="w-full max-w-full relative overflow-hidden py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white via-[#FFF8F9] to-white border-b border-border-subtle" id="matrix-section">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-6 sm:mb-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-primary text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span>Interactive Technology Constellation</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight">
            Tools &amp; Technologies
          </h2>
          <p className="font-sans text-xs sm:text-base text-text-muted leading-relaxed max-w-2xl">
            Tap or hover over any circular node to explore architecture specifications, framework capabilities, and engineering links.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mt-2 sm:mt-4 w-full max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  const firstInCat = cat.id === 'all' ? allTechNodes[7] : allTechNodes.find(n => n.pillar === cat.id);
                  if (firstInCat) setSelectedNode(firstInCat);
                }}
                className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-sans text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-[0_4px_14px_rgba(226,30,76,0.35)] scale-105'
                    : 'bg-white text-text-muted hover:text-text-main border border-border-subtle hover:border-primary/40 hover:bg-[#FFF0F2]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* RESPONSIVE SCALED CIRCLE ORBIT MATRIX (Visible on ALL Viewports)           */}
        {/* ========================================================================= */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-6xl mx-auto select-none overflow-hidden flex flex-col items-center justify-center"
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
              <div className="w-[600px] sm:w-[800px] h-[260px] sm:h-[320px] bg-gradient-to-r from-primary/10 via-pink-300/15 to-primary/10 blur-[100px] rounded-full opacity-60"></div>
            </div>

            {/* 2. Horizontal Meteor Lines (Streaking across horizontally) */}
            <div className="absolute inset-0 -z-15 pointer-events-none overflow-hidden">
              {/* Meteor Track 1 */}
              <div className="meteor-track" style={{ top: '80px' }}>
                <div className="meteor-head w-40" style={{ animationDuration: '4.8s', animationDelay: '0s' }}></div>
              </div>
              {/* Meteor Track 2 */}
              <div className="meteor-track" style={{ top: '185px' }}>
                <div className="meteor-head w-52" style={{ animationDuration: '6.4s', animationDelay: '2.2s' }}></div>
              </div>
              {/* Meteor Track 3 */}
              <div className="meteor-track" style={{ top: '290px' }}>
                <div className="meteor-head w-44" style={{ animationDuration: '5.1s', animationDelay: '0.9s' }}></div>
              </div>
              {/* Meteor Track 4 */}
              <div className="meteor-track" style={{ top: '395px' }}>
                <div className="meteor-head w-60" style={{ animationDuration: '7.2s', animationDelay: '3.4s' }}></div>
              </div>
              {/* Meteor Track 5 */}
              <div className="meteor-track" style={{ top: '500px' }}>
                <div className="meteor-head w-48" style={{ animationDuration: '5.6s', animationDelay: '1.5s' }}></div>
              </div>
              {/* Meteor Track 6 */}
              <div className="meteor-track" style={{ top: '605px' }}>
                <div className="meteor-head w-36" style={{ animationDuration: '6.1s', animationDelay: '4.1s' }}></div>
              </div>
            </div>

            {/* 3. Clean Subtle Concentric Orbit Rings */}
            <svg
              className="absolute inset-0 w-full h-full -z-10 pointer-events-none"
              viewBox="0 0 1140 680"
              preserveAspectRatio="xMidYMid meet"
              fill="none"
            >
              <circle cx="570" cy="340" r="140" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="4 4" />
              <circle cx="570" cy="340" r="250" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.08" />
              <circle cx="570" cy="340" r="380" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.05" strokeDasharray="6 6" />
              <circle cx="570" cy="340" r="490" stroke="#E21E4C" strokeWidth="1" strokeOpacity="0.03" />
            </svg>

            {/* CENTER CORE: Qcodes Infotech Central Hub */}
            <div
              className={`absolute z-30 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                hoveredNode === 'center' || activeNodeData?.id === 'center' ? 'z-[100] scale-110' : 'hover:scale-105'
              }`}
              onClick={() => {
                setSelectedNode({ id: 'center', name: 'Qcodes Infotech Core', category: 'Enterprise Architecture Hub', iconColor: '#E21E4C', desc: 'Central engineering headquarters founded in 2016 in Chennai, India, coordinating full-stack web, mobile, database, and cloud systems worldwide.', url: 'https://qcodesinfotech.com/aboutus', isCenter: true });
              }}
              onMouseEnter={() => setHoveredNode('center')}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <div className="absolute -inset-5 sm:-inset-6 rounded-full border border-primary/25 pointer-events-none">
                <div className="absolute inset-0 rounded-full border border-transparent border-t-primary border-r-primary animate-[spin_6s_linear_infinite]"></div>
              </div>

              <div className="animate-[breath_8s_ease-in-out_infinite_both]">
                <div className="relative flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full bg-white shadow-[0_12px_36px_rgba(226,30,76,0.22),0_4px_12px_rgba(0,0,0,0.06)] border-4 border-[#FFF0F2] ring-1 ring-primary/30">
                  <img
                    src={TabIcon}
                    alt="Qcodes Infotech Core"
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain drop-shadow-md"
                  />
                </div>
              </div>
            </div>

            {/* SPACED-OUT SATELLITE CIRCULAR NODES */}
            {displayedNodes.map((node, index) => {
              const { id, name, category, Icon, iconColor, desc, url, coords } = node;
              const isHovered = hoveredNode === id;
              const isSelected = selectedNode?.id === id;
              
              let sizeClasses = 'h-15 w-15 sm:h-17 sm:w-17 p-3';
              let iconSize = 'w-7 h-7 sm:w-8 sm:h-8';
              if (coords.size === 'large') {
                sizeClasses = 'h-18 w-18 sm:h-20 sm:w-20 p-3.5';
                iconSize = 'w-8 h-8 sm:w-9 sm:h-9';
              } else if (coords.size === 'small') {
                sizeClasses = 'h-12 w-12 sm:h-14 sm:w-14 p-2.5';
                iconSize = 'w-6 h-6 sm:w-7 sm:h-7';
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
                  <div className={`animate-[breath_${6 + (index % 3)}s_ease-in-out_${(index % 4) * 0.8}s_infinite_both]`}>
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
        {/* INTERACTIVE SPECIFICATION DRAWER CARD (Works on ALL Viewports)            */}
        {/* ========================================================================= */}
        <div className="w-full max-w-2xl mx-auto mt-4 sm:mt-6">
          <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-red-100 shadow-[0_12px_36px_rgba(226,30,76,0.08)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all duration-300">
            
            <div className="flex items-start sm:items-center gap-3.5 min-w-0 flex-grow">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 shadow-2xs"
                style={{ backgroundColor: `${activeNodeData.iconColor || '#E21E4C'}12` }}
              >
                {activeNodeData.isCenter ? (
                  <img src={TabIcon} alt="Qcodes" className="w-7 h-7 object-contain" />
                ) : activeNodeData.Icon ? (
                  <activeNodeData.Icon className="w-6 h-6" style={{ color: activeNodeData.iconColor }} />
                ) : (
                  <span className="w-3 h-3 rounded-full bg-primary animate-pulse"></span>
                )}
              </div>

              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-headline text-base sm:text-lg font-bold text-text-main truncate">
                    {activeNodeData.name}
                  </h3>
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                </div>
                <span className="font-sans text-[11px] sm:text-xs font-semibold text-primary block">
                  {activeNodeData.category}
                </span>
                <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed line-clamp-2 sm:line-clamp-3">
                  {activeNodeData.desc}
                </p>
              </div>
            </div>

            {/* Direct Action Link */}
            <div className="w-full sm:w-auto flex justify-end shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              <a
                href={activeNodeData.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary-dark text-white font-sans text-xs sm:text-sm font-bold shadow-md shadow-primary/25 transition-all hover:scale-[1.02]"
              >
                <span>Explore {activeNodeData.name}</span>
                <span className="text-sm">→</span>
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
