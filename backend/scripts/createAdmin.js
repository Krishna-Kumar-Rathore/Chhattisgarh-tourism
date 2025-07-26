const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const createAdmin = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@chhattisgarh.com' });
    
    if (existingAdmin) {
      console.log('Admin user already exists');
      process.exit(0); 
    }

    // Create admin user
    const adminUser = await User.create({
      name: 'Admin User',
      email: 'admin@chhattisgarh.com',
      password: 'admin123', // This will be hashed automatically by the User model
      role: 'admin'
    });

    console.log('Admin user created successfully:');
    console.log('Email:', adminUser.email);
    console.log('Role:', adminUser.role);
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error);
    process.exit(1);
  }
};

createAdmin();