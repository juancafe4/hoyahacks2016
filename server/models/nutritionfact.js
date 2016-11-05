const mongoose = require('mongoose');

const nutritionFactSchema = new mongoose.Schema({
  calories: {type: Number},
  protein: {type: Number},
  carbs: {type: Number},
  fat: {type: Number},
  sodium: {type: Number},
  date: {type: Date}
});

const NutritionFact = mongoose.model('NutritionFact', nutritionFactSchema);

module.exports = NutritionFact;
