const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const bcrypt = require('bcrypt');
const Enter = require('../view/authorization/Enter');
const Registration = require('../view/authorization/Registration');

const { User } = require('../../db/models');

router.get('/', (req, res) => {
  renderTemplate(Registration, {}, res, req);
});

router.get('/login', (req, res) => {
  renderTemplate(Enter, {}, res, req);
});

// * Ручка добавления и регистрации через фетч
router.post('/register', async (req, res) => {
  console.log(req.body);
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      res.json({ msg: 'Юзер с такой почтой уже существует' });
    } else {
      const hashPass = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        nickName: name,
        email,
        password: hashPass,
      });
      res.redirect('/login');
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * ручка авторизации через фетч
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const passCheck = await bcrypt.compare(password, user.password);
      if (passCheck) {
        req.session.user = user;

        res.redirect('/play');
      } else {
        res.json({ msg: 'Неверный пароль!' });
      }
    } else {
      res.json({ msg: 'Такой юзер не найден, зарегистрируйтесь' });
    }
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

// * logout
router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('flashCard');
    res.redirect('/');
  });
});
module.exports = router;
