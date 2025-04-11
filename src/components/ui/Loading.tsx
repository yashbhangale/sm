import React from 'react';
import styled, { keyframes, DefaultTheme } from 'styled-components';
import { motion } from 'framer-motion';

interface LoadingProps {
  fullScreen?: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fullScreen = false }) => {
  return (
    <LoadingWrapper 
      fullScreen={fullScreen}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <LoadingContent>
        <Spinner />
        <LoadingText
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading...
        </LoadingText>
      </LoadingContent>
    </LoadingWrapper>
  );
};

const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const pulseAnimation = keyframes`
  0% { opacity: 0.6; }
  50% { opacity: 1; }
  100% { opacity: 0.6; }
`;

interface WrapperProps {
  fullScreen: boolean;
  theme: DefaultTheme;
}

const LoadingWrapper = styled(motion.div)<WrapperProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  ${({ fullScreen, theme }) => 
    fullScreen &&
    `
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${theme.colors.background};
      z-index: ${theme.zIndices.fixed};
    `
  }
  ${({ fullScreen }) => 
    !fullScreen &&
    `
      height: 200px;
    `
  }
`;

const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid rgba(108, 99, 255, 0.1);
  border-radius: 50%;
  border-top: 4px solid ${({ theme }) => theme.colors.primary};
  animation: ${spinAnimation} 1s linear infinite;
  margin-bottom: 1rem;
`;

const LoadingText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  animation: ${pulseAnimation} 1.5s ease-in-out infinite;
  margin: 0;
`;

export default Loading; 