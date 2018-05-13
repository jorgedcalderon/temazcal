var express = require("express");
var app = express();


app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


app.get("/", function(req, res){
    res.render("index");
});

app.get("/en", function(req, res){
    res.render("landing-en");
});

app.get("/es", function(req, res){
    res.render("landing-es");
});

app.get("*", function(req, res){
    res.render("/");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Servidor de temazcal inicado corriendo en puerto: " + process.env.PORT + "con IP: " + process.env.IP);
});