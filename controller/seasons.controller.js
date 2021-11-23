const db = require('../database')

class SeasonsController{
    async getSeasons(req,res){
        const allSeasons = await db.query(`
            SELECT id, season as name from seasons;
        `)
        res.json(allSeasons.rows)
    }

    async createSeason(req,res){
        const {season} = req.body;
        console.log(season)
        const newSeason = await db.query(`
                INSERT INTO seasons (season)
                    VALUES ($1)
        `,[season])
    }
}

module.exports = new SeasonsController();
