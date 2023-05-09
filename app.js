require('@babel/register');
require('dotenv').config();

const ReactDOMServer = require('react-dom/server');
const React = require('react');

const express = require('express');
const logger = require('morgan');
const path = require('path');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const startRouter = require('./src/routes/start.router');
const deskRouter = require('./src/routes/Desk_routs/desk.routes');
const statisticRouter = require('./src/routes/statistic.routes');
const questionRouter = require('./src/routes/question.routes');
const postGameRouter = require('./src/routes/currStat.routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(express.static(path.join(process.cwd(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// * Конфиг для куки в виде файла сессий
const sessionConfig = {
  name: 'flashCard',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET,
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // * время жизни в мс (ms) - 1 день
    httpOnly: false,
  },
};
// * Подключи сессии как мидлу
app.use(session(sessionConfig));

app.use('/', startRouter);
app.use('/play', deskRouter);
app.use('/question', questionRouter);
app.use('/statistic', statisticRouter);
app.use('/post-game-statistic', postGameRouter);

app.get('*', (req, res) => {
  res.redirect('/');
});

app.listen(PORT, () => {
  console.log(`server started PORT: ${PORT}`);
});
