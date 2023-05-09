const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');
const Layout = require('../view/Layout');

const { Question } = require('../../db/models');

const Quiz = require('../view/Quiz');

router.get('/:id', async (req, res) => {
  try {
    const deskId = req.params.id;
    const quizQuestion = await Question.findAll({
      where: { deskId },
      raw: true,
    });
    renderTemplate(Quiz, { quizQuestion, deskId }, res, req);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

module.exports = router;
