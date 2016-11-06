const express = require('express');
const router = express.Router();

const Goal = require('../models/goal');

router.route('/')
  .get((req, res) => {
    Goal.find({}, (err, goals) => {
      res.status(err ? 400 : 200).send(err || goals);
    })
  })
  .post((req, res) => {
    Goal.create(req.body, (err, newGoals) => {
      res.status(err ? 400 : 200).send(err || newGoals);
    })
  })

router.route('/:id')
  .put((req, res) => {
    Goal.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, updateGoals) => {
      res.status(err ? 400 : 200).send(err || updateGoals);
    })
  })
  .delete((req, res) => {
    Goal.findByIdAndRemove(req.params.id, (err, text) => {
      res.status(err ? 400 : 200).send(err || 'Goal deleted');
    })
  });

module.exports = router;
