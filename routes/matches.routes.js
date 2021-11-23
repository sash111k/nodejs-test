const Router = require('express');
const router = new Router();
const matchesController = require('../controller/matches.controller');

router.post('/matches', matchesController.createMatch)
router.put('/matches', matchesController.updateMatch)
router.get('/matches', matchesController.getMatches)
router.get('/teams', matchesController.getTeams)
router.get('/tournaments', matchesController.getTournaments)
router.post('/tournaments', matchesController.createTournament)
router.get('/seasons', matchesController.getSeasons)
router.post('/seasons', matchesController.createSeason)
module.exports = router;
