const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['historical', 'natural', 'religious', 'adventure', 'cultural'],
    required: true
  },
  images: [{
    filename: String,
    data: String, // Base64 encoded image data
    contentType: String, // image/jpeg, image/png, etc.
    size: Number // File size in bytes
  }],
  bestTimeToVisit: String,
  facilities: [String],
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);