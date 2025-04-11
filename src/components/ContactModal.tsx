import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface Contact {
  id: number;
  user: string;
  name: string;
  email: string;
  details: string;
  message: string;
  createdAt: string;
  updatedAt: string;
}

interface ContactModalProps {
  contact: Contact | null;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ contact, onClose }) => {
  if (!contact) return null;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <ModalContent
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ type: 'spring', damping: 15 }}
        onClick={(e) => e.stopPropagation()}
      >
        <ModalHeader>
          <h2>Contact Details</h2>
          <CloseButton onClick={onClose}>✕</CloseButton>
        </ModalHeader>
        
        <ModalBody>
          <Field>
            <Label>ID:</Label>
            <Value>{contact.id}</Value>
          </Field>
          
          <Field>
            <Label>Name:</Label>
            <Value>{contact.name}</Value>
          </Field>
          
          <Field>
            <Label>Email:</Label>
            <Value>{contact.email}</Value>
          </Field>
          
          <Field>
            <Label>Details:</Label>
            <Value>{contact.details || '-'}</Value>
          </Field>
          
          <Field>
            <Label>Message:</Label>
            <MessageValue>{contact.message}</MessageValue>
          </Field>
          
          <Field>
            <Label>Date Submitted:</Label>
            <Value>{formatDate(contact.createdAt)}</Value>
          </Field>
        </ModalBody>
        
        <ModalFooter>
          <Button onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </ModalOverlay>
  );
};

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled(motion.div)`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  
  h2 {
    margin: 0;
    font-size: 1.25rem;
  }
`;

const ModalBody = styled.div`
  padding: 20px;
  flex-grow: 1;
`;

const ModalFooter = styled.div`
  padding: 16px 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.7;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 1;
  }
`;

const Field = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Value = styled.div`
  font-size: 1rem;
`;

const MessageValue = styled.div`
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.05);
  padding: 12px;
  border-radius: 4px;
  white-space: pre-wrap;
  max-height: 200px;
  overflow-y: auto;
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default ContactModal; 