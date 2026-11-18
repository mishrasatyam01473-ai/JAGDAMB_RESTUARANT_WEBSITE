import React, { useState, useEffect, useCallback, useRef } from 'react';
import { CloseIcon } from '../Icons';

/**
 * MenuModal Component (Hardware-Accelerated & RAF-Throttled)
 * Built for 120Hz smooth mobile touch and pinch-to-zoom interactions.
 * Fully restores home page to 1.0 scale and top scroll position on close.
 */
export const MenuModal = ({ isOpen, onClose, menuImage }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [viewportStyle, setViewportStyle] = useState({});
  const rafRef = useRef(null);
  const isClosingRef = useRef(false);

  /**
   * Snaps mobile browser visual viewport back to 1.0 and resets home scroll to (0, 0).
   * @param {boolean} shouldPopHistory - Whether to pop browser history entry
   */
  const handleClose = useCallback((shouldPopHistory = true) => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }

    setIsZoomed(false);
    setViewportStyle({});

    // 1. Force mobile browser visual viewport to snap zoom back to 1.0
    const meta = document.querySelector('meta[name="viewport"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'width=device-width, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover'
      );
      setTimeout(() => {
        meta.setAttribute(
          'content',
          'width=device-width, initial-scale=1.0, viewport-fit=cover'
        );
      }, 250);
    }

    // 2. Universally reset scroll to top (0, 0)
    try {
      window.scrollTo(0, 0);
    } catch {
      // safe fallback
    }
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    // 3. Cleanly pop history if closed via on-screen button or keypress
    if (shouldPopHistory && window.location.hash === '#menu') {
      window.history.back();
    }

    onClose();

    setTimeout(() => {
      isClosingRef.current = false;
    }, 100);
  }, [onClose]);

  // Lock background scroll and sync URL hash while open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (window.location.hash !== '#menu') {
      window.history.pushState({ modal: 'menu' }, '', '#menu');
    }

    const handlePopState = () => handleClose(false);
    window.addEventListener('popstate', handlePopState);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isOpen, handleClose]);

  // Escape key and RAF-throttled visual viewport syncing
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose(true);
    };

    const updateViewport = () => {
      if (window.visualViewport) {
        const vv = window.visualViewport;
        const scale = vv.scale || 1;
        setViewportStyle({
          top: `${vv.offsetTop + 10}px`,
          left: `${vv.offsetLeft}px`,
          width: `${vv.width}px`,
          transform: `scale(${1 / scale})`,
          transformOrigin: 'top center',
        });
      }
      rafRef.current = null;
    };

    const handleViewportChange = () => {
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateViewport);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleViewportChange);
      window.visualViewport.addEventListener('scroll', handleViewportChange);
      updateViewport();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleViewportChange);
        window.visualViewport.removeEventListener('scroll', handleViewportChange);
      }
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  return (
    <div
      className="mobile-menu-viewer-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Jagdamb Juice Bar Official Menu"
    >
      {/* Floating Close Button - Pinned at top of visible screen */}
      <div className="mobile-menu-top-bar" style={viewportStyle}>
        <button
          type="button"
          className="mobile-menu-close-btn"
          onClick={() => handleClose(true)}
          aria-label="Close menu"
        >
          <CloseIcon size={18} color="#ffffff" />
          <span className="close-btn-text">Close</span>
        </button>
      </div>

      {/* Scrollable & Pinch-Zoomable Image Canvas */}
      <div className="mobile-menu-scroll-canvas">
        <div className="mobile-menu-image-container">
          <img
            src={menuImage}
            alt="जयवर्धन जगदंब ज्युस बार - Official Menu"
            className={`mobile-menu-full-image ${isZoomed ? 'zoomed-fit' : ''}`}
            onClick={() => setIsZoomed((prev) => !prev)}
            title="Tap to zoom in/out, or pinch to zoom"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </div>
  );
};
