
const express = require('express');
const bookController = require('../routes/controllers/book');
const userController = require('../routes/controllers/user'); 
const router = express.Router();

router.get('/set', userController.getSetUserSession);

router.post('/set', userController.setUserSession);

router.get('/', bookController.getBooksList);

module.exports = router;