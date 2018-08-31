var friendsData = require("../data/friends");



function apiRoutes(app, connection) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        friendsData.push(req.body);
    });
}

module.exports = apiRoutes();