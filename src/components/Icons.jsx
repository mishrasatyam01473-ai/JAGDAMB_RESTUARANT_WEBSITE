import React from 'react';

// BROTOCOL Icon - Modern Tech / QR Node Protocol Badge
export const BrotocolIcon = ({ color = "#FF6B00", size = 18 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: `${size}px`, height: `${size}px`, display: 'inline-block', verticalAlign: 'middle' }}
  >
    <rect x="12" y="2" width="14" height="14" rx="3" transform="rotate(45 12 2)" stroke={color} strokeWidth="2.2" fill={`${color}22`} />
    <circle cx="12" cy="12" r="3" fill={color} />
  </svg>
);

// Juice Glass / Refreshing Drink Icon for Menu button
export const MenuDrinkIcon = ({ color = "#141416" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: '26px', height: '26px', color }}
  >
    <path d="M7 2v2h10V2H7zm1.5 4l1.2 14.5c.08.95.88 1.5 1.8 1.5h4.98c.93 0 1.73-.55 1.8-1.5L19.5 6h-11zm8.3 2l-.8 10h-4l-.8-10h5.6z" />
    <path d="M15.5 1l-2 5h1.5l1.5-5h-1z" />
  </svg>
);

// Solid 5-point star matching the Review Us button
export const StarIcon = ({ color = "#FFFFFF" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: '28px', height: '28px', color }}
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

// Share icon with 3 nodes matching the Social Media button
export const ShareIcon = ({ color = "#FFFFFF" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ width: '26px', height: '26px', color }}
  >
    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
  </svg>
);

// Close (X) icon for modals
export const CloseIcon = ({ color = "#FFFFFF", size = 20 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2.4"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);
