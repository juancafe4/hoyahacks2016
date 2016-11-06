const express = require('express');
const router = express.Router();

router.use('/nutritionfacts', require('./nutritionfacts'));
router.use('/goals', require('./goals'));
router.use('/allergies', require('./allergies'));

module.exports = router;
