const express = require('express');
const router = express.Router();
const rentedController = require('../controllers/rentedController');

router.post('/', rentedController.rentMotorcycle);

router.get('/', rentedController.getRentedMotorcycles);
router.post('/', rentedController.createRented);
module.exports = router;
