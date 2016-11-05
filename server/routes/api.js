const express = require('express');
const router = express.Router();

router.use('/nutritionfacts', require('./nutritionfacts'));

module.exports = router;
