const router = require('express').Router();
const renderTemplate = require('../../lib/renderTemplate');
const DeskView = require('../../view/cards/Desk');
const { Desk } = require('../../../db/models');

router.get('/', async (req, res) => {
  try {
    const cards = await Desk.findAll();
    renderTemplate(DeskView, { cards }, res, req);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
