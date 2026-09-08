import React from 'react';
import Layout from '../components/layout/Layout';
import ContactHero from '../components/contact/ContactHero';
import ContactCyberForm from '../components/contact/ContactCyberForm';
import ContactFaq from '../components/contact/ContactFaq';
import '../styles/contact-page.css';

export default function ContactPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full max-w-full overflow-x-hidden tech-grid-bg">
        {/* Hero Header */}
        <ContactHero />

        {/* Main Contact Form Section */}
        <section className="max-w-[1440px] mx-auto px-4 sm:px-8 py-12 lg:py-16 w-full">
          <div className="max-w-3xl mx-auto">
            <ContactCyberForm />
          </div>
        </section>

        {/* FAQ Knowledge Base Section */}
        <ContactFaq />
      </div>
    </Layout>
  );
}
