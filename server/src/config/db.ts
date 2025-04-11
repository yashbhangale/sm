import { Sequelize } from 'sequelize';
import path from 'path';

// Create a SQLite database connection
const dbPath = path.join(__dirname, '../../contact_db.sqlite');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: dbPath,
  logging: false // Set to true to see SQL queries in console
});

const connectDB = async (): Promise<void> => {
  try {
    await sequelize.authenticate();
    console.log('SQLite Database connected successfully');
    
    // Sync all models
    await sequelize.sync();
    console.log('All models were synchronized successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
    process.exit(1);
  }
};

export { sequelize, connectDB }; 