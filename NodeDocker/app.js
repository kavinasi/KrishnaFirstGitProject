const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("Hello from Docker for Node Image")

});

app.listen(3000,function(){
    console.log("app is listening on 3000");
});