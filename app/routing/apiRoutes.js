var friendsData = require("../data/friends");


module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {
        
        friendsData.push(req.body);
        console.log(req.body);

        var newUserScore = req.body.scores;
        
        var bestMatchScore = 50;

        var score;

        var matchName;

        for (var i = 0; i <friendsData.length; i++){
            
            for (var j = 0; j <friendsData[i].scores.length; j++){

                score += Math.abs(friendsData[i].scores[j] - newUserScore[j]);

                if (score < bestMatchScore) {
                    bestMatchScore = score;
                    matchName = friendsData[i];
                }
            }
        }
        console.log(matchName);
        return res.json(matchName);
    });
};
