const db = require("../database");

class TournamentsController{
    async getTournaments(req,res){
        const allTournaments = await db.query(`
            SELECT id, tournament_name as name from tournaments;
        `)
        res.json(allTournaments.rows)
    }

    async createTournament(req,res){
        const {tournament} = req.body;
        console.log(tournament)
        const newTournament = await db.query(`
                INSERT INTO tournaments (tournament_name)
                    VALUES ($1)
        `,[tournament])
    }
}

module.exports = new TournamentsController();
