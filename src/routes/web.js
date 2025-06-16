const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.send('Hello World! & nodemon')
})

router.get('/test', (req, res) => {
  // res.send('Hello Thang!')
  res.render('sample.ejs')
})

module.exports = router;