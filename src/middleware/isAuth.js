function isAuth(req, res, next) {
  const user = req.session?.user?.id;
  if (user) {
    next();
  } else {
    res.redirect('/');
  }
}

module.exports = isAuth;
