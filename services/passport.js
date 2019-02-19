const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const seckey = require('../secret/google');
const mongo = require('mongoose');
require('../models/users');
const user = mongo.model('users');

passport.serializeUser((user, done) => {
	done(null, user.id);
})

passport.deserializeUser((id, done) => {
	user.findById(id).then(res => {
		done(null, res)
	})
})

passport.use(
	new GoogleStrategy({
			clientID: seckey.googleClientId,
			clientSecret: seckey.googleClientsecret,
			callbackURL: '/auth/google/callback',
		},
		function (accessToken, refreshToken, profile, done) {
			user.findOne({
				googleId: profile.id
			}).then(res => {
				if (res) {
					done(null, res);
				} else {
					//console.log('not found');
				}
			});
			/* new user({
            googleId: profile.id
        })
        .save(err=>{
            console.log("Saved")
        })
*/
		}
	)
);