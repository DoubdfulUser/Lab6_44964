
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

const bookRoutes = require('../zad2/routes/book');
const userRoutes = require('../zad2/routes/user');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

app.use('/book', bookRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.send('Witaj w aplikacji MVC Lab 6!');
});

app.listen(PORT, () => {
  console.log(`Serwer działa na porcie ${PORT}`);
});
