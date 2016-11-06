const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
  calories: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
  sodium: Number
});

const Goal = mongoose.model('Goal', goalSchema);

module.exports = Goal;
