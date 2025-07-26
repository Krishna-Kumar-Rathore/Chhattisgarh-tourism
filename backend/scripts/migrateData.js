// backend/scripts/migrateData.js
const mongoose = require('mongoose');
const Place = require('../models/Place');

const migrateExistingPlaces = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    
    const places = await Place.find({});
    
    for (const place of places) {
      // Remove old fields and update structure
      await Place.updateOne(
        { _id: place._id },
        {
          $unset: {
            location: 1,
            entryFee: 1,
            timings: 1,
            rating: 1
          }
        }
      );
    }
    
    console.log('Migration completed');
    process.exit(0);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  }
};

migrateExistingPlaces();