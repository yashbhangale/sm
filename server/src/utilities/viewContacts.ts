import { sequelize } from '../config/db';
import Contact from '../models/Contact';

// Function to view all contacts
async function viewAllContacts() {
  try {
    // Connect to the database
    await sequelize.authenticate();
    console.log('Connected to the database.');

    // Find all contacts
    const contacts = await Contact.findAll();
    console.log('\nAll Contacts:');
    console.log('-------------');
    
    if (contacts.length === 0) {
      console.log('No contacts found in the database.');
    } else {
      contacts.forEach((contact) => {
        console.log(`ID: ${contact.id}`);
        console.log(`Name: ${contact.name}`);
        console.log(`Email: ${contact.email}`);
        console.log(`Details: ${contact.details}`);
        console.log(`Message: ${contact.message}`);
        console.log(`Created At: ${contact.createdAt}`);
        console.log('-------------');
      });
      console.log(`Total contacts: ${contacts.length}`);
    }
  } catch (error) {
    console.error('Error viewing contacts:', error);
  } finally {
    // Close the database connection
    await sequelize.close();
  }
}

// Execute the function
viewAllContacts(); 