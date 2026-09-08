import React from 'react';
import Layout from '../components/layout/Layout';
import AboutBanner from '../components/about/AboutBanner';
import AboutMissionVision from '../components/about/AboutMissionVision';
import FoundationsCarousel from '../components/about/FoundationsCarousel';
import AboutCta from '../components/about/AboutCta';

export default function AboutPage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* 1. About Us: Leading the Digital Revolution */}
        <AboutBanner />

        {/* 2. Executive Mission & Vision Deep Dive */}
        <AboutMissionVision />

        {/* 3. 14 Architectural Foundations 3D Hardware-Accelerated Showcase */}
        <FoundationsCarousel />

        {/* 4. Initiate Co-Engineering Call To Action */}
        <AboutCta />
      </div>
    </Layout>
  );
}
