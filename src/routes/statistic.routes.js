const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const { Statistic, Question } = require('../../db/models');
const Statistics = require('../view/Statistic');
const Profile = require('../view/Profile');

router.post('/post-game', async (req, res) => {
  try {
    const body = req.body;
    const questionsFromBase = await Question.findAll({
      where: { deskId: body.deskId },
      raw: true,
    });

    let correctAnswerCount = 0;
    questionsFromBase.forEach((el) => {
      if (el.correctAnswer.toString() === body[el.id]) {
        correctAnswerCount += 1;
      }
    });
    const newStat = await Statistic.create({
      userId: body.userId,
      deskId: body.deskId,
      correctAnswerCount,
      questionCount: questionsFromBase.length,
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

router.get('/profile', async (req, res) => {
  try {
    const data = await Statistic.findAll({
      where: { userId: req.session.user.id },
      raw: true,
    });
    let totalQuest = 0;
    let currentAnsw = 0;
    for (let i = 0; i < data.length; i++) {
      totalQuest += data[i].questionCount;
      currentAnsw += data[i].correctAnswerCount;
    }
    const allStat = {
      totalGames: data.length,
      totalQuestions: totalQuest,
      totalAnswers: currentAnsw,
    };
    renderTemplate(Profile, { allStat }, res, req);
  } catch (error) {
    console.log('error: -------->', error);
    res.send(error);
  }
});

module.exports = router;
