const router = require('express').Router();
const renderTemplate = require('../lib/renderTemplate');

const { Statistic, Question } = require('../../db/models');
const Statistics = require('../view/Statistic');

router.get('/', async (req, res) => {
  const data = await Statistic.findAll({
    order: [['id', 'DESC']],
    limit: 1,
    raw: true,
  });
  const lastGame = data[0];
  renderTemplate(Statistics, { lastGame }, res, req);
});

module.exports = router;
