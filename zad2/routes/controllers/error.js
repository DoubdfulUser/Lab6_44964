
const getNotFoundPage = (req, res) => {
    res.status(404).render('not-found', { title: '404 - Page Not Found' });
  };
  
  module.exports = { getNotFoundPage };