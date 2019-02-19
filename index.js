const app = require("express")();
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./services/passport");

app.use(cookieSession({
    name: 'session',
    keys: ["gddfgddggfgfd"],
   
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }))

app.use(passport.initialize());
app.use(passport.session());




require("./routes/authRoute")(app);
require("./routes/initial")(app);



const port = process.env.PORT || 5000;
app.listen(port);