const express = require('express');
const router = express.Router();

router.use('/nutritionfacts', require('./nutritionfacts'));
router.use('/goals', require('./goals'));

module.exports = router;
