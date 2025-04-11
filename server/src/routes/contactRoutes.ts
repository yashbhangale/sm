import express, { RequestHandler } from 'express';
import { createContact, getAllContacts } from '../controllers/contactController';

const router = express.Router();

// POST /api/contact - Create a new contact form submission
router.post('/', createContact as RequestHandler);

// GET /api/contact - Get all contact form submissions
router.get('/', getAllContacts as RequestHandler);

export default router; 