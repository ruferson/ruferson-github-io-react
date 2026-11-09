/** Pixel-art paths (viewBox 16x16) for retro 8-bit mode. Keys map to Material Symbols names. */
export const pixelIcons = {
  sports_esports: 'M2 5h12v6H2zM4 7h2v2H4zM10 7h1v1h-1zm2 1h1v1h-1zm-1 1h1v1h-1z',
  dark_mode: 'M6 2h4v2H6zm4 2h2v2h-2zm2 2h2v4h-2zm-2 4h2v2h-2zm-4 2h4v2H6zm-2-4h2v2H4zm0-4h2v4H4zm2-2h2v2H6z',
  light_mode: 'M7 1h2v2H7zm0 12h2v2H7zM1 7h2v2H1zm12 0h2v2h-2zM5 5h6v6H5z',
  print: 'M4 2h8v3H4zM2 6h12v5H2zm2 6h8v3H4zm7-4h2v1h-2z',
  check_circle: 'M12 4h2v2h-2zm-2 2h2v2h-2zm-2 2h2v2H8zm-2 2h2v2H6zm-2-2h2v2H4zm-2-2h2v2H2z',
  location_on: 'M6 2h4v2H6zm4 2h2v4h-2zm-2 4h2v2H8zm-2 2h2v2H6zm0-6h4v2H6z',
  call: 'M3 3h4v3H5v2h2v2h2V9h2V7h3v4h-2v2H9v-2H7V9H5V7H3z',
  content_copy: 'M3 3h7v7H3zm3 3h7v7H6z',
  mail: 'M2 4h12v8H2zm2 2v2h8V6zm2 2v2h4V8z',
  code: 'M5 4H3v2H1v4h2v2h2v-2H3V6h2zm6 0h2v2h2v4h-2v2h-2v-2h2V6h-2z',
  github: 'M5 4H3v2H1v4h2v2h2v-2H3V6h2zm6 0h2v2h2v4h-2v2h-2v-2h2V6h-2z',
  work: 'M6 2h4v2H6zm-4 3h12v8H2zm2 2v2h8V7z',
  school: 'M8 2L1 5l7 3 7-3zm0 5L3 5.5V9l5 2 5-2V5.5zM14 8v3h1V8z',
  workspace_premium: 'M6 2h4v4H6zm0 4h4v6H6zm2 6h2v2H8z',
  emoji_events: 'M3 3h10v4H3zm2 4h6v2H5zm2 2h2v3H7zm-2 3h6v2H5z',
  stars: 'M7 2h2v3H7zm-3 3h8v2H4zm-2 2h12v2H2zm2 2h8v2H4zm3 2h2v3H7z',
  psychology: 'M4 3h8v2H4zm-2 2h12v6H2zm2 6h8v2H4z',
  build: 'M10 2h4v4h-2V4h-2zm-6 6h4v2H4zm-2 2h4v2H2zm-1 2h3v3H1z',
  volunteer_activism: 'M3 4h3v2H3zm7 0h3v2h-3zM2 6h12v3H2zm2 3h8v2H4zm2 2h4v2H6z',
} as const

export type IconName = keyof typeof pixelIcons

export const githubModernPath =
  'M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z'
