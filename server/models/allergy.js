const mongoose = require('mongoose');

const allergySchema = new mongoose.Schema({
  allergies: [String]
});

const Allergy = mongoose.model('Allergy', allergySchema);

module.exports = Allergy;
