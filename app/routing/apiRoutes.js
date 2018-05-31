var path = require('path');

var friendData = require("../data/friend");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });
    app.post("/api/characters", function (req, res) {
        var reducer = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue); 
        var currentUserScore = req.body.scores.reduce(reducer);
        var diff = 10000;
        var bestMatchIndex = 0;
       // console.log(friendData[0].scores);
        for(i=0; i<friendData.length; i++) {
            var compareScore = friendData[i].scores.reduce(reducer);
            var currentDifference = Math.abs(compareScore - currentUserScore);
            if(currentDifference <= diff) {
                diff = currentDifference;
                bestMatchIndex = i
            }
        }
        res.send(friendData[bestMatchIndex])
        console.log(friendData[bestMatchIndex])
    });
}

