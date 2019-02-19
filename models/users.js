const mongo = require("mongoose");
const seckey = require("../secret/google");
mongo.connect(seckey.mongolink, {
    useNewUrlParser: true
});


mongo.model("users", {
    googleId: String
})