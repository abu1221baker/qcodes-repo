import React, { useState } from 'react';

const serviceOptions = [
  { id: 'srv-web', label: 'Web Design', icon: 'language' },
  { id: 'srv-software', label: 'Software Dev', icon: 'terminal' },
  { id: 'srv-crm', label: 'CRM & Payroll', icon: 'badge' },
  { id: 'srv-ecommerce', label: 'E-Commerce', icon: 'shopping_bag' },
  { id: 'srv-ai', label: 'AI / ML', icon: 'memory' },
  { id: 'srv-cloud', label: 'Cloud / DevOps', icon: 'cloud' },
  { id: 'srv-uiux', label: 'UI / UX Design', icon: 'palette' },
  { id: 'srv-3d', label: '3D / WebGL', icon: 'view_in_ar' },
];

export default function ContactCyberForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    businessEmail: '',
    countryCode: '+91',
    phoneNum: '',
    companyName: '',
    services: ['Web Design'],
    budgetTier: '$10,000 – $40,000 USD',
    timeline: '1 - 3 months',
    preferredContact: 'Email',
    projectMessage: '',
    ndaAccepted: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleServiceToggle = (label) => {
    setFormData((prev) => {
      const exists = prev.services.includes(label);
      const newServices = exists
        ? prev.services.filter((s) => s !== label)
        : [...prev.services, label];
      return { ...prev, services: newServices };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      setFormData({
        fullName: '',
        businessEmail: '',
        countryCode: '+91',
        phoneNum: '',
        companyName: '',
        services: ['Web Design'],
        budgetTier: '$10,000 – $40,000 USD',
        timeline: '1 - 3 months',
        preferredContact: 'Email',
        projectMessage: '',
        ndaAccepted: true,
      });

      setTimeout(() => {
        setSubmitted(false);
      }, 10000);
    }, 1200);
  };

  return (
    <div className="bg-white rounded-2xl border border-border-subtle shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-6 sm:p-8 lg:p-10 w-full">
      
      {/* Form Header */}
      <div className="pb-6 mb-6 border-b border-border-subtle">
        <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#1C1C1C] tracking-tight">
          Get in Touch
        </h2>
        <p className="font-sans text-sm text-text-muted mt-2 leading-relaxed">
          Tell us about your project and we'll get back to you within 24 hours.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">
        
        {/* Section 1: Contact Details */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-sm font-bold text-[#1C1C1C] uppercase tracking-wide flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold">1</span>
            Contact Details
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="fullName">
                Full Name <span className="text-primary">*</span>
              </label>
              <input
                className="cyber-input"
                id="fullName"
                name="fullName"
                required
                placeholder="John Doe"
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="businessEmail">
                Business Email <span className="text-primary">*</span>
              </label>
              <input
                className="cyber-input"
                id="businessEmail"
                name="businessEmail"
                required
                placeholder="you@company.com"
                type="email"
                value={formData.businessEmail}
                onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="phoneNum">
                Phone Number
              </label>
              <div className="flex gap-2 min-w-0">
                <select
                  className="cyber-input !w-24 sm:!w-28 !px-2 text-xs shrink-0 bg-white cursor-pointer"
                  id="countryCode"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFormData({ ...formData, countryCode: e.target.value })}
                >
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+971">🇦🇪 +971</option>
                  <option value="+61">🇦🇺 +61</option>
                  <option value="+65">🇸🇬 +65</option>
                  <option value="+49">🇩🇪 +49</option>
                </select>
                <input
                  className="cyber-input flex-grow min-w-0"
                  id="phoneNum"
                  name="phoneNum"
                  placeholder="98765 43210"
                  type="tel"
                  value={formData.phoneNum}
                  onChange={(e) => setFormData({ ...formData, phoneNum: e.target.value })}
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="companyName">
                Company / Organization
              </label>
              <input
                className="cyber-input"
                id="companyName"
                name="companyName"
                placeholder="Acme Technologies Inc."
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              />
            </div>
          </div>
        </div>

        {/* Section 2: Services */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-sm font-bold text-[#1C1C1C] uppercase tracking-wide flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold">2</span>
            Services You Need
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
            {serviceOptions.map((service) => {
              const isChecked = formData.services.includes(service.label);
              return (
                <div key={service.id} className="min-w-0">
                  <input
                    type="checkbox"
                    id={service.id}
                    checked={isChecked}
                    onChange={() => handleServiceToggle(service.label)}
                    className="tech-pill-checkbox"
                  />
                  <label htmlFor={service.id} className="tech-pill-label">
                    <span className="material-symbols-outlined text-[15px] sm:text-[16px] text-primary shrink-0">{service.icon}</span>
                    <span className="truncate">{service.label}</span>
                  </label>
                </div>
              );
            })}
          </div>
        </div>

        {/* Section 3: Budget & Timeline */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-sm font-bold text-[#1C1C1C] uppercase tracking-wide flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold">3</span>
            Budget & Timeline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { id: 'budget-growth', label: '< $10,000 USD', desc: 'MVP / Quick Launch' },
              { id: 'budget-scale', label: '$10,000 – $40,000 USD', desc: 'Full Product Build' },
              { id: 'budget-ent', label: '$40,000+ USD', desc: 'Enterprise Solution' },
            ].map((budget) => {
              const isChecked = formData.budgetTier === budget.label;
              return (
                <div key={budget.id}>
                  <input
                    type="radio"
                    id={budget.id}
                    name="budgetTier"
                    checked={isChecked}
                    onChange={() => setFormData({ ...formData, budgetTier: budget.label })}
                    className="tech-radio"
                  />
                  <label htmlFor={budget.id} className="tech-radio-label">
                    <span className="tech-title font-sans text-xs font-bold text-text-main">{budget.label}</span>
                    <span className="font-sans text-[11px] text-text-muted">{budget.desc}</span>
                  </label>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="timeline">
                Expected Timeline
              </label>
              <select
                className="cyber-input bg-white cursor-pointer"
                id="timeline"
                name="timeline"
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
              >
                <option value="Immediate (1-4 weeks)">1 – 4 Weeks</option>
                <option value="1 - 3 months">1 – 3 Months</option>
                <option value="3 - 6 months">3 – 6 Months</option>
                <option value="Flexible / Discovery Phase">Flexible / Not Sure Yet</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="font-sans text-xs font-semibold text-[#374151]" htmlFor="preferredContact">
                Preferred Contact Method
              </label>
              <select
                className="cyber-input bg-white cursor-pointer"
                id="preferredContact"
                name="preferredContact"
                value={formData.preferredContact}
                onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
              >
                <option value="Email">Email</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Google Meet / Zoom">Google Meet / Zoom</option>
                <option value="WhatsApp">WhatsApp</option>
              </select>
            </div>
          </div>
        </div>

        {/* Section 4: Project Details */}
        <div className="flex flex-col gap-4">
          <h3 className="font-headline text-sm font-bold text-[#1C1C1C] uppercase tracking-wide flex items-center gap-2">
            <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-[11px] font-bold">4</span>
            Project Details <span className="text-primary text-[10px] font-normal ml-1">*Required</span>
          </h3>

          <div className="flex flex-col gap-1.5">
            <textarea
              className="cyber-input resize-none h-32"
              id="projectMessage"
              name="projectMessage"
              required
              placeholder="Describe your project goals, requirements, and any specific features you need..."
              value={formData.projectMessage}
              onChange={(e) => setFormData({ ...formData, projectMessage: e.target.value })}
            ></textarea>
            <div className="flex items-center justify-between font-sans text-[11px] text-text-muted px-1">
              <span>Feel free to include links to docs, Figma designs, or repos.</span>
              <span>{formData.projectMessage.length} / 2000</span>
            </div>
          </div>
        </div>

        {/* Submit Section */}
        <div className="flex flex-col gap-4 pt-5 border-t border-border-subtle">
          <label className="flex items-start gap-2.5 cursor-pointer font-sans text-xs text-text-muted leading-relaxed">
            <input
              type="checkbox"
              required
              checked={formData.ndaAccepted}
              onChange={(e) => setFormData({ ...formData, ndaAccepted: e.target.checked })}
              className="accent-[#E21E4C] mt-0.5 rounded cursor-pointer"
            />
            <span>I agree to let Qcodes Infotech process this inquiry under their privacy policy and NDA terms.</span>
          </label>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
            <div className="flex items-center gap-2 font-sans text-xs text-text-muted">
              <span className="material-symbols-outlined text-green-600 text-base">lock</span>
              <span>Your data is encrypted and secure</span>
            </div>

            <button
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl font-headline text-sm font-bold shadow-lg transition-all cursor-pointer group ${
                isSubmitting
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : submitted
                  ? 'bg-green-600 text-white'
                  : 'bg-primary hover:bg-primary-dark text-white shadow-primary/30 hover:shadow-xl'
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              <span>
                {isSubmitting
                  ? 'Sending...'
                  : submitted
                  ? 'Message Sent!'
                  : 'Send Message'}
              </span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                {submitted ? 'check_circle' : 'send'}
              </span>
            </button>
          </div>

          {/* Success Confirmation */}
          {submitted && (
            <div className="p-5 rounded-xl bg-[#F0FDF4] border border-green-200 flex items-start gap-3 mt-2">
              <span className="material-symbols-outlined text-green-600 text-xl mt-0.5">check_circle</span>
              <div className="flex flex-col gap-1">
                <span className="font-headline text-sm font-bold text-[#166534]">Message Sent Successfully</span>
                <p className="font-sans text-xs text-[#4B5563] leading-relaxed">
                  Thank you for reaching out! A member of our team will review your project details and get back to you within 24 hours.
                </p>
              </div>
            </div>
          )}
        </div>

      </form>
    </div>
  );
}
