import React, { memo } from 'react';
import { MenuDrinkIcon, StarIcon, ShareIcon } from '../Icons';

/**
 * ActionNav Component (Memoized for High-FPS Touch Responsiveness)
 */
export const ActionNav = memo(({ onOpenMenu, reviewUrl, socialUrl }) => (
  <nav className="actions-nav" aria-label="Explore Options">
    {/* 1. Menu Button */}
    <button
      type="button"
      className="action-card btn-menu"
      onClick={onOpenMenu}
      aria-label="View Menu"
    >
      <div className="card-left-icon-container">
        <MenuDrinkIcon color="#141416" />
      </div>
      <span className="card-label">Menu</span>
    </button>

    {/* 2. Review Us Button */}
    <a
      href={reviewUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="action-card btn-review"
      aria-label="Write a Review on Google"
    >
      <div className="card-left-icon-container">
        <StarIcon color="#FFFFFF" />
      </div>
      <span className="card-label">Review Us</span>
    </a>

    {/* 3. Social Media Button */}
    <a
      href={socialUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="action-card btn-social"
      aria-label="Follow us on Instagram"
    >
      <div className="card-left-icon-container">
        <ShareIcon color="#FFFFFF" />
      </div>
      <span className="card-label">Social Media</span>
    </a>
  </nav>
));

ActionNav.displayName = 'ActionNav';
