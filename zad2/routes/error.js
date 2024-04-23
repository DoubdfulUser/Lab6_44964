

const express = require('express');
const errorController = require('./controllers/error');
const router = express.Router();

router.use(errorController.getNotFoundPage);

router.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

module.exports = router;