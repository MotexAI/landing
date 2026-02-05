import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Stories } from '../components/Stories';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stories />
      </main>
      <Footer />
    </div>);
}
