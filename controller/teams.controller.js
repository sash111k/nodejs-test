const db = require('../database')

class TeamsController{
    async getTeams(req,res){
        const allTeams = await db.query(`
            SELECT id, team_name as name from teams;
        `)
        res.json(allTeams.rows)
    }
}

module.exports = new TeamsController();
