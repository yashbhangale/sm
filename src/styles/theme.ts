export const theme = {
  colors: {
    primary: '#C9B194', // Sandy gold
    secondary: '#FF6584', // Coral pink
    accent: '#A08963', // Darker gold
    background: '#FCFCFC', // Light color for text on dark backgrounds
    text: '#333333', // Dark gray
    success: '#4CAF50', // Green
    error: '#F44336', // Red
    warning: '#FFC107', // Amber
  },
  fonts: {
    heading: '"Poppins", sans-serif',
    body: '"Inter", sans-serif',
    mono: '"Fira Code", monospace',
  },
  fontSizes: {
    small: '0.875rem',
    medium: '1rem',
    large: '1.25rem',
    xlarge: '1.5rem',
    xxlarge: '2rem',
    xxxlarge: '2.5rem',
  },
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '12px',
    xlarge: '16px',
    round: '50%',
  },
  shadows: {
    small: '0 2px 8px rgba(0, 0, 0, 0.1)',
    medium: '0 4px 12px rgba(0, 0, 0, 0.1)',
    large: '0 8px 24px rgba(0, 0, 0, 0.1)',
    button: '0 4px 12px rgba(108, 99, 255, 0.2)',
  },
  transitions: {
    default: '0.3s ease',
    fast: '0.2s ease',
    slow: '0.5s ease',
  },
  breakpoints: {
    xs: '320px',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  container: {
    padding: {
      small: '1rem',
      default: '2rem',
      large: '4rem',
    },
    maxWidth: '1200px',
  },
  zIndices: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    fixed: 300,
    modal: 400,
    popover: 500,
    tooltip: 600,
  },
  animations: {
    fadeIn: 'fadeIn 0.5s ease-in',
    slideUp: 'slideUp 0.5s ease-out',
    pulse: 'pulse 2s infinite',
    bounce: 'bounce 1s infinite',
  },
};

export type Theme = typeof theme; 