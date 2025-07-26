const Place = require('../models/Place');
const User = require('../models/User');

// Helper function to validate image data
const validateImageData = (imageData) => {
  if (!imageData.data || !imageData.contentType) {
    throw new Error('Invalid image data');
  }
  
  // Check if it's a valid image type
  const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp', 'image/bmp'];
  if (!validTypes.includes(imageData.contentType.toLowerCase())) {
    throw new Error('Invalid image type. Supported types: JPEG, PNG, GIF, WebP, BMP');
  }
  
  // Check file size (5MB limit)
  const maxSize = 5 * 1024 * 1024; // 5MB in bytes
  if (imageData.size > maxSize) {
    throw new Error('Image size must be less than 5MB');
  }
  
  return true;
};

exports.getAllPlaces = async (req, res) => {
  try {
    const { city, category, search, featured } = req.query;
    let filter = {};

    if (city) filter.city = new RegExp(city, 'i');
    if (category) filter.category = category;
    if (featured) filter.featured = featured === 'true';
    if (search) {
      filter.$or = [
        { name: new RegExp(search, 'i') },
        { description: new RegExp(search, 'i') },
        { city: new RegExp(search, 'i') }
      ];
    }

    const places = await Place.find(filter).sort({ createdAt: -1 });
    res.json({ success: true, places });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getPlaceById = async (req, res) => {
  try {
    const place = await Place.findById(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json({ success: true, place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createPlace = async (req, res) => {
  try {
    const { images, ...placeData } = req.body;
    
    // Validate images if provided
    if (images && images.length > 0) {
      for (const image of images) {
        validateImageData(image);
      }
    }
    
    const place = await Place.create({
      ...placeData,
      images: images || []
    });
    
    res.status(201).json({ success: true, place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePlace = async (req, res) => {
  try {
    const { images, ...placeData } = req.body;
    
    // Validate images if provided
    if (images && images.length > 0) {
      for (const image of images) {
        validateImageData(image);
      }
    }
    
    const place = await Place.findByIdAndUpdate(
      req.params.id, 
      {
        ...placeData,
        images: images || []
      },
      {
        new: true,
        runValidators: true
      }
    );
    
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    
    res.json({ success: true, place });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePlace = async (req, res) => {
  try {
    const place = await Place.findByIdAndDelete(req.params.id);
    if (!place) {
      return res.status(404).json({ message: 'Place not found' });
    }
    res.json({ success: true, message: 'Place deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.toggleWishlist = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const placeId = req.params.id;

    const isInWishlist = user.wishlist.includes(placeId);

    if (isInWishlist) {
      user.wishlist = user.wishlist.filter(id => id.toString() !== placeId);
    } else {
      user.wishlist.push(placeId);
    }

    await user.save();
    await user.populate('wishlist');

    res.json({ 
      success: true, 
      message: isInWishlist ? 'Removed from wishlist' : 'Added to wishlist',
      wishlist: user.wishlist
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getCities = async (req, res) => {
  try {
    const cities = await Place.distinct('city');
    res.json({ success: true, cities });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};