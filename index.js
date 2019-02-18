const app = require("express")();

app.get("/", (req,res)=>{
    res.send({hi:"Ok"});
});

app.listen(5000);