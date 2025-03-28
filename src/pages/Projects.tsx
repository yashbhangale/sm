import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowRightLine, RiGithubFill, RiExternalLinkLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

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
              Our Portfolio
            </HeroTag>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Showcasing our <AccentText>creative</AccentText> work
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Browse through our diverse portfolio of projects delivered with passion and precision.
            </HeroDescription>
          </HeroTextContainer>
        </HeroContent>
      </HeroSection>

      {/* Projects Section */}
      <ProjectsSection>
        <SectionTitle>Featured Projects</SectionTitle>
        <SectionSubtitle>Some of our best work showcasing our skills and expertise</SectionSubtitle>
        
        <FilterContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {['all', 'web', 'mobile', 'branding', 'ui/ux'].map((category) => (
            <FilterButton 
              key={category}
              isActive={filter === category}
              onClick={() => setFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        
        <ProjectsGrid>
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  boxShadow: '0 15px 30px rgba(0, 0, 0, 0.1)'
                }}
                layout
              >
                <ProjectImageContainer>
                  <ProjectImage src={project.image} alt={project.title} />
                  <ProjectOverlay>
                    <ProjectLinks>
                      {project.github && (
                        <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                          <RiGithubFill size={22} />
                        </ProjectLink>
                      )}
                      {project.demo && (
                        <ProjectLink href={project.demo} target="_blank" rel="noopener noreferrer">
                          <RiExternalLinkLine size={22} />
                        </ProjectLink>
                      )}
                    </ProjectLinks>
                  </ProjectOverlay>
                </ProjectImageContainer>
                <ProjectCategory>{project.category}</ProjectCategory>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.technologies.map((tech, i) => (
                    <ProjectTag key={i}>{tech}</ProjectTag>
                  ))}
                </ProjectTags>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsSection>

      {/* CTA Section */}
      <CTASection>
        <CTAContent>
          <CTATitle
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Have a project in mind?
          </CTATitle>
          <CTADescription
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's bring your ideas to life. Reach out to us for a consultation.
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

// Project data
const projects = [
  {
    title: 'Modern E-commerce Platform',
    description: 'A fully responsive e-commerce website with user authentication, product filtering, and secure payment processing.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'web',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile application for tracking workouts, nutrition, and progress with personalized plans and analytics.',
    image: 'https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'mobile',
    technologies: ['React Native', 'Firebase', 'Redux', 'D3.js'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    title: 'Corporate Identity Redesign',
    description: 'A complete rebranding project for a tech startup, including logo design, color palette, and brand guidelines.',
    image: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'branding',
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    github: null,
    demo: 'https://example.com/'
  },
  {
    title: 'Banking Dashboard UI',
    description: 'A modern, intuitive dashboard interface for a banking application with real-time data visualization.',
    image: 'https://images.unsplash.com/photo-1553484771-047a44eee27a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'ui/ux',
    technologies: ['Figma', 'Sketch', 'Principle'],
    github: null,
    demo: 'https://example.com/'
  },
  {
    title: 'Real Estate Marketplace',
    description: 'A platform connecting property buyers and sellers with advanced search functionality and virtual tours.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'web',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  },
  {
    title: 'Delivery Tracking App',
    description: 'A mobile app for tracking package deliveries in real-time with notification alerts and address management.',
    image: 'https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80',
    category: 'mobile',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Maps API'],
    github: 'https://github.com/',
    demo: 'https://example.com/'
  }
];

// Styled Components
const HeroSection = styled.section`
  min-height: 60vh;
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
  justify-content: center;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  width: 100%;
  text-align: center;
`;

const HeroTextContainer = styled.div`
  max-width: 800px;
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

const ProjectsSection = styled.section`
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
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.text};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FilterContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled(motion.button)<{ isActive: boolean }>`
  padding: 0.5rem 1.5rem;
  background-color: ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : 'transparent'};
  color: ${({ isActive, theme }) => 
    isActive ? 'white' : theme.colors.text};
  border: 1px solid ${({ isActive, theme }) => 
    isActive ? theme.colors.primary : `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ isActive, theme }) => 
      isActive ? theme.colors.primary : `rgba(0, 0, 0, 0.05)`};
    color: ${({ isActive, theme }) => 
      isActive ? 'white' : theme.colors.primary};
  }
`;

const ProjectsGrid = styled(motion.div)`
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

const ProjectCard = styled(motion.div)`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.shadows.small};
  transition: all ${({ theme }) => theme.transitions.default};
`;

const ProjectImageContainer = styled.div`
  position: relative;
  height: 250px;
  overflow: hidden;
  
  &:hover {
    & > div {
      opacity: 1;
    }
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform ${({ theme }) => theme.transitions.default};
  
  ${ProjectImageContainer}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity ${({ theme }) => theme.transitions.default};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const ProjectCategory = styled.span`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  background-color: ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.small};
  margin: 1.5rem 1.5rem 0.75rem;
  text-transform: capitalize;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.large};
  margin: 0 1.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin: 0 1.5rem 1.5rem;
  line-height: 1.5;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0 1.5rem 1.5rem;
`;

const ProjectTag = styled.span`
  padding: 0.2rem 0.75rem;
  background-color: ${({ theme }) => `rgba(0, 0, 0, 0.05)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.text};
`;

const CTASection = styled.section`
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.primary} 0%,
    ${({ theme }) => `rgb(88, 79, 255)`} 100%
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

export default ProjectsPage; 