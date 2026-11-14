import React from 'react';

// Custom Vector Logo matching the two coconuts with juice and straw from the image
export const CoconutsLogoIcon = ({ className = "w-28 h-20" }) => (
  <svg
    viewBox="0 0 160 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width: '130px', height: '82px', display: 'block', margin: '0 auto' }}
    role="img"
    aria-label="Fresh Tender Coconuts with Juice Splash"
  >
    <defs>
      <linearGradient id="coconutGreenLeft" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ade80" />
        <stop offset="40%" stopColor="#22c55e" />
        <stop offset="100%" stopColor="#14532d" />
      </linearGradient>

      <linearGradient id="coconutGreenRight" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22c55e" />
        <stop offset="50%" stopColor="#16a34a" />
        <stop offset="100%" stopColor="#0f3e24" />
      </linearGradient>

      <linearGradient id="juiceYellowOrange" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffe600" />
        <stop offset="50%" stopColor="#ff9900" />
        <stop offset="100%" stopColor="#ff5500" />
      </linearGradient>

      <linearGradient id="leafGreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#86efac" />
        <stop offset="100%" stopColor="#166534" />
      </linearGradient>

      <filter id="juiceDropShadow" x="-10%" y="-10%" width="130%" height="130%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#ff5500" floodOpacity="0.4" />
      </filter>
    </defs>

    {/* Mint Sprig on bottom-right */}
    <g transform="translate(110, 68) rotate(15)">
      <path d="M0 10 Q15 5 28 0" stroke="#15803d" strokeWidth="2" strokeLinecap="round" />
      <path d="M6 8 C10 4 14 3 17 6 C17 9 13 11 8 9 Z" fill="#22c55e" />
      <path d="M14 6 C18 2 22 2 24 5 C24 8 20 9 16 7 Z" fill="#16a34a" />
      <path d="M20 4 C24 0 28 0 30 3 C30 6 26 7 22 5 Z" fill="#15803d" />
    </g>

    {/* LEFT COCONUT */}
    <g>
      {/* Straw Left */}
      <path d="M48 40 L38 18 L32 21" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M42 28 L39 20" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />

      {/* Leaves Left */}
      <path d="M48 34 C44 24 52 20 57 23 C60 26 57 33 50 35 Z" fill="url(#leafGreenGrad)" />
      <path d="M54 36 C58 26 67 25 70 29 C71 33 66 38 57 37 Z" fill="url(#leafGreenGrad)" />

      {/* Coconut Body Left */}
      <circle cx="56" cy="56" r="26" fill="url(#coconutGreenLeft)" />
      {/* Coconut shaded rim */}
      <path d="M34 50 C36 68 46 78 60 76 C72 74 78 64 78 52 C70 58 46 58 34 50 Z" fill="#0f3e24" opacity="0.4" />

      {/* Overflowing Golden Mango Juice */}
      <path
        d="M38 48 C42 42 48 44 54 42 C60 40 66 45 74 46 C74 54 71 58 67 61 C64 64 61 58 58 63 C55 58 52 64 48 60 C44 57 41 62 38 56 Z"
        fill="url(#juiceYellowOrange)"
        filter="url(#juiceDropShadow)"
      />

      {/* Dripping juice drops */}
      <path d="M46 61 C45 66 46 69 47 69 C48 69 49 66 48 61 Z" fill="#ff7700" />
      <path d="M60 62 C59 67 60 70 61 70 C62 70 63 67 62 62 Z" fill="#ff7700" />
      <circle cx="47" cy="73" r="1.8" fill="#ffa000" />
      <circle cx="61" cy="74" r="1.5" fill="#ffa000" />
      {/* Shine reflection */}
      <path d="M38 52 C36 60 40 68 45 72" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </g>

    {/* RIGHT COCONUT */}
    <g>
      {/* Straw Right */}
      <path d="M100 38 L114 16 L120 18" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M106 28 L111 20" stroke="#ff5500" strokeWidth="3" strokeLinecap="round" />

      {/* Leaves Right */}
      <path d="M96 34 C92 24 100 20 105 23 C108 26 105 33 98 35 Z" fill="url(#leafGreenGrad)" />
      <path d="M102 36 C106 26 115 25 118 29 C119 33 114 38 105 37 Z" fill="url(#leafGreenGrad)" />

      {/* Coconut Body Right */}
      <circle cx="106" cy="54" r="27" fill="url(#coconutGreenRight)" />
      {/* Coconut shaded rim */}
      <path d="M84 48 C86 66 96 77 110 75 C122 73 129 63 129 50 C120 56 96 56 84 48 Z" fill="#082b18" opacity="0.45" />

      {/* Overflowing Golden Juice Right */}
      <path
        d="M86 46 C90 40 98 42 104 40 C110 38 116 43 124 44 C124 52 121 57 117 59 C114 62 111 57 108 61 C105 57 102 62 98 58 C94 55 91 60 87 54 Z"
        fill="url(#juiceYellowOrange)"
        filter="url(#juiceDropShadow)"
      />

      {/* Dripping juice drops */}
      <path d="M96 59 C95 64 96 68 97 68 C98 68 99 64 98 59 Z" fill="#ff7700" />
      <path d="M110 60 C109 65 110 69 111 69 C112 69 113 65 112 60 Z" fill="#ff7700" />
      <circle cx="97" cy="72" r="1.8" fill="#ffa000" />
      <circle cx="111" cy="73" r="1.5" fill="#ffa000" />
      {/* Shine reflection */}
      <path d="M88 50 C86 58 90 66 95 70" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
    </g>
  </svg>
);

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


