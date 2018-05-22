var path = require('path');

var friendData = require("../data/friend");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
      return  res.json(friends);
    });



    app.post("/api/friends", function (req, res) {
        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
        // It will do this by sending out the value "true" have a table
        // req.body is available since we're using the body-parser middleware
        for (var i = 0; i < friendData.length; i++) {
            friendData.push(req.body);
            res.json(true);
            console.log(friendData)
        }
        })
}