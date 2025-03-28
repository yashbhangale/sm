import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTextContainer>
            <HeroTag
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to YourBrand
            </HeroTag>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Creating <AccentText>beautiful</AccentText> digital experiences
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We help businesses transform their ideas into reality with modern design and cutting-edge technology.
            </HeroDescription>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PrimaryButton to="/contact">
                Get Started
                <div style={{ marginLeft: '8px', display: 'inline-flex' }}> </div>
              </PrimaryButton>
              <SecondaryButton to="/services">Our Services</SecondaryButton>
            </HeroButtons>
          </HeroTextContainer>
          <HeroImageContainer
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8, 
              delay: 0.2,
              type: 'spring',
              stiffness: 100
            }}
          >
            <HeroImage src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Digital Experience" />
          </HeroImageContainer>
        </HeroContent>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>What we can do for you</SectionSubtitle>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Call to Action */}
      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to start your project?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's create something amazing together. Get in touch with us today.
          </CTADescription>
          <CTAButton 
            to="/contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 10px 25px rgba(108, 99, 255, 0.3)'
            }}
          >
            Contact Us
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

// Dummy data
const features = [
  {
    title: 'Web Design',
    description: 'Creating beautiful, responsive websites that engage your audience and represent your brand.',
    icon: '🎨'
  },
  {
    title: 'Web Development',
    description: 'Building robust web applications with the latest technologies for optimal performance.',
    icon: '💻'
  },
  {
    title: 'Mobile Apps',
    description: 'Crafting intuitive mobile applications for iOS and Android platforms.',
    icon: '📱'
  },
  {
    title: 'UI/UX Design',
    description: 'Designing user interfaces that are both aesthetically pleasing and easy to use.',
    icon: '✏️'
  },
  {
    title: 'SEO Optimization',
    description: 'Improving your search engine rankings to increase visibility and traffic.',
    icon: '📈'
  },
  {
    title: 'Brand Strategy',
    description: 'Developing comprehensive brand strategies that align with your business goals.',
    icon: '🚀'
  }
];

// Styled Components
const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.background} 0%,
    ${({ theme }) => theme.colors.background} 100%
  );
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    text-align: center;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
`;

const HeroTextContainer = styled.div`
  flex: 1;
  max-width: 600px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-bottom: 3rem;
  }
`;

const HeroTag = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin-bottom: 1.5rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: ${({ theme }) => theme.fontSizes.xxxlarge};
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  }
`;

const AccentText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: ${({ theme }) => `rgba(108, 99, 255, 0.2)`};
    z-index: -1;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.button};
  
  &:hover {
    background-color: ${({ theme }) => `rgb(45, 36, 3)`};
    transform: translateY(-2px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2rem;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border: 1px solid ${({ theme }) => `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: ${({ theme }) => `rgba(0, 0, 0, 0.05)`};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const HeroImageContainer = styled(motion.div)`
  flex: 1;
  max-width: 550px;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.large};
`;

const HeroImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const FeaturesSection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 6rem 0;
`;

const SectionTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  text-align: center;
  margin-bottom: 1rem;
`;

const SectionSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 4rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
`;

const FeatureCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => `rgb(71, 60, 0)`} 100%
  );
  padding: 6rem 0;
  color: white;
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  padding: 0 ${({ theme }) => theme.container.padding.default};
`;

const CTATitle = styled(motion.h2)`
  font-size: ${({ theme }) => theme.fontSizes.xxlarge};
  margin-bottom: 1.5rem;
`;

const CTADescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all ${({ theme }) => theme.transitions.default};
`;

export default HomePage; 