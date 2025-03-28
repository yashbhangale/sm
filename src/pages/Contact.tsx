import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { RiMailLine, RiPhoneLine, RiMapPinLine, RiLinkedinFill, RiTwitterFill, RiInstagramFill } from 'react-icons/ri';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

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
              Get In Touch
            </HeroTag>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's start a <AccentText>conversation</AccentText>
            </HeroTitle>
            <HeroDescription
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're here to answer your questions and discuss how we can help your business grow.
            </HeroDescription>
          </HeroTextContainer>
        </HeroContent>
      </HeroSection>

      {/* Contact Section */}
      <ContactSection>
        <ContactContainer>
          <ContactInfo>
            <InfoTitle>Contact Information</InfoTitle>
            <InfoDescription>
              Feel free to reach out to us through any of these channels. We're always eager to hear from you.
            </InfoDescription>
            
            <ContactDetails>
              <ContactItem>
                <ContactItemIcon>
                  <RiMailLine size={24} />
                </ContactItemIcon>
                <ContactItemContent>
                  <ContactItemTitle>Email</ContactItemTitle>
                  <ContactItemValue>info@yourbrand.com</ContactItemValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactItemIcon>
                  <RiPhoneLine size={24} />
                </ContactItemIcon>
                <ContactItemContent>
                  <ContactItemTitle>Phone</ContactItemTitle>
                  <ContactItemValue>+1 (555) 123-4567</ContactItemValue>
                </ContactItemContent>
              </ContactItem>
              
              <ContactItem>
                <ContactItemIcon>
                  <RiMapPinLine size={24} />
                </ContactItemIcon>
                <ContactItemContent>
                  <ContactItemTitle>Address</ContactItemTitle>
                  <ContactItemValue>123 Innovation Street, Tech City, CA 94043</ContactItemValue>
                </ContactItemContent>
              </ContactItem>
            </ContactDetails>
            
            <SocialLinks>
              <SocialTitle>Follow Us</SocialTitle>
              <SocialIcons>
                <SocialIcon href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <RiLinkedinFill size={22} />
                </SocialIcon>
                <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <RiTwitterFill size={22} />
                </SocialIcon>
                <SocialIcon href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <RiInstagramFill size={22} />
                </SocialIcon>
              </SocialIcons>
            </SocialLinks>
          </ContactInfo>
          
          <ContactFormContainer
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FormTitle>Send a Message</FormTitle>
            
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Your Name</FormLabel>
                <FormInput 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <FormInput 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormSelect 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Support</option>
                  <option value="quote">Request a Quote</option>
                  <option value="partnership">Partnership Opportunity</option>
                </FormSelect>
              </FormGroup>
              
              <FormGroup>
                <FormLabel htmlFor="message">Your Message</FormLabel>
                <FormTextarea 
                  id="message" 
                  name="message" 
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required 
                />
              </FormGroup>
              
              <FormSubmitContainer>
                {submitSuccess && (
                  <SuccessMessage>
                    Thank you for your message! We'll get back to you soon.
                  </SuccessMessage>
                )}
                
                {submitError && (
                  <ErrorMessage>
                    {submitError}
                  </ErrorMessage>
                )}
                
                <FormSubmit 
                  type="submit" 
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </FormSubmit>
              </FormSubmitContainer>
            </ContactForm>
          </ContactFormContainer>
        </ContactContainer>
      </ContactSection>

      {/* Map Section */}
      <MapSection>
        <MapContainer>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3168.639290621044!2d-122.08385492361054!3d37.42199997210249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02425dad8f%3A0x6c296c66619367e0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1685924824806!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="YourBrand Location"
          ></iframe>
        </MapContainer>
      </MapSection>
    </>
  );
};

// Styled Components
const HeroSection = styled.section`
  min-height: 50vh;
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

const ContactSection = styled.section`
  padding: 6rem 0;
  background-color: ${({ theme }) => theme.colors.background};
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 2.5rem;
  max-width: ${({ theme }) => theme.container.maxWidth};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.container.padding.default};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.medium};
`;

const InfoTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 1rem;
`;

const InfoDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 2.5rem;
  opacity: 0.9;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
`;

const ContactItemIcon = styled.div`
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContactItemContent = styled.div`
  flex: 1;
`;

const ContactItemTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  margin-bottom: 0.25rem;
`;

const ContactItemValue = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  opacity: 0.9;
`;

const SocialLinks = styled.div`
  margin-top: auto;
`;

const SocialTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  margin-bottom: 1rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialIcon = styled.a`
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: white;
    color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const ContactFormContainer = styled(motion.div)`
  background-color: white;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.small};
`;

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xlarge};
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormLabel = styled.label`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text};
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const FormInput = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  }
`;

const FormSelect = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  }
`;

const FormTextarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => `rgba(0, 0, 0, 0.1)`};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  resize: vertical;
  min-height: 120px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => `rgba(108, 99, 255, 0.1)`};
  }
`;

const FormSubmitContainer = styled.div`
  margin-top: 1rem;
`;

const FormSubmit = styled(motion.button)`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.default};
  box-shadow: ${({ theme }) => theme.shadows.button};
  width: 100%;
  
  &:hover {
    background-color: ${({ theme }) => `rgb(88, 79, 255)`};
  }
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: rgba(76, 175, 80, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.success};
  color: ${({ theme }) => theme.colors.success};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const ErrorMessage = styled.div`
  padding: 1rem;
  background-color: rgba(244, 67, 54, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  margin-bottom: 1.5rem;
  font-size: ${({ theme }) => theme.fontSizes.medium};
`;

const MapSection = styled.section`
  height: 400px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const MapContainer = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export default ContactPage; 