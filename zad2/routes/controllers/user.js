
const User = require('../../models/User');

const getSetUserSession = (request, response) => {
  const users = User.getAll();
  response.render("set-user-session", { title: "Set User Session", users });
};

const setUserSession = (request, response) => {
  request.session.userId = request.body.userId;
  response.redirect("/");
};

module.exports = {
  getSetUserSession,
  setUserSession
};
