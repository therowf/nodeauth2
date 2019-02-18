const app = require("express")();

app.get("/", (req,res)=>{
    res.send({hi:"Ok"});
});

const port = process.env.PORT || 5000;
app.listen(port);