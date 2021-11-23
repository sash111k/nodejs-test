const db = require('../database')

class MatchesController{
    async createMatch(req,res){
        const {first_team_name, second_team_name,
            first_team_score, second_team_score, tournament, season, full_tournament_name} = req.body;
        console.log(first_team_name, second_team_name,
            first_team_score, second_team_score, tournament, season, full_tournament_name)
        const newMatch = await db.query(`
        INSERT INTO matches (first_team_id, second_team_id, first_team_score,
                     second_team_score, tournament_id, season_id, full_tournament_name)
                     VALUES ($1,$2,$3,$4,$5,$6,$7                             
                             ) returning *
        `,[first_team_name,second_team_name,first_team_score,
            second_team_score,tournament,season,full_tournament_name])
        //res.json(newMatch.rows[0]);
    }

    async getMatches(req,res){
        let dbQuery = `
            SELECT matches.id as id, t1.team_name as first_team,first_team_score,
                   second_team_score,t2.team_name as second_team,
        tournaments.tournament_name as tournament, seasons.season as season, full_tournament_name as full_tournament_name
        from matches
        INNER JOIN teams as t1 on t1.id = matches.first_team_id
        INNER JOIN teams as t2 on t2.id = matches.second_team_id
        INNER JOIN tournaments on matches.tournament_id = tournaments.id
        INNER JOIN seasons on matches.season_id = seasons.id
        `
        console.log(req.query)
        let {team,tournament,season} = req.query;

        console.log(team,tournament,season);
        let filterQuery = []
        if (team && team != 0 && team) {
            dbQuery += ` WHERE (matches.first_team_id = $${filterQuery.length + 1} or matches.second_team_id = $${filterQuery.length + 1})`
            filterQuery.push(team);
        }
        if (tournament && tournament != 0) {
            if (filterQuery.length == 0) {
                dbQuery += ' WHERE '
            }else{
                dbQuery += ' AND '
            }
            dbQuery += `matches.tournament_id = ($${filterQuery.length + 1})`
            filterQuery.push(tournament);
        }
        if (season && season != 0) {
            if (filterQuery.length == 0) {
                dbQuery += ' WHERE '
            }else{
                dbQuery += ' AND '
            }
            dbQuery += `matches.season_id = $${filterQuery.length + 1}`
            filterQuery.push(season);
        }
        const allMatches = await db.query(dbQuery,filterQuery)
        res.json(allMatches.rows)
    }

    async updateMatch(req,res){

    }

    async getTeams(req,res){
        const allTeams = await db.query(`
            SELECT id, team_name as name from teams;
        `)
        res.json(allTeams.rows)
    }
    async getTournaments(req,res){
        const allTournaments = await db.query(`
            SELECT id, tournament_name as name from tournaments;
        `)
        res.json(allTournaments.rows)
    }
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

    async createTournament(req,res){
        const {tournament} = req.body;
        console.log(tournament)
        const newTournament = await db.query(`
                INSERT INTO tournaments (tournament_name)
                    VALUES ($1)
        `,[tournament])
    }
}

module.exports = new MatchesController();
