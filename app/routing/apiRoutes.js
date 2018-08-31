var friendsData = require("../data/friends");


module.exports = function(app) {
    app.get("/api/friends", function (req, res) {
        return res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {

        var diffArray = [];

        var newUser = req.body;
        
        for (var i = 0; i < friendsData.length; i++) {
            var scoreDiff= 0;
            for (var j = 0; j < friendsData[i].scores.length; j++) {
                    scoreDiff+= Math.abs(friendsData[i].scores[j] - newUser.scores[j]) 
            }
            diffArray.push(scoreDiff);
        }
        var matchIndex = diffArray.indexOf(Math.min(...diffArray));
       
    
        var match = friendsData[matchIndex];
    
        res.json(match)
        friendsData.push(newUser);
    });
};
