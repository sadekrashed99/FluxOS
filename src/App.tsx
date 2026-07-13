/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import TopNavBar from './components/TopNavBar';
import HeroSection from './components/HeroSection';
import TrustStrip from './components/TrustStrip';
import PatternInterrupt from './components/PatternInterrupt';
import PatternInterruptChecklist from './components/PatternInterruptChecklist';
import StakesSection from './components/StakesSection';
import ProcessSection from './components/ProcessSection';
import WhyFluxOS from './components/WhyFluxOS';
import ExpertiseSection from './components/ExpertiseSection';
import Testimonials from './components/Testimonials';
import CoverageSection from './components/CoverageSection';
import GuaranteeBanner from './components/GuaranteeBanner';
import FluxOSGuarantee from './components/FluxOSGuarantee';
import FAQSection from './components/FAQSection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import MobileFixedBanner from './components/MobileFixedBanner';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');

  const handleOpenQuote = (issueName: string = '') => {
    setSelectedIssue(issueName);
    setIsModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsModalOpen(false);
    setSelectedIssue('');
  };

  return (
    <div className="bg-brand-navy min-h-screen font-sans text-gray-300 selection:bg-brand-yellow/30 selection:text-white">
      {/* Sticky top navigation */}
      <TopNavBar onOpenQuote={() => handleOpenQuote()} />

      {/* Main Content Layout */}
      <main className="relative">
        <HeroSection onOpenQuote={() => handleOpenQuote()} />
        
        <TrustStrip />
        
        <PatternInterrupt onOpenQuote={handleOpenQuote} />
        
        <PatternInterruptChecklist />
        
        <StakesSection onOpenQuote={() => handleOpenQuote()} />
        
        <ProcessSection />
        
        <WhyFluxOS />
        
        <ExpertiseSection onOpenQuote={handleOpenQuote} />
        
        <Testimonials />
        
        <CoverageSection />
        
        <GuaranteeBanner />
        
        <FluxOSGuarantee onOpenQuote={() => handleOpenQuote()} />
        
        <FAQSection />
        
        <FinalCTA onOpenQuote={() => handleOpenQuote()} />
      </main>

      {/* Footer information */}
      <Footer />

      {/* Interactive Contact / Quote Modal popup */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={handleCloseQuote}
        initialIssue={selectedIssue}
      />

      {/* Persistent floating mobile layout */}
      <MobileFixedBanner onOpenQuote={() => handleOpenQuote()} />
    </div>
  );
}
