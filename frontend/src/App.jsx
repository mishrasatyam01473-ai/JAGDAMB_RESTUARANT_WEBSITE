import React, { useState, useCallback } from 'react';
import './App.css';
import { BrandHeader } from './components/layout/BrandHeader';
import { ActionNav } from './components/layout/ActionNav';
import { Footer } from './components/layout/Footer';
import { MenuModal } from './components/modals/MenuModal';
import { restaurantData } from './data/restaurantData';

/**
 * App Component
 * Clean, lightweight landing orchestrator for Jagdamb Juice Bar.
 */
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const openMenu = useCallback(() => setIsMenuOpen(true), []);
  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="website-root">
      {/* Ambient Lighting Atmosphere */}
      <div className="ambient-backdrop" aria-hidden="true">
        <div className="ambient-glow top-orange-glow" />
        <div className="ambient-glow mid-tropical-glow" />
        <div className="ambient-glow bottom-glow" />
      </div>

      {/* Main Centered Content Container */}
      <div className="landing-wrapper">
        <main className="landing-content">
          {/* Visual Brand Identity Header */}
          <BrandHeader
            name={restaurantData.name}
            tagline={restaurantData.tagline}
            branch={restaurantData.branch}
            logoImage={restaurantData.logoImage}
          />

          {/* Welcome Greeting */}
          <section className="welcome-section" aria-labelledby="welcome-heading">
            <h2 id="welcome-heading" className="welcome-title">
              {restaurantData.welcomeTitle}
            </h2>
            <p className="welcome-subtitle">
              {restaurantData.welcomeSubtitle}
            </p>
          </section>

          {/* Primary Actions: Menu, Review Us, Social Media */}
          <ActionNav
            onOpenMenu={openMenu}
            reviewUrl={restaurantData.reviewUrl}
            socialUrl={restaurantData.socialUrl}
          />

          {/* Static Branding Footer */}
          <Footer />
        </main>
      </div>

      {/* Mobile Menu Viewer Modal */}
      <MenuModal
        isOpen={isMenuOpen}
        onClose={closeMenu}
        menuImage={restaurantData.menuImage}
      />
    </div>
  );
}

export default App;
