const express = require('express');
const router = express.Router();

const Allergy = require('../models/allergy');

router.route('/')
  .get((req, res) => {
    Allergy.find({}, (err, allergies) => {
      res.status(err ? 400 : 200).send(err || allergies);
    })
  })
  .post((req, res) => {
    Allergy.create(req.body, (err, newAllergies) => {
      res.status(err ? 400 : 200).send(err || newAllergies);
    })
  })

router.route('/:id')
  .delete((req, res) => {
    Allergy.findByIdAndRemove(req.params.id, (err, message) => {
      res.status(err ? 400 : 200).send(err || 'Allergies deleted.');
    })
  })
  .put((req, res) => {
    Allergy.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, newAllergies) => {
      res.status(err ? 400 : 200).send(err || newAllergies);
    })
  });

module.exports = router;
