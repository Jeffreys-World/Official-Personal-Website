/* Decorative NYC-themed stickers — classic enamel-pin style, aria-hidden.
   Each accepts className for placement/rotation/size from the caller. */

type StickerProps = { className?: string };

export function SubwayToken({ className }: StickerProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <circle cx="48" cy="48" r="44" fill="#d4a017" stroke="#8a6a0e" strokeWidth="4" />
      <circle cx="48" cy="48" r="34" fill="none" stroke="#8a6a0e" strokeWidth="2" strokeDasharray="4 3" />
      <text
        x="48"
        y="41"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#5c470a"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1"
      >
        GOOD FOR
      </text>
      <text
        x="48"
        y="58"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill="#5c470a"
        fontFamily="system-ui, sans-serif"
        letterSpacing="1"
      >
        ONE RIDE
      </text>
      <circle cx="48" cy="70" r="3.5" fill="#5c470a" />
    </svg>
  );
}

export function HeartMark({ className }: StickerProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <rect x="6" y="6" width="84" height="84" rx="10" fill="#f5f0e6" stroke="#1a1a1a" strokeWidth="4" />
      <text
        x="48"
        y="44"
        textAnchor="middle"
        fontSize="26"
        fontWeight="800"
        fill="#1a1a1a"
        fontFamily="Georgia, 'Times New Roman', serif"
      >
        I
      </text>
      <path
        d="M48 78 39 68c-4-4.5-4-11 .5-14.5 3.8-3 8.5-1.6 8.5 1 0-2.6 4.7-4 8.5-1 4.5 3.5 4.5 10 .5 14.5L48 78Z"
        fill="#d0312d"
      />
      <text
        x="48"
        y="60"
        textAnchor="middle"
        fontSize="20"
        fontWeight="800"
        fill="#1a1a1a"
        fontFamily="Georgia, 'Times New Roman', serif"
        letterSpacing="2"
      >
        NY
      </text>
    </svg>
  );
}

export function Pigeon({ className }: StickerProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <circle cx="48" cy="48" r="44" fill="#e8eef2" stroke="#3b4a54" strokeWidth="4" />
      {/* body */}
      <ellipse cx="46" cy="56" rx="20" ry="14" fill="#7d8f9b" />
      {/* wing */}
      <path d="M34 52c6-8 20-9 27-3-6 8-19 9-27 3Z" fill="#5c6f7c" />
      {/* head */}
      <circle cx="63" cy="41" r="8" fill="#7d8f9b" />
      {/* iridescent neck patch */}
      <path d="M58 46c3 2 7 2 9-1-2 4-6 5-9 4v-3Z" fill="#4e8a6d" />
      {/* eye */}
      <circle cx="66" cy="39" r="1.8" fill="#1a1a1a" />
      {/* beak */}
      <path d="M70 42l6 2-6 2v-4Z" fill="#e0a13d" />
      {/* legs */}
      <path d="M42 69v6m8-6v6" stroke="#c2523a" strokeWidth="2.5" strokeLinecap="round" />
      {/* crumb */}
      <circle cx="30" cy="74" r="2" fill="#b98a4a" />
    </svg>
  );
}

export function WaterTower({ className }: StickerProps) {
  return (
    <svg
      viewBox="0 0 96 96"
      className={className}
      aria-hidden="true"
      role="presentation"
    >
      <rect x="6" y="6" width="84" height="84" rx="46" fill="#f2e8dc" stroke="#4a3527" strokeWidth="4" />
      {/* legs */}
      <path d="M34 78 40 54m22 24-6-24M31 70h34" stroke="#4a3527" strokeWidth="3" strokeLinecap="round" />
      {/* tank */}
      <path d="M36 34h24l-2 22H38l-2-22Z" fill="#8f6b4e" stroke="#4a3527" strokeWidth="3" strokeLinejoin="round" />
      {/* staves */}
      <path d="M44 34v22m8-22v22" stroke="#4a3527" strokeWidth="1.5" />
      {/* roof */}
      <path d="M33 34l15-12 15 12H33Z" fill="#6b4c34" stroke="#4a3527" strokeWidth="3" strokeLinejoin="round" />
      {/* finial */}
      <path d="M48 22v-6" stroke="#4a3527" strokeWidth="3" strokeLinecap="round" />
      <circle cx="48" cy="14" r="2.5" fill="#4a3527" />
    </svg>
  );
}
