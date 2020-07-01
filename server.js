import express from "express";
import Datastore from "nedb";

const port = 3000;
const app = express();

const leaderboard = new Datastore("scoreList.db");
leaderboard.loadDatabase();

app.use(express.static("static"));
app.use(express.json());

//Submit name & score into leaderboard db.
app.post("/scoreRoom", function (request, response) {
    const playerInfo = request.body;
    leaderboard.insert(playerInfo);
    response.json(playerInfo);
});

//Show leaderboard
app.get("/scoreRoom", function (request, response) {
    leaderboard.find({}, function (err, playerInfo) {
        if (err) {
            response.end();
            //response.send({ error: "Internal Server Error" });
            return;
        }
        response.json(playerInfo);
    });
});
app.listen(port, function () {
    console.log("listening at port" + port);
});