function apiRoutes(app, connection) {
    app.get("/api/friends", function (req, res) {
        res.sendFile(path.join(_dirname, "home.html"));
    });

    app.post("/api/friends", function (req, res) {
        res.sendFile(path.join(_dirname, "survey.html"));
    });
}

module.exports = apiRoutes();