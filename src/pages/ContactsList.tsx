import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import ContactModal from '../components/ContactModal';

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

const ContactsList: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://localhost:8000/api/contact');
        setContacts(response.data.data);
        setLoading(false);
      } catch (err: any) {
        console.error('Error fetching contacts:', err);
        setError(err.response?.data?.message || 'Failed to load contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const handleViewDetails = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleCloseModal = () => {
    setSelectedContact(null);
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;
  }

  if (error) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>{error}</div>;
  }

  return (
    <PageContainer>
      <Header>
        <h2>Contact Submissions</h2>
        <RefreshButton onClick={() => window.location.reload()}>Refresh</RefreshButton>
      </Header>
      
      {contacts.length === 0 ? (
        <EmptyState>No contact submissions found.</EmptyState>
      ) : (
        <div>
          <ContactCount>{contacts.length} submission(s) found</ContactCount>
          <TableWrapper>
            <ContactTable>
              <thead>
                <TableRow>
                  <TableHeader>ID</TableHeader>
                  <TableHeader>Name</TableHeader>
                  <TableHeader>Email</TableHeader>
                  <TableHeader>Details</TableHeader>
                  <TableHeader>Message</TableHeader>
                  <TableHeader>Date</TableHeader>
                  <TableHeader>Actions</TableHeader>
                </TableRow>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell>{contact.id}</TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.email}</TableCell>
                    <TableCell>{contact.details || '-'}</TableCell>
                    <TableCell>
                      <MessagePreview>
                        {contact.message}
                      </MessagePreview>
                    </TableCell>
                    <TableCell>{formatDate(contact.createdAt)}</TableCell>
                    <TableCell>
                      <ViewButton onClick={() => handleViewDetails(contact)}>
                        View Details
                      </ViewButton>
                    </TableCell>
                  </TableRow>
                ))}
              </tbody>
            </ContactTable>
          </TableWrapper>
        </div>
      )}

      <AnimatePresence>
        {selectedContact && (
          <ContactModal
            contact={selectedContact}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </PageContainer>
  );
};

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const RefreshButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const EmptyState = styled.p`
  text-align: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  font-size: 1.1rem;
`;

const ContactCount = styled.p`
  margin-bottom: 16px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.text};
`;

const TableWrapper = styled.div`
  overflow-x: auto;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ContactTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(odd) {
    background-color: rgba(0, 0, 0, 0.02);
  }
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`;

const TableHeader = styled.th`
  padding: 16px;
  text-align: left;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

const TableCell = styled.td`
  padding: 12px 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const MessagePreview = styled.div`
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ViewButton = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.85rem;
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export default ContactsList; 