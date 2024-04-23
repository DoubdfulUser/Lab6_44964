

const Book = require('../models/Book');
const User = require('../models/User');

exports.getBookDetails = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;
    
    const user = User.getById(userId);
    const book = Book.getById(bookId);
    const didUserBorrowTheBook = user.findBorrowedBookById(bookId);

    res.render('book-details', {
        title: 'Book Details',
        book: book,
        didUserBorrowTheBook: didUserBorrowTheBook
    });
};

exports.postBookBorrow = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;

    const user = User.getById(userId);
    const book = Book.getById(bookId);

    if (!user || !book || !book.available) {
        res.status(404).send('Book not available for borrowing.');
        return;
    }

    book.borrow();
    user.borrowBook(book);
    res.redirect('/books/borrow/success');
};

exports.getBookBorrowSuccess = (req, res) => {
    res.render('success', {
        title: 'Borrow Book Success',
        message: 'Book borrowed successfully'
    });
};

exports.postBookReturn = (req, res) => {
    const userId = req.session.userId;
    const bookId = req.params.id;

    const user = User.getById(userId);
    const book = Book.getById(bookId);

    if (!user || !book || book.available) {
        res.status(404).send('Book not available for returning.');
        return;
    }

    book.return();
    user.returnBook(bookId);
    res.redirect('/books/return/success');
};

exports.getBookReturnSuccess = (req, res) => {
    res.render('success', {
        title: 'Return Book Success',
        message: 'Book returned successfully'
    });
};

  