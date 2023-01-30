function requireUser(req, res, next) {
  const user = res.locals.user;
  return !user ? res.sendStatus(403) : next();
}

module.exports = requireUser;
