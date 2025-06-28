const mongoose = require('mongoose');

const RentedSchema = new mongoose.Schema({
  motorcycleName: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  days: { type: Number, required: true },
  total: { type: Number, required: true },
  renterInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    address: { type: String, required: true },
  },
  rentedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Rented', RentedSchema);
