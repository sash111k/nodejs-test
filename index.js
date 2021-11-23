const express = require('express');
const matchesRouter = require("./routes/matches.routes")
const seasonsRouter = require("./routes/seasons.routes")
const teamsRouter = require("./routes/teams.routes")
const tournamentsRouter = require("./routes/tournaments.routes")

const dotenv = require('dotenv');
dotenv.config({path: __dirname + '/.env'});

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json())
app.use('/api', matchesRouter);
app.use('/api', seasonsRouter);
app.use('/api', teamsRouter);
app.use('/api', tournamentsRouter);

app.listen(PORT,()=>{
    console.log(`server listening on PORT ${PORT}`)
    console.log(process.env.DB_PASSWORD, process.env.DB_USERNAME)
})
