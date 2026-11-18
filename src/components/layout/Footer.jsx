import React, { memo } from 'react';
import { BrotocolIcon } from '../Icons';

/**
 * Footer Component (Memoized Static Branding)
 */
export const Footer = memo(() => (
  <footer className="footer-section">
    <div className="brotocol-footer-badge" aria-label="Powered By BROTOCOL">
      <BrotocolIcon color="#FF7A00" size={17} />
      <span className="powered-text">
        Powered By <strong className="brotocol-name">BROTOCOL</strong>
      </span>
    </div>
  </footer>
));

Footer.displayName = 'Footer';
