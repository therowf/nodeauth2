const passport = require("passport");


module.exports = (app => {
    app.get('/auth/google',
        passport.authenticate('google', {
            scope: ['profile']
        }));

    app.get('/auth/google/callback',
        passport.authenticate('google', {
            successRedirect: '/profile',
            failureRedirect: '/login',
        })
    )


    app.get("/profile", (req, res) => {

        res.send({
            ok: req.user
        })
    })
})