import React, { useState, useEffect } from 'react';

const WEB_DEV_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ createPortal } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/web'", color: 'text-[#86efac]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ useEdgeRouting } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/react'", color: 'text-[#86efac]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export function ', color: 'text-[#c084fc]' },
      { text: 'WebPlatform', color: 'text-[#67e8f9]' },
      { text: '() {', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: '{ isOptimized } = ', color: 'text-white' },
      { text: 'useEdgeRouting', color: 'text-[#67e8f9]' },
      { text: '({', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'rendering: ', color: 'text-slate-300' },
      { text: "'Incremental Static Regeneration'", color: 'text-[#86efac]' },
      { text: ',', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'cacheStrategy: ', color: 'text-slate-300' },
      { text: "'Global Edge Mesh'", color: 'text-[#86efac]' },
      { text: ',', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'vitals: ', color: 'text-slate-300' },
      { text: "'100% Core Web Vitals'", color: 'text-[#86efac]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '})', color: 'text-white' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: '(', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '<div ', color: 'text-[#67e8f9]' },
      { text: 'className', color: 'text-[#fde047]' },
      { text: '=', color: 'text-white' },
      { text: '"enterprise-portal"', color: 'text-[#86efac]' },
      { text: '>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<h1>', color: 'text-[#67e8f9]' },
      { text: 'Modern Scalable Web Architecture', color: 'text-white' },
      { text: '</h1>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<p>', color: 'text-[#67e8f9]' },
      { text: 'Sub-120ms P95 API Response Hydration', color: 'text-pink-400' },
      { text: '</p>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '</div>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: ')', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
];

const MOBILE_DEV_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: 'React ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'react'", color: 'text-[#86efac]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ View, Text } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'react-native'", color: 'text-[#86efac]' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ QcodesBiometrics, OfflineSync } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/mobile'", color: 'text-[#86efac]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export function ', color: 'text-[#c084fc]' },
      { text: 'MobileApp', color: 'text-[#67e8f9]' },
      { text: '() {', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: 'syncEngine', color: 'text-[#67e8f9]' },
      { text: ' = ', color: 'text-white' },
      { text: 'async ', color: 'text-[#c084fc]' },
      { text: '() => {', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'QcodesBiometrics', color: 'text-[#67e8f9]' },
      { text: '.', color: 'text-white' },
      { text: 'authenticate', color: 'text-[#67e8f9]' },
      { text: '(', color: 'text-white' },
      { text: "'Biometric FaceID'", color: 'text-[#86efac]' },
      { text: ')', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'OfflineSync', color: 'text-[#67e8f9]' },
      { text: '.', color: 'text-white' },
      { text: 'hydrateSQLite', color: 'text-[#67e8f9]' },
      { text: '({ ', color: 'text-white' },
      { text: 'frameRate: ', color: 'text-slate-300' },
      { text: "'60 FPS'", color: 'text-[#86efac]' },
      { text: ' })', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: '(', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '<View ', color: 'text-[#67e8f9]' },
      { text: 'style', color: 'text-[#fde047]' },
      { text: '={{ ', color: 'text-white' },
      { text: 'flex: 1, backgroundColor: ', color: 'text-slate-300' },
      { text: "'#0B0F19'", color: 'text-[#86efac]' },
      { text: ' }}', color: 'text-white' },
      { text: '>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-12',
    tokens: [
      { text: '<Text ', color: 'text-[#67e8f9]' },
      { text: 'style', color: 'text-[#fde047]' },
      { text: '={{ ', color: 'text-white' },
      { text: 'color: ', color: 'text-slate-300' },
      { text: "'#FF3366'", color: 'text-[#86efac]' },
      { text: ' }}', color: 'text-white' },
      { text: '>', color: 'text-[#67e8f9]' },
      { text: 'Native iOS & Android Architecture', color: 'text-white' },
      { text: '</Text>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: '</View>', color: 'text-[#67e8f9]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: ')', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
];

const CLOUD_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ MultiRegionCluster } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/cloud'", color: 'text-[#86efac]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export const ', color: 'text-[#c084fc]' },
      { text: 'deployEnterpriseCloud', color: 'text-[#67e8f9]' },
      { text: ' = ', color: 'text-white' },
      { text: 'async ', color: 'text-[#c084fc]' },
      { text: '() => {', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: 'cluster = ', color: 'text-white' },
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'MultiRegionCluster', color: 'text-[#67e8f9]' },
      { text: '.', color: 'text-white' },
      { text: 'provision', color: 'text-[#67e8f9]' },
      { text: '({', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'kubernetes: ', color: 'text-slate-300' },
      { text: "'EKS Auto-Scaling 1.30'", color: 'text-[#86efac]' },
      { text: ',', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'infrastructure: ', color: 'text-slate-300' },
      { text: "'Terraform IaC'", color: 'text-[#86efac]' },
      { text: ',', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'uptimeSla: ', color: 'text-slate-300' },
      { text: "'99.995% High Availability'", color: 'text-[#86efac]' },
      { text: ',', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'disasterRecovery: ', color: 'text-slate-300' },
      { text: "'Zero-Data-Loss Failover'", color: 'text-[#86efac]' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '})', color: 'text-white' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: 'cluster.', color: 'text-white' },
      { text: 'deploy', color: 'text-[#67e8f9]' },
      { text: '()', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
];

const AI_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: 'qcodes_ai ', color: 'text-white' },
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: 'NeuralInference', color: 'text-[#67e8f9]' },
      { text: ', ', color: 'text-white' },
      { text: 'VectorMesh', color: 'text-[#67e8f9]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'async def ', color: 'text-[#c084fc]' },
      { text: 'run_predictive_pipeline', color: 'text-[#67e8f9]' },
      { text: '(input_stream):', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '"""Real-time enterprise ML inference model"""', color: 'text-[#94a3b8] italic' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'mesh = ', color: 'text-white' },
      { text: 'VectorMesh', color: 'text-[#67e8f9]' },
      { text: '.', color: 'text-white' },
      { text: 'connect', color: 'text-[#67e8f9]' },
      { text: '(', color: 'text-white' },
      { text: '"qcodes-vector-cluster"', color: 'text-[#86efac]' },
      { text: ')', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'model = ', color: 'text-white' },
      { text: 'NeuralInference', color: 'text-[#67e8f9]' },
      { text: '.', color: 'text-white' },
      { text: 'load', color: 'text-[#67e8f9]' },
      { text: '(', color: 'text-white' },
      { text: '"qcodes-deep-v4"', color: 'text-[#86efac]' },
      { text: ')', color: 'text-white' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'embeddings = ', color: 'text-white' },
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'mesh.', color: 'text-white' },
      { text: 'embed_query', color: 'text-[#67e8f9]' },
      { text: '(input_stream)', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'prediction = ', color: 'text-white' },
      { text: 'await ', color: 'text-[#c084fc]' },
      { text: 'model.', color: 'text-white' },
      { text: 'predict_async', color: 'text-[#67e8f9]' },
      { text: '(embeddings)', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: '{', color: 'text-white' },
      { text: '"accuracy"', color: 'text-[#86efac]' },
      { text: ': ', color: 'text-white' },
      { text: '0.998', color: 'text-[#fde047]' },
      { text: ', ', color: 'text-white' },
      { text: '"latency_ms"', color: 'text-[#86efac]' },
      { text: ': ', color: 'text-white' },
      { text: '14.2', color: 'text-[#fde047]' },
      { text: ', ', color: 'text-white' },
      { text: '"output"', color: 'text-[#86efac]' },
      { text: ': prediction}', color: 'text-white' },
    ],
  },
];

const ENTERPRISE_LINES = [
  {
    indent: 'pl-0',
    tokens: [
      { text: 'import ', color: 'text-[#c084fc]' },
      { text: '{ EnterpriseCRM, PayrollEngine } ', color: 'text-white' },
      { text: 'from ', color: 'text-[#c084fc]' },
      { text: "'@qcodes/enterprise'", color: 'text-[#86efac]' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-0',
    tokens: [
      { text: 'export function ', color: 'text-[#c084fc]' },
      { text: 'manageWorkforceLifecycle', color: 'text-[#67e8f9]' },
      { text: '() {', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: 'crm = ', color: 'text-white' },
      { text: 'new ', color: 'text-[#c084fc]' },
      { text: 'EnterpriseCRM', color: 'text-[#67e8f9]' },
      { text: '({ ', color: 'text-white' },
      { text: 'encryption: ', color: 'text-slate-300' },
      { text: "'AES-256-GCM'", color: 'text-[#86efac]' },
      { text: ' })', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'const ', color: 'text-[#c084fc]' },
      { text: 'payroll = ', color: 'text-white' },
      { text: 'new ', color: 'text-[#c084fc]' },
      { text: 'PayrollEngine', color: 'text-[#67e8f9]' },
      { text: '({ ', color: 'text-white' },
      { text: 'automatedTaxes: ', color: 'text-slate-300' },
      { text: 'true', color: 'text-[#c084fc]' },
      { text: ' })', color: 'text-white' },
    ],
  },
  { indent: 'pl-0', spacer: true },
  {
    indent: 'pl-4',
    tokens: [
      { text: 'return ', color: 'text-[#c084fc]' },
      { text: '{', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'workforceSync: ', color: 'text-slate-300' },
      { text: 'crm.', color: 'text-white' },
      { text: 'syncGlobalWorkforce', color: 'text-[#67e8f9]' },
      { text: '(),', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-8',
    tokens: [
      { text: 'automatedCompliance: ', color: 'text-slate-300' },
      { text: 'payroll.', color: 'text-white' },
      { text: 'executePayrollRun', color: 'text-[#67e8f9]' },
      { text: '()', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-4',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
  {
    indent: 'pl-0',
    tokens: [
      { text: '}', color: 'text-white' },
    ],
  },
];

const serviceSnippets = {
  'WebDev.jsx': {
    name: 'Web Dev',
    lang: 'jsx',
    lines: WEB_DEV_LINES,
    raw: `import { createPortal } from '@qcodes/web'
import { useEdgeRouting } from '@qcodes/react'

export function WebPlatform() {
  const { isOptimized } = useEdgeRouting({
    rendering: 'Incremental Static Regeneration',
    cacheStrategy: 'Global Edge Mesh',
    vitals: '100% Core Web Vitals'
  })

  return (
    <div className="enterprise-portal">
      <h1>Modern Scalable Web Architecture</h1>
      <p>Sub-120ms P95 API Response Hydration</p>
    </div>
  )
}`,
  },
  'MobileDev.tsx': {
    name: 'Mobile Dev',
    lang: 'tsx',
    lines: MOBILE_DEV_LINES,
    raw: `import React from 'react'
import { View, Text } from 'react-native'
import { QcodesBiometrics, OfflineSync } from '@qcodes/mobile'

export function MobileApp() {
  const syncEngine = async () => {
    await QcodesBiometrics.authenticate('Biometric FaceID')
    await OfflineSync.hydrateSQLite({ frameRate: '60 FPS' })
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#0B0F19' }}>
      <Text style={{ color: '#FF3366', fontWeight: 'bold' }}>
        Native iOS & Android Architecture
      </Text>
      <Text style={{ color: '#94A3B8' }}>Zero Jank • Biometric Auth</Text>
    </View>
  )
}`,
  },
  'CloudDevOps.ts': {
    name: 'Cloud & DevOps',
    lang: 'ts',
    lines: CLOUD_LINES,
    raw: `import { MultiRegionCluster } from '@qcodes/cloud'

export const deployEnterpriseCloud = async () => {
  const cluster = await MultiRegionCluster.provision({
    kubernetes: 'EKS Auto-Scaling 1.30',
    infrastructure: 'Terraform IaC',
    uptimeSla: '99.995% High Availability',
    disasterRecovery: 'Zero-Data-Loss Failover'
  })

  return cluster.deploy()
}`,
  },
  'AiModel.py': {
    name: 'AI & Data',
    lang: 'py',
    lines: AI_LINES,
    raw: `from qcodes_ai import NeuralInference, VectorMesh

async def run_predictive_pipeline(input_stream):
    """Real-time enterprise ML inference model"""
    mesh = VectorMesh.connect("qcodes-vector-cluster")
    model = NeuralInference.load("qcodes-deep-v4")
    
    embeddings = await mesh.embed_query(input_stream)
    prediction = await model.predict_async(embeddings)
    return {"accuracy": 0.998, "latency_ms": 14.2, "output": prediction}`,
  },
  'EnterpriseERP.ts': {
    name: 'Software Systems',
    lang: 'ts',
    lines: ENTERPRISE_LINES,
    raw: `import { EnterpriseCRM, PayrollEngine } from '@qcodes/enterprise'

export function manageWorkforceLifecycle() {
  const crm = new EnterpriseCRM({ encryption: 'AES-256-GCM' })
  const payroll = new PayrollEngine({ automatedTaxes: true })

  return {
    workforceSync: crm.syncGlobalWorkforce(),
    automatedCompliance: payroll.executePayrollRun()
  }
}`,
  },
};

const getTotalLength = (lines) => {
  return lines.reduce((total, line) => {
    if (line.spacer) return total + 1;
    return total + (line.tokens ? line.tokens.reduce((acc, t) => acc + t.text.length, 0) : 0);
  }, 0);
};

export default function ServicesHero() {
  const [activeTab, setActiveTab] = useState('WebDev.jsx');
  const [copied, setCopied] = useState(false);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const initialTotalChars = getTotalLength(WEB_DEV_LINES);

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

  const handleCopy = () => {
    const raw = serviceSnippets[activeTab]?.raw || '';
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeSnippet = serviceSnippets[activeTab] || serviceSnippets['WebDev.jsx'];
  const currentLines = activeSnippet.lines;
  const currentTotal = getTotalLength(currentLines);
  const effectiveCharCount = isDoneTyping || activeTab !== 'WebDev.jsx' ? currentTotal : charIndex;

  let remaining = effectiveCharCount;
  let cursorPlaced = false;

  const renderedLines = currentLines.map((line, lineIdx) => {
    if (line.spacer) {
      if (remaining <= 0 && cursorPlaced) return null;
      if (remaining > 0) remaining -= 1;
      return <div key={lineIdx} className="h-2" />;
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
    <section className="w-full relative overflow-hidden bg-gradient-to-b from-white via-surface-dim to-white border-b border-border-subtle">
      <div className="relative w-full px-4 sm:px-8 lg:pl-12 lg:pr-0 xl:pl-16 pt-8 sm:pt-12 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">
          
          {/* Left Column: Narrative with Services in Paragraph Form */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col gap-5 pr-0 sm:pr-4">
            <div className="flex flex-col gap-3">
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1C1C1C] tracking-tight leading-[1.15]">
                Our Services
              </h1>
              <p className="font-headline text-lg sm:text-xl font-bold text-primary">
                Technology That Turns Ideas Into Products
              </p>
              
              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                At Qcodes Infotech, we provide comprehensive, cutting-edge technology services tailored to scale modern enterprises. We offer end-to-end expertise across <a href="https://qcodesinfotech.com/website-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Website Design</a> and <a href="https://qcodesinfotech.com/website-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Website Development</a>, custom <a href="https://qcodesinfotech.com/software-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Software Development</a>, bespoke <a href="https://qcodesinfotech.com/crm-software-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">CRM Software Development</a>, <a href="https://qcodesinfotech.com/ecommerce-website-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">E-Commerce Websites</a>, and specialized web portals for <a href="https://qcodesinfotech.com/educational-web-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Education</a>, <a href="https://qcodesinfotech.com/restaurant-web-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Restaurants</a>, and <a href="https://qcodesinfotech.com/travel-portal-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Travel</a>.
              </p>

              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                Our enterprise software solutions encompass <a href="https://qcodesinfotech.com/hr-and-payroll-management-software" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">HR and Payroll Management</a>, <a href="https://qcodesinfotech.com/crm-software-developmet" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">CRM Systems</a>, <a href="https://qcodesinfotech.com/inventory-management-system" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Inventory Management</a>, and <a href="https://qcodesinfotech.com/school-management-system" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">School Management Software</a>. In mobile, we deliver robust <a href="https://qcodesinfotech.com/mobile-app-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Mobile App Development</a> across <a href="https://qcodesinfotech.com/native-app-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Native (iOS &amp; Android)</a> and <a href="https://qcodesinfotech.com/cross-platform-development" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Cross-Platform</a> architectures.
              </p>

              <p className="font-sans text-sm sm:text-base text-text-muted leading-relaxed">
                We also lead the frontier in emerging technologies, including <a href="https://qcodesinfotech.com/aiml" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">AI &amp; Machine Learning</a>, <a href="https://qcodesinfotech.com/rpa" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Robotic Process Automation (RPA)</a>, <a href="https://qcodesinfotech.com/data-science" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Data Science &amp; Analytics</a>, <a href="https://qcodesinfotech.com/blockchain" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Blockchain</a>, <a href="https://qcodesinfotech.com/cloud" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Cloud Computing &amp; IoT</a>, human-centered <a href="https://qcodesinfotech.com/ui-ux-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">UI/UX Design</a>, <a href="https://qcodesinfotech.com/video-animating-design" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Video Animation</a>, and rigorous <a href="https://qcodesinfotech.com/software-testing" target="_blank" rel="noopener noreferrer" className="text-text-main font-medium hover:text-primary transition-colors underline decoration-border-strong hover:decoration-primary">Software, Security &amp; Performance Testing</a>.
              </p>
            </div>
          </div>

          {/* Right Column: Code Snippet Container Flush to Right Viewport Edge on Desktop, Contained on Mobile */}
          <div className="lg:col-span-7 xl:col-span-7 relative w-full flex justify-end mr-0 pr-0">
            <div className="relative w-full max-w-[660px] xl:max-w-[760px] 2xl:max-w-[850px] bg-gradient-to-br from-[#FF3366] via-[#E21E4C] to-[#A91639] rounded-2xl lg:rounded-l-[3.25rem] lg:rounded-r-none p-4 sm:p-6 xl:pl-8 lg:pr-0 pt-6 sm:pt-8 pb-6 sm:pb-8 mr-0 shadow-2xl shadow-red-900/30 overflow-hidden">
              {/* Subtle ambient light gradient inside pink backdrop */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-white/15 blur-3xl pointer-events-none rounded-full" />

              {/* Inner Code Editor Terminal Window (Flush to Right Edge) */}
              <div className="relative w-full bg-[#0B0F19] rounded-l-2xl rounded-r-none border-t border-l border-b border-r-0 border-red-900/30 shadow-2xl overflow-hidden font-mono mr-0">
                {/* Editor Tabs Bar */}
                <div className="flex items-center justify-between bg-[#111827]/95 border-b border-slate-800/90 pl-3.5 pr-3 pt-2.5">
                  <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-[78%] scrollbar-none">
                    {Object.keys(serviceSnippets).map((key) => {
                      const isTabActive = activeTab === key;
                      return (
                        <button
                          key={key}
                          onClick={() => setActiveTab(key)}
                          className={`px-3 sm:px-3.5 py-1.5 text-xs font-semibold rounded-t-lg transition-all whitespace-nowrap cursor-pointer ${
                            isTabActive
                              ? 'bg-[#0B0F19] text-white border-t border-l border-r border-slate-800 shadow-sm'
                              : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                          }`}
                        >
                          {serviceSnippets[key].name}
                        </button>
                      );
                    })}
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 text-[11px] text-slate-300 hover:text-white px-2.5 py-1 rounded bg-slate-800/80 hover:bg-slate-700 border border-slate-700/80 transition-colors mb-1 mr-2.5 cursor-pointer shrink-0"
                    title="Copy code"
                  >
                    <span className="material-symbols-outlined text-[14px] text-[#FF4D79]">
                      {copied ? 'check' : 'content_copy'}
                    </span>
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>

                {/* Terminal Code Body */}
                <div className="p-5 sm:p-6 xl:p-7 text-[13px] sm:text-[14px] leading-relaxed overflow-x-auto select-text text-slate-300 min-h-[310px]">
                  <div className="space-y-1 font-mono text-xs sm:text-[13px]">
                    {renderedLines}
                  </div>
                </div>

                {/* Status Bar */}
                <div className="px-5 py-2.5 bg-[#0d121f] border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-slate-300 font-semibold">{activeTab}</span>
                  </div>
                  <div className="flex items-center gap-3 pr-2">
                    <span className="hidden sm:inline text-slate-400">UTF-8</span>
                    <span className="text-pink-400 font-bold uppercase">{activeSnippet.lang}</span>
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
