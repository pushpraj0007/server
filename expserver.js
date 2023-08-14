const express = require("express");

const app = express();

app.get("/", function(req, res){
    res.send("Hello World & and welcome to my PC")
});

app.get("/home", function(req, res){
    res.send("Hello World & and welcome to my PC")
});

app.get("/about", function(req, res){
    res.send("This is my about Page")
});

app.get("/contact", function(req, res){
    res.send("Feel free to contact me @ raftar4153@gmail.com")
});

// Send File req and res//

app.get("/calculator", function(req, res){
    res.sendFile(__dirname+"/index.html")
    //console.log(__dirname);
});

app.listen(5000, function(req, res){
    console.log("Server is running at port no.5001")
});
