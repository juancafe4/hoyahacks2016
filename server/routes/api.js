const express = require('express');
const router = express.Router();

router.use('/nutrientfacts', require('./nutrientfacts'));

module.exports = router;
