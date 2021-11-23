const Router = require('express');
const router = new Router();
const tournamentsController = require('../controller/tournaments.controller');


router.get('/tournaments', tournamentsController.getTournaments)


module.exports = router;
