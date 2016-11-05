const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

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

router.post('/upload', (req, res) => {
  let tempPath = req.files.file.path,
    targetPath = path.resolve('./uploads/image.jpg');
  if (path.extname(req.files.file.name).toLowerCase() === '.jpg') {
    fs.rename(tempPath, targetPath, function(err) {
      if (err) throw err;
      console.log("Upload completed!");
    });
  } else {
    fs.unlink(tempPath, function () {
      if (err) throw err;
      console.error("Only .jpg files are allowed!");
    });
  }
});

router.route('/:id')
  .delete((req, res) => {
    Nutritionfact.findByIdAndRemove(req.params.id, (err, deletedFact) => {
      res.status(err ? 400 : 200).send(err || 'Log deleted');
    })
  })

module.exports = router;
