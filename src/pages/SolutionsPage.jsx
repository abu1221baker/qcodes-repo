import React from 'react';
import Layout from '../components/layout/Layout';
import SolutionsHero from '../components/solutions/SolutionsHero';
import SolutionsCloudSection from '../components/solutions/SolutionsCloudSection';
import SolutionsDataSection from '../components/solutions/SolutionsDataSection';
import SolutionsCta from '../components/solutions/SolutionsCta';

export default function SolutionsPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* Hero Section: Delivery Lifecycle & Methodology with solutions.svg */}
        <SolutionsHero />

        {/* Cloud Computing Infrastructure Flow & 3D Backbone */}
        <SolutionsCloudSection />

        {/* Substrate 03: Data Analytics & Workload Spectrum */}
        <SolutionsDataSection />

        {/* Bottom Autonomous Deployment CTA */}
        <SolutionsCta />
      </div>
    </Layout>
  );
}
