import React, { useState } from 'react';

const serviceSnippets = {
  'WebDev.jsx': {
    name: 'Web Dev',
    lang: 'jsx',
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
    render: () => (
      <div className="space-y-1 font-mono text-xs sm:text-[13px]">
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ createPortal }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'@qcodes/web'</span>
        </div>
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ useEdgeRouting }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'@qcodes/react'</span>
        </div>
        <div className="h-2"></div>
        <div>
          <span className="text-[#c084fc]">export function </span>
          <span className="text-[#67e8f9]">WebPlatform</span>
          <span className="text-white">() {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">const </span>
          <span className="text-white">{'{ isOptimized }'} = </span>
          <span className="text-[#67e8f9]">useEdgeRouting</span>
          <span className="text-white">({'{'}</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">rendering: </span>
          <span className="text-[#86efac]">'Incremental Static Regeneration'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">cacheStrategy: </span>
          <span className="text-[#86efac]">'Global Edge Mesh'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">vitals: </span>
          <span className="text-[#86efac]">'100% Core Web Vitals'</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{'}'})</span>
        </div>
        <div className="h-2"></div>
        <div className="pl-4">
          <span className="text-[#c084fc]">return </span>
          <span className="text-white">(</span>
        </div>
        <div className="pl-8">
          <span className="text-[#67e8f9]">&lt;div </span>
          <span className="text-[#fde047]">className</span>
          <span className="text-white">=</span>
          <span className="text-[#86efac]">"enterprise-portal"</span>
          <span className="text-[#67e8f9]">&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#67e8f9]">&lt;h1&gt;</span>
          <span className="text-white">Modern Scalable Web Architecture</span>
          <span className="text-[#67e8f9]">&lt;/h1&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#67e8f9]">&lt;p&gt;</span>
          <span className="text-pink-400">Sub-120ms P95 API Response Hydration</span>
          <span className="text-[#67e8f9]">&lt;/p&gt;</span>
        </div>
        <div className="pl-8">
          <span className="text-[#67e8f9]">&lt;/div&gt;</span>
        </div>
        <div className="pl-4">
          <span className="text-white">)</span>
        </div>
        <div>
          <span className="text-white">{'}'}</span>
        </div>
      </div>
    )
  },
  'MobileDev.tsx': {
    name: 'Mobile Dev',
    lang: 'tsx',
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
    render: () => (
      <div className="space-y-1 font-mono text-xs sm:text-[13px]">
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">React </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'react'</span>
        </div>
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ View, Text }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'react-native'</span>
        </div>
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ QcodesBiometrics, OfflineSync }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'@qcodes/mobile'</span>
        </div>
        <div className="h-2"></div>
        <div>
          <span className="text-[#c084fc]">export function </span>
          <span className="text-[#67e8f9]">MobileApp</span>
          <span className="text-white">() {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">const </span>
          <span className="text-[#67e8f9]">syncEngine</span>
          <span className="text-white"> = </span>
          <span className="text-[#c084fc]">async </span>
          <span className="text-white">() =&gt; {'{'}</span>
        </div>
        <div className="pl-8">
          <span className="text-[#c084fc]">await </span>
          <span className="text-[#67e8f9]">QcodesBiometrics</span>
          <span className="text-white">.</span>
          <span className="text-[#67e8f9]">authenticate</span>
          <span className="text-white">(</span>
          <span className="text-[#86efac]">'Biometric FaceID'</span>
          <span className="text-white">)</span>
        </div>
        <div className="pl-8">
          <span className="text-[#c084fc]">await </span>
          <span className="text-[#67e8f9]">OfflineSync</span>
          <span className="text-white">.</span>
          <span className="text-[#67e8f9]">hydrateSQLite</span>
          <span className="text-white">({'{ '}</span>
          <span className="text-slate-300">frameRate: </span>
          <span className="text-[#86efac]">'60 FPS'</span>
          <span className="text-white">{' }'})</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{'}'}</span>
        </div>
        <div className="h-2"></div>
        <div className="pl-4">
          <span className="text-[#c084fc]">return </span>
          <span className="text-white">(</span>
        </div>
        <div className="pl-8">
          <span className="text-[#67e8f9]">&lt;View </span>
          <span className="text-[#fde047]">style</span>
          <span className="text-white">={'{{ '}</span>
          <span className="text-slate-300">flex: 1, backgroundColor: </span>
          <span className="text-[#86efac]'">'#0B0F19'</span>
          <span className="text-white">{' }}'}</span>
          <span className="text-[#67e8f9]">&gt;</span>
        </div>
        <div className="pl-12">
          <span className="text-[#67e8f9]">&lt;Text </span>
          <span className="text-[#fde047]">style</span>
          <span className="text-white">={'{{ '}</span>
          <span className="text-slate-300">color: </span>
          <span className="text-[#86efac]">'#FF3366'</span>
          <span className="text-white">{' }}'}</span>
          <span className="text-[#67e8f9]">&gt;</span>
          <span className="text-white">Native iOS &amp; Android Architecture</span>
          <span className="text-[#67e8f9]">&lt;/Text&gt;</span>
        </div>
        <div className="pl-8">
          <span className="text-[#67e8f9]">&lt;/View&gt;</span>
        </div>
        <div className="pl-4">
          <span className="text-white">)</span>
        </div>
        <div>
          <span className="text-white">{'}'}</span>
        </div>
      </div>
    )
  },
  'CloudDevOps.ts': {
    name: 'Cloud & DevOps',
    lang: 'ts',
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
    render: () => (
      <div className="space-y-1 font-mono text-xs sm:text-[13px]">
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ MultiRegionCluster }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'@qcodes/cloud'</span>
        </div>
        <div className="h-2"></div>
        <div>
          <span className="text-[#c084fc]">export const </span>
          <span className="text-[#67e8f9]">deployEnterpriseCloud</span>
          <span className="text-white"> = </span>
          <span className="text-[#c084fc]">async </span>
          <span className="text-white">() =&gt; {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">const </span>
          <span className="text-white">cluster = </span>
          <span className="text-[#c084fc]">await </span>
          <span className="text-[#67e8f9]">MultiRegionCluster</span>
          <span className="text-white">.</span>
          <span className="text-[#67e8f9]">provision</span>
          <span className="text-white">({'{'}</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">kubernetes: </span>
          <span className="text-[#86efac]">'EKS Auto-Scaling 1.30'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">infrastructure: </span>
          <span className="text-[#86efac]">'Terraform IaC'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">uptimeSla: </span>
          <span className="text-[#86efac]">'99.995% High Availability'</span>
          <span className="text-white">,</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">disasterRecovery: </span>
          <span className="text-[#86efac]">'Zero-Data-Loss Failover'</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{'}'})</span>
        </div>
        <div className="h-2"></div>
        <div className="pl-4">
          <span className="text-[#c084fc]">return </span>
          <span className="text-white">cluster.</span>
          <span className="text-[#67e8f9]">deploy</span>
          <span className="text-white">()</span>
        </div>
        <div>
          <span className="text-white">{'}'}</span>
        </div>
      </div>
    )
  },
  'AiModel.py': {
    name: 'AI & Data',
    lang: 'py',
    raw: `from qcodes_ai import NeuralInference, VectorMesh

async def run_predictive_pipeline(input_stream):
    """Real-time enterprise ML inference model"""
    mesh = VectorMesh.connect("qcodes-vector-cluster")
    model = NeuralInference.load("qcodes-deep-v4")
    
    embeddings = await mesh.embed_query(input_stream)
    prediction = await model.predict_async(embeddings)
    return {"accuracy": 0.998, "latency_ms": 14.2, "output": prediction}`,
    render: () => (
      <div className="space-y-1 font-mono text-xs sm:text-[13px]">
        <div>
          <span className="text-[#c084fc]">from </span>
          <span className="text-white">qcodes_ai </span>
          <span className="text-[#c084fc]">import </span>
          <span className="text-[#67e8f9]">NeuralInference</span>
          <span className="text-white">, </span>
          <span className="text-[#67e8f9]">VectorMesh</span>
        </div>
        <div className="h-2"></div>
        <div>
          <span className="text-[#c084fc]">async def </span>
          <span className="text-[#67e8f9]">run_predictive_pipeline</span>
          <span className="text-white">(input_stream):</span>
        </div>
        <div className="pl-4 text-[#94a3b8] italic">
          """Real-time enterprise ML inference model"""
        </div>
        <div className="pl-4">
          <span className="text-white">mesh = </span>
          <span className="text-[#67e8f9]">VectorMesh</span>
          <span className="text-white">.</span>
          <span className="text-[#67e8f9]">connect</span>
          <span className="text-white">(</span>
          <span className="text-[#86efac]">"qcodes-vector-cluster"</span>
          <span className="text-white">)</span>
        </div>
        <div className="pl-4">
          <span className="text-white">model = </span>
          <span className="text-[#67e8f9]">NeuralInference</span>
          <span className="text-white">.</span>
          <span className="text-[#67e8f9]">load</span>
          <span className="text-white">(</span>
          <span className="text-[#86efac]">"qcodes-deep-v4"</span>
          <span className="text-white">)</span>
        </div>
        <div className="h-2"></div>
        <div className="pl-4">
          <span className="text-white">embeddings = </span>
          <span className="text-[#c084fc]">await </span>
          <span className="text-white">mesh.</span>
          <span className="text-[#67e8f9]">embed_query</span>
          <span className="text-white">(input_stream)</span>
        </div>
        <div className="pl-4">
          <span className="text-white">prediction = </span>
          <span className="text-[#c084fc]">await </span>
          <span className="text-white">model.</span>
          <span className="text-[#67e8f9]">predict_async</span>
          <span className="text-white">(embeddings)</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">return </span>
          <span className="text-white">{'{'}</span>
          <span className="text-[#86efac]">"accuracy"</span>
          <span className="text-white">: </span>
          <span className="text-[#fde047]">0.998</span>
          <span className="text-white">, </span>
          <span className="text-[#86efac]">"latency_ms"</span>
          <span className="text-white">: </span>
          <span className="text-[#fde047]">14.2</span>
          <span className="text-white">, </span>
          <span className="text-[#86efac]">"output"</span>
          <span className="text-white">: prediction{'}'}</span>
        </div>
      </div>
    )
  },
  'EnterpriseERP.ts': {
    name: 'Software Systems',
    lang: 'ts',
    raw: `import { EnterpriseCRM, PayrollEngine } from '@qcodes/enterprise'

export function manageWorkforceLifecycle() {
  const crm = new EnterpriseCRM({ encryption: 'AES-256-GCM' })
  const payroll = new PayrollEngine({ automatedTaxes: true })

  return {
    workforceSync: crm.syncGlobalWorkforce(),
    automatedCompliance: payroll.executePayrollRun()
  }
}`,
    render: () => (
      <div className="space-y-1 font-mono text-xs sm:text-[13px]">
        <div>
          <span className="text-[#c084fc]">import </span>
          <span className="text-white">{'{ EnterpriseCRM, PayrollEngine }'} </span>
          <span className="text-[#c084fc]">from </span>
          <span className="text-[#86efac]">'@qcodes/enterprise'</span>
        </div>
        <div className="h-2"></div>
        <div>
          <span className="text-[#c084fc]">export function </span>
          <span className="text-[#67e8f9]">manageWorkforceLifecycle</span>
          <span className="text-white">() {'{'}</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">const </span>
          <span className="text-white">crm = </span>
          <span className="text-[#c084fc]">new </span>
          <span className="text-[#67e8f9]">EnterpriseCRM</span>
          <span className="text-white">({'{ '}</span>
          <span className="text-slate-300">encryption: </span>
          <span className="text-[#86efac]">'AES-256-GCM'</span>
          <span className="text-white">{' }'})</span>
        </div>
        <div className="pl-4">
          <span className="text-[#c084fc]">const </span>
          <span className="text-white">payroll = </span>
          <span className="text-[#c084fc]">new </span>
          <span className="text-[#67e8f9]">PayrollEngine</span>
          <span className="text-white">({'{ '}</span>
          <span className="text-slate-300">automatedTaxes: </span>
          <span className="text-[#c084fc]">true</span>
          <span className="text-white">{' }'})</span>
        </div>
        <div className="h-2"></div>
        <div className="pl-4">
          <span className="text-[#c084fc]">return </span>
          <span className="text-white">{'{'}</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">workforceSync: </span>
          <span className="text-white">crm.</span>
          <span className="text-[#67e8f9]">syncGlobalWorkforce</span>
          <span className="text-white">(),</span>
        </div>
        <div className="pl-8">
          <span className="text-slate-300">automatedCompliance: </span>
          <span className="text-white">payroll.</span>
          <span className="text-[#67e8f9]">executePayrollRun</span>
          <span className="text-white">()</span>
        </div>
        <div className="pl-4">
          <span className="text-white">{'}'}</span>
        </div>
        <div>
          <span className="text-white">{'}'}</span>
        </div>
      </div>
    )
  }
};

export default function ServicesHero() {
  const [activeTab, setActiveTab] = useState('WebDev.jsx');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const raw = serviceSnippets[activeTab]?.raw || '';
    navigator.clipboard.writeText(raw);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const activeSnippet = serviceSnippets[activeTab] || serviceSnippets['WebDev.jsx'];

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
                  {activeSnippet.render()}
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
