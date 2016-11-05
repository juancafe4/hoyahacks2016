const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  calories: {type: Number},
  protein: {type: Number},
  carbs: {type: Number},
  fat: {type: Number},
  sodium: {type: Number}
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
