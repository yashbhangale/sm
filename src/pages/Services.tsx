import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
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
              Our Services
            </HeroTag>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Expert solutions for your <AccentText>digital</AccentText> needs
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We offer a comprehensive range of services to help your business thrive in the digital landscape.
            </HeroDescription>
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
            <HeroImage src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" alt="Our Services" />
          </HeroImageContainer>
        </HeroContent>
      </HeroSection>

      {/* Services Section */}
      <ServicesSection>
        <SectionTitle>What We Offer</SectionTitle>
        <SectionSubtitle>Tailored solutions to meet your business objectives</SectionSubtitle>
        
        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}
            >
              <ServiceIconContainer>
                <ServiceIcon>{service.icon}</ServiceIcon>
              </ServiceIconContainer>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServiceFeatures>
                {service.features.map((feature, i) => (
                  <ServiceFeature key={i}>
                    <FeatureBullet />
                    {feature}
                  </ServiceFeature>
                ))}
              </ServiceFeatures>
            </ServiceCard>
          ))}
        </ServicesGrid>
      </ServicesSection>

      {/* Process Section */}
      <ProcessSection>
        <SectionTitle style={{ color: 'white' }}>Our Process</SectionTitle>
        <SectionSubtitle style={{ color: 'white', opacity: 0.9 }}>How we deliver exceptional results</SectionSubtitle>
        
        <ProcessSteps>
          {process.map((step, index) => (
            <ProcessStep
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProcessStepNumber>{index + 1}</ProcessStepNumber>
              <ProcessStepContent>
                <ProcessStepTitle>{step.title}</ProcessStepTitle>
                <ProcessStepDescription>{step.description}</ProcessStepDescription>
              </ProcessStepContent>
            </ProcessStep>
          ))}
        </ProcessSteps>
      </ProcessSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to get started?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's discuss your project and create a tailored solution for your business.
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
            <span style={{ marginLeft: '8px', display: 'inline-flex' }}>
              <RiArrowRightLine size={20} />
            </span>
          </CTAButton>
        </CTAContent>
      </CTASection>
    </>
  );
};

// Service data
const services = [
  {
    title: 'Web Design & Development',
    description: 'Create stunning, responsive websites that engage your audience and drive conversions.',
    icon: '🎨',
    features: [
      'Custom website design',
      'Responsive development',
      'E-commerce solutions',
      'Content management systems',
      'Performance optimization'
    ]
  },
  {
    title: 'Mobile App Development',
    description: 'Build intuitive, high-performance mobile applications for iOS and Android platforms.',
    icon: '📱',
    features: [
      'Native iOS & Android apps',
      'Cross-platform solutions',
      'UI/UX design',
      'App store optimization',
      'Ongoing maintenance & support'
    ]
  },
  {
    title: 'Digital Marketing',
    description: 'Increase your online presence and reach your target audience with effective marketing strategies.',
    icon: '📈',
    features: [
      'Search engine optimization (SEO)',
      'Social media marketing',
      'Content marketing',
      'Email campaigns',
      'Analytics & reporting'
    ]
  },
  {
    title: 'Branding & Identity',
    description: 'Develop a strong, consistent brand identity that resonates with your audience and stands out.',
    icon: '✨',
    features: [
      'Logo design',
      'Brand strategy',
      'Visual identity systems',
      'Brand guidelines',
      'Packaging design'
    ]
  },
  {
    title: 'UI/UX Design',
    description: 'Create intuitive, user-friendly interfaces that enhance user experience and satisfaction.',
    icon: '✏️',
    features: [
      'User research & testing',
      'Wireframing & prototyping',
      'Interface design',
      'User journey mapping',
      'Accessibility compliance'
    ]
  },
  {
    title: 'Consulting & Strategy',
    description: 'Get expert advice and develop effective strategies to achieve your business goals.',
    icon: '🚀',
    features: [
      'Digital transformation',
      'Technology consulting',
      'Business analysis',
      'Project management',
      'Growth strategies'
    ]
  }
];

// Process data
const process = [
  {
    title: 'Discovery',
    description: 'We start by understanding your business, goals, and requirements through in-depth discussions and research.'
  },
  {
    title: 'Strategy',
    description: 'Based on our findings, we develop a comprehensive strategy and roadmap tailored to your specific needs.'
  },
  {
    title: 'Design',
    description: 'Our creative team designs solutions that are both aesthetically pleasing and functionally effective.'
  },
  {
    title: 'Development',
    description: 'We bring the designs to life using the latest technologies and best development practices.'
  },
  {
    title: 'Testing',
    description: 'Rigorous testing ensures that the final product meets quality standards and functions flawlessly.'
  },
  {
    title: 'Launch & Support',
    description: 'After launch, we provide ongoing support and maintenance to ensure long-term success.'
  }
];

// Styled Components
const HeroSection = styled.section`
  min-height: 80vh;
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

const ServicesSection = styled.section`
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
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ServiceCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2.5rem;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
  display: flex;
  flex-direction: column;
`;

const ServiceIconContainer = styled.div`
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  margin-bottom: 1.5rem;
`;

const ServiceIcon = styled.div`
  font-size: 2rem;
`;

const ServiceTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ServiceDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 1.5rem;
`;

const ServiceFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ServiceFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const FeatureBullet = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  margin-right: 1rem;
  flex-shrink: 0;
`;

const ProcessSection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => `rgb(88, 79, 255)`} 100%
  );
  padding: 6rem 0;
  color: white;
`;

const ProcessSteps = styled.div`
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  padding: 2rem;
  transition: all ${({ theme }) => theme.transitions.default};
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-5px);
  }
`;

const ProcessStepNumber = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin-right: 1.25rem;
  flex-shrink: 0;
`;

const ProcessStepContent = styled.div`
  flex: 1;
`;

const ProcessStepTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 0.75rem;
`;

const ProcessStepDescription = styled.p`
  opacity: 0.9;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const CTASection = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  padding: 6rem 0;
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
  color: ${({ theme }) => theme.colors.text};
`;

const CTADescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.button};
  
  &:hover {
    background-color: ${({ theme }) => `rgb(88, 79, 255)`};
    transform: translateY(-2px);
  }
`;

export default ServicesPage; 