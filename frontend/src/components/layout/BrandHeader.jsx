import React, { memo } from 'react';
import { CoconutsLogoIcon } from '../Icons';

/**
 * BrandHeader Component (Memoized for Zero-Overhead Re-renders)
 */
export const BrandHeader = memo(({ name, tagline, branch }) => (
  <header className="brand-header">
    <div className="brand-emblem-card">
      {branch && (
        <div className="branch-badge-seal" aria-label={branch} title={branch}>
          <span className="branch-seal-text">शाखा क्र.</span>
          <span className="branch-seal-num">३७</span>
          <span className="branch-seal-city">वसई</span>
        </div>
      )}

      <div className="coconuts-vector-wrap">
        <CoconutsLogoIcon />
      </div>

      <div className="brand-title-banner">
        <span className="brand-prefix-red">जयवर्धन</span>
        <h1 className="brand-main-devanagari">जगदंब</h1>
        <span className="brand-suffix-red">ज्युस बार</span>
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
