function htmlRoutes() {
    app.get("/", function (req, res) {
        res.sendFile(path.join(_dirname, "home.html"));
    });

    app.get("/survey", function (req, res) {
        res.sendFile(path.join(_dirname, "survey.html"));
    });

}

module.exports = htmlRoutes();