const Router = require('express');
const router = new Router();
const matchesController = require('../controller/matches.controller');

router.post('/matches', matchesController.createMatch)
router.get('/matches', matchesController.getMatches)
router.get('/admin/matches',matchesController.getMatchesForAdmin)
module.exports = router;
