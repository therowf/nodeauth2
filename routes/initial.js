module.exports = (app => {
    app.get("/", (req, res) => {
        req.session.views = 434343;
        res.send({
            hi: "Ok"
        });
    });


})