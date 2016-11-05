const express = require('express');
const router = express.Router();

const Nutritionfact = require('../models/nutritionfact');

router.route('/')
  .get((req, res) => {
    Nutritionfact.find({}, (err, nutritionFacts) => {
      res.status(err ? 400 : 200).send(err || nutritionFacts);
    })
  })
  .post((req, res) => {
    Nutritionfact.create(req.body, (err, newFact) => {
      res.status(err ? 400 : 200).send(err || newFact);
    })
  })

router.route('/:id')
  .delete((req, res) => {
    Nutritionfact.findByIdAndRemove(req.params.id, (err, deletedFact) => {
      res.status(err ? 400 : 200).send(err || 'Nutrition fact deleted');
    })
  })

module.exports = router;
