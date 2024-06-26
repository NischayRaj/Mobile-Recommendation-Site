const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  specs: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mobile', mobileSchema);
