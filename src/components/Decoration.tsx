type Props = { className?: string };

export function Squiggle({ className }: Props) {
  return (
    <svg
      viewBox="0 0 120 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2 12 Q 14 2 26 12 T 50 12 T 74 12 T 98 12 T 118 12" />
    </svg>
  );
}

export function Dotted({ className }: Props) {
  return (
    <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
      <circle
        cx="30"
        cy="30"
        r="22"
        stroke="currentColor"
        strokeWidth="3"
        strokeDasharray="2 8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Burst({ className }: Props) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} aria-hidden="true">
      <path
        d="M40 8 L46 32 L70 40 L46 48 L40 72 L34 48 L10 40 L34 32 Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Wash({ className }: Props) {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id="wash-yellow" cx="20%" cy="20%" r="40%">
          <stop offset="0%" stopColor="#F4C95D" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#F4C95D" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wash-pink" cx="80%" cy="35%" r="45%">
          <stop offset="0%" stopColor="#E27396" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#E27396" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wash-purple" cx="65%" cy="95%" r="55%">
          <stop offset="0%" stopColor="#B084CC" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#B084CC" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="wash-green" cx="10%" cy="100%" r="50%">
          <stop offset="0%" stopColor="#7DBE7A" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#7DBE7A" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#wash-yellow)" />
      <rect width="800" height="600" fill="url(#wash-pink)" />
      <rect width="800" height="600" fill="url(#wash-purple)" />
      <rect width="800" height="600" fill="url(#wash-green)" />
    </svg>
  );
}
