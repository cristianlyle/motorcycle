const express = require('express');
const router = express.Router();
const rentedController = require('../controllers/rentedController');

// POST /api/rented - store a rented motorcycle
router.post('/', rentedController.rentMotorcycle);

// GET /api/rented - get all rented motorcycles
router.get('/', rentedController.getRentedMotorcycles);

module.exports = router;
