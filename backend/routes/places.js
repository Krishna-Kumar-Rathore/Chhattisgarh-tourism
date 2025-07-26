const express = require('express');
const {
  getAllPlaces,
  getPlaceById,
  createPlace,
  updatePlace,
  deletePlace,
  toggleWishlist,
  getCities
} = require('../controllers/placeController');
const { auth, adminAuth } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllPlaces);
router.get('/cities', getCities);
router.get('/:id', getPlaceById);
router.post('/', adminAuth, createPlace);
router.put('/:id', adminAuth, updatePlace);
router.delete('/:id', adminAuth, deletePlace);
router.post('/:id/wishlist', auth, toggleWishlist);

module.exports = router;