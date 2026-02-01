import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustedBy } from '../components/TrustedBy';
import { Features } from '../components/Features';
import { TheProblem } from '../components/TheProblem';
import { CaseManagement } from '../components/CaseManagement';
import { Visibility } from '../components/Visibility';
import { PredictiveIntelligence } from '../components/PredictiveIntelligence';
import { LitigationFinance } from '../components/LitigationFinance';
import { Footer } from '../components/Footer';
export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <TheProblem />
        <CaseManagement />
        <Visibility />
        <PredictiveIntelligence />
        <LitigationFinance />
      </main>
      <Footer />
    </div>);

}