# Contact Form API Server

This is a simple Express.js server with SQLite database integration for handling contact form submissions from the React frontend.

## Running with Docker

The easiest way to run this server is using Docker:

```bash
# From the server directory
docker build -t contact-form-server .
docker run -p 8000:8000 contact-form-server
```

For running the complete application (frontend + backend), see the [main README](../README.md) for Docker Compose instructions.

## Prerequisites (for manual setup)

- Node.js (v14 or later)

## Manual Setup

1. Install dependencies:
```bash
npm install
```

2. The SQLite database will be automatically created in the server directory when you start the server.

## Development

To run the server in development mode with hot reloading:
```bash
npm run dev
```

## Production

Build the TypeScript code:
```bash
npm run build
```

Start the server:
```bash
npm start
```

## Utility Scripts

View all contacts in the database:
```bash
npm run view-contacts
```

## API Endpoints

- `POST /api/contact` - Submit a new contact form
  - Required fields: name, email, message
  - Optional fields: details, user

## Database Schema

The contact form submissions are stored in the SQLite database with the following schema:

- id: Integer (primary key, auto-increment)
- user: String (required)
- name: String (required)
- email: String (required)
- details: String (optional)
- message: String (required)
- createdAt: Date (automatically set)
- updatedAt: Date (automatically updated) 