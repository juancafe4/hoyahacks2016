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
    Goal.create(req.body, (err, newGoal) => {
      res.status(err ? 400 : 200).send(err || newGoal);
    })
  })
  .delete((req, res) => {
    Goal.remove({}, (err, text) => {
      res.status(err ? 400 : 200).send(err || 'Goal deleted');
    })
  });

module.exports = router;
