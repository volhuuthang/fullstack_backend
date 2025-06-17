const express = require('express');
const router = express.Router();
const {getHomePage, getTestPage} = require('../controllers/homeController');



// router.Method('/router', handler)
router.get('/', getHomePage);

router.get('/test', getTestPage)

module.exports = router;