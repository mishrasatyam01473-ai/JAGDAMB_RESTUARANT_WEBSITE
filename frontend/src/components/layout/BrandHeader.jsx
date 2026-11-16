import React, { memo } from 'react';

/**
 * BrandHeader Component (Memoized for Zero-Overhead Re-renders)
 * Features official store typography & artwork logo.
 */
export const BrandHeader = memo(({ name, tagline, logoImage = '/logo.png' }) => (
  <header className="brand-header">
    <div className="brand-emblem-card">
      {/* Official Brand Logo */}
      <div className="brand-logo-wrap">
        <picture>
          <source srcSet="/logo.webp" type="image/webp" />
          <img
            src={logoImage}
            alt="जयवर्धन जगदंब ज्युस बार"
            className="brand-logo-image"
            width="320"
            height="121"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
        <h1 className="sr-only">जयवर्धन जगदंब ज्युस बार</h1>
      </div>

      <div className="brand-title-english">{name}</div>

      <div className="brand-diamond-divider" aria-hidden="true">
        <span className="divider-line left-line"></span>
        <span className="divider-diamond">◆</span>
        <span className="divider-line right-line"></span>
      </div>

      <p className="brand-tagline-script">{tagline}</p>
    </div>
  </header>
));

BrandHeader.displayName = 'BrandHeader';
