const Router = require('express');
const router = new Router();
const teamsController = require('../controller/teams.controller');

router.get('/teams', teamsController.getTeams)


module.exports = router;
