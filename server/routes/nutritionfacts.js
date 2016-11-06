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
      res.status(err ? 400 : 200).send(err || newFact);
    })
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
