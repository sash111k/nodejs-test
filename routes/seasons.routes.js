const Router = require('express');
const router = new Router();
const seasonsController = require('../controller/seasons.controller');

router.get('/seasons', seasonsController.getSeasons)
router.post('/seasons', seasonsController.createSeason)

module.exports = router;
