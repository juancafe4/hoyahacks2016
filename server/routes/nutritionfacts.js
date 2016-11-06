const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

const Nutritionfact = require('../models/nutritionfact');
const multer  = require('multer')

let  upload = multer({});

router.route('/')
  .get((req, res) => {
    Nutritionfact.find({}, (err, nutritionFacts) => {
      res.status(err ? 400 : 200).send(err || nutritionFacts);
    })
  })
  .post((req, res) => {
    Nutritionfact.create(req.body, (err, newFact) => {
      console.log ('newFact:', newFact);
      res.status(err ? 400 : 200).send(err || newFact);
    })
  })

router.get('/sample', (req, res) => {
  let sampleArray = [
    {
      calories: 140,
      protein: 3,
      carbs: 24,
      fat: 4,
      sodium: 70,
      date: Date.now()
    },
    {
      calories: 5,
      protein: 1,
      carbs: 3,
      fat: 0,
      sodium: 80,
      date: Date.now() - 172800000
    },
    {
      calories: 90,
      protein: 10,
      carbs: 5,
      fat: 3,
      sodium: 60,
      date: Date.now() - 7898973
    },
    {
      calories: 90,
      protein: 1,
      carbs: 18,
      fat: 3,
      sodium: 80,
      date: Date.now() - 192800000
    },
    {
      calories: 140,
      protein: 2,
      carbs: 16,
      fat: 8,
      sodium: 210,
      date: Date.now() - 372800000
    }
  ]

  res.send(sampleArray);
})


router.post('/upload', upload.single('file'), (req, res) => {
  console.log('Here uploading ', req.file)
  res.send({result: "success"})
});

router.route('/:id')
  .delete((req, res) => {
    Nutritionfact.findByIdAndRemove(req.params.id, (err, deletedFact) => {
      res.status(err ? 400 : 200).send(err || 'Log deleted');
    })
  })

module.exports = router;
