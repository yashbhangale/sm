import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCloseLine, RiMenuLine, RiArrowRightLine } from 'react-icons/ri';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer scrolled={scrolled}>
      <NavbarContent>
        <NavbarLogo 
          to="/"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <LogoText>YourBrand</LogoText>
        </NavbarLogo>

        {/* Desktop Menu */}
        <NavbarLinks>
          {navItems.map((item, index) => (
            <NavLinkWrapper 
              key={item.path}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 * index }}
            >
              <NavLink to={item.path} onClick={closeMenu}>
                {item.label}
                <NavLinkUnderline 
                  layoutId="underline"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              </NavLink>
            </NavLinkWrapper>
          ))}
        </NavbarLinks>

        <MenuButton onClick={toggleMenu}>
          {isOpen ? <div><RiCloseLine size={24} /></div> : <div><RiMenuLine size={24} /></div>}
        </MenuButton>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <MobileMenu
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <MobileMenuItems>
                {navItems.map((item, index) => (
                  <MobileNavItem 
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <MobileNavLink to={item.path} onClick={closeMenu}>
                      {item.label}
                    </MobileNavLink>
                  </MobileNavItem>
                ))}
              </MobileMenuItems>
            </MobileMenu>
          )}
        </AnimatePresence>
      </NavbarContent>
    </NavbarContainer>
  );
};

// Styled Components
const NavbarContainer = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.sticky};
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ scrolled, theme }) => scrolled ? theme.shadows.medium : 'none'};
  background-color: ${({ scrolled, theme }) => 
    scrolled ? theme.colors.background : 'rgba(255, 255, 255, 0.95)'};
  height: 80px;
`;

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  height: 100%;
`;

const NavbarLogo = styled(motion(Link))`
  text-decoration: none;
  display: flex;
  align-items: center;
`;

const LogoText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.3);
  margin: 0;
`;

const NavbarLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLinkWrapper = styled(motion.li)`
  height: 100%;
  display: flex;
  align-items: center;
`;

const NavLink = styled(Link)`
  position: relative;
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinkUnderline = styled(motion.div)`
  position: absolute;
  bottom: -5px;
  left: 0;
  height: 2px;
  width: 0;
  background: ${({ theme }) => theme.colors.primary};
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  right: 0;
  width: 250px;
  height: calc(100vh - 80px);
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  padding: 2rem;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileMenuItems = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavItem = styled(motion.li)``;

const MobileNavLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSizes.large};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export default Navbar; 