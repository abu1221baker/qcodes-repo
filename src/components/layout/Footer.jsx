import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { QcodesLogo } from '../../assets';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  return (
    <footer className="w-full bg-[#F8F9FA] text-text-main relative z-10 border-t border-border-subtle">
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-12">
          
          {/* Column 1 & 2: Brand & Company Overview */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={QcodesLogo} alt="Qcodes Infotech Logo" className="h-8 w-auto max-h-8 object-contain" />
              <span className="font-headline font-extrabold text-lg text-text-main">
                Qcodes <span className="text-primary">Infotech</span>
              </span>
            </Link>
            <p className="font-sans text-xs sm:text-sm text-text-muted max-w-sm leading-relaxed">
              We deliver full-spectrum software engineering, intuitive user experiences, scalable cloud infrastructure, and intelligent AI systems that empower businesses to scale globally.
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="w-2 h-2 rounded-full bg-[#0ae448]"></span>
              <span className="font-mono text-xs text-text-muted">
                Chennai, India • Global Client Delivery
              </span>
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Services
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Web &amp; UI Design</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Backend &amp; Server Systems</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">AI &amp; Intelligent Systems</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Cloud &amp; DevOps</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">QA &amp; Software Testing</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Solutions */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Solutions
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Pre-Built IT Packages</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Dedicated IT Teams</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Agile Project Delivery</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Cost-Effective Engagement</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Enterprise Modernization</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">24/7 Support &amp; SLA</Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Quick Links */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Quick Links
            </span>
            <ul className="flex flex-col gap-2 font-sans text-xs text-text-muted">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">Our Services</Link>
              </li>
              <li>
                <Link to="/solutions" className="hover:text-primary transition-colors">Solutions</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-primary transition-colors">Work Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Newsletter */}
          <div className="flex flex-col gap-3">
            <span className="font-mono text-xs text-primary uppercase tracking-wider font-bold">
              Newsletter
            </span>
            <p className="font-sans text-xs text-text-muted leading-relaxed">
              Subscribe to receive the latest tech insights, engineering trends, and company news.
            </p>
            {subscribed ? (
              <div className="p-2.5 rounded-lg bg-green-50 border border-green-200 text-green-700 font-mono text-xs flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 mt-1">
                <input
                  className="w-full px-3 py-2 bg-white text-text-main font-sans text-xs rounded-lg border border-border-strong outline-none focus:border-primary transition-colors placeholder:text-gray-400"
                  placeholder="Enter your email address"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  className="w-full py-2 bg-primary text-white font-headline text-xs font-bold rounded-lg hover:bg-primary-dark transition-colors cursor-pointer shadow-xs"
                  type="submit"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border-subtle font-sans text-xs text-text-muted">
          <div>
            <span>© {new Date().getFullYear()} Qcodes Infotech. All Rights Reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/contact" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Security</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
