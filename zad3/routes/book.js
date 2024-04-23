
const express = require('express');
const bookController = require('../routes/controllers/book');
const userController = require('../routes/controllers/user'); 
const router = express.Router();

router.get('/', bookController.getBooksList);

router.get('/set', userController.getSetUserSession);
router.post('/set', userController.setUserSession);

router.get('/books/:id', bookController.getBookDetails);

router.post('/books/borrow/:id', bookController.postBookBorrow);

router.post('/books/return/:id', bookController.postBookReturn);

router.get('/books/borrow/success', bookController.getBookBorrowSuccess);

router.get('/books/return/success', bookController.getBookReturnSuccess);

module.exports = router;