import React from 'react';
import Layout from '../components/layout/Layout';
import HeroSection from '../components/home/HeroSection';
import FanCardDeck from '../components/home/FanCardDeck';
import IdeaToRealitySection from '../components/home/IdeaToRealitySection';
import CreateCollaborateShip from '../components/home/CreateCollaborateShip';
import SocialOrbitSection from '../components/home/SocialOrbitSection';
import CtaSection from '../components/home/CtaSection';

export default function HomePage() {
  return (
    <Layout>
      <div className="flex flex-col w-full">
        {/* 1. Hero Section with Code Snippet */}
        <HeroSection />

        {/* 2. Interactive 7-Card Hand-Held Fan Spread Services Section */}
        <FanCardDeck />

        {/* 3. Have an Idea? Let's Make It Real Section (Left Code Snippet + Right Info) */}
        <IdeaToRealitySection />

        {/* 4. Create, Collaborate and Ship Section */}
        <CreateCollaborateShip />

        {/* 5. Interactive Social Media Orbit Constellation Section */}
        <SocialOrbitSection />

        {/* 6. Initiate Enterprise Final Call To Action Section */}
        <CtaSection />
      </div>
    </Layout>
  );
}
