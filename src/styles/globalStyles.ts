import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  /* Import Google Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap');

  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.semiBold};
    line-height: 1.2;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: color ${theme.transitions.fast};
    
    &:hover {
      color: ${theme.colors.secondary};
    }
  }

  img, svg {
    max-width: 100%;
    height: auto;
  }

  button, input, textarea, select {
    font-family: inherit;
    font-size: inherit;
    outline: none;
  }

  ul, ol {
    list-style: none;
  }

  /* Animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }

  /* Loading animation */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* Container class */
  .container {
    width: 100%;
    max-width: ${theme.container.maxWidth};
    margin: 0 auto;
    padding: 0 ${theme.container.padding.default};
  }

  /* Section spacing */
  section {
    padding: 5rem 0;
  }

  /* Utility classes */
  .text-center {
    text-align: center;
  }

  .text-right {
    text-align: right;
  }

  .flex {
    display: flex;
  }

  .flex-center {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .grid {
    display: grid;
  }

  /* Component base styles */
  .card, .content-box, .section-content {
    background-color: ${theme.colors.background};
    padding: 1.5rem;
    border-radius: ${theme.borderRadius.medium};
    box-shadow: ${theme.shadows.medium};
    margin-bottom: 1.5rem;
  }

  /* Button styles */
  button, .button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    border: none;
    border-radius: ${theme.borderRadius.small};
    padding: 0.75rem 1.5rem;
    font-weight: ${theme.fontWeights.medium};
    cursor: pointer;
    transition: all ${theme.transitions.fast};
    
    &:hover {
      background-color: ${theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: ${theme.shadows.button};
    }
  }

  /* Form elements */
  input, textarea, select {
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.primary};
    border-radius: ${theme.borderRadius.small};
    padding: 0.75rem 1rem;
    color: ${theme.colors.text};
    width: 100%;
    margin-bottom: 1rem;
    
    &:focus {
      border-color: ${theme.colors.secondary};
      box-shadow: 0 0 0 2px rgba(201, 177, 148, 0.2);
    }
  }

  /* Navigation items */
  nav a {
    color: ${theme.colors.text};
    
    &:hover, &.active {
      color: ${theme.colors.primary};
    }
  }
`;

export default GlobalStyles; 