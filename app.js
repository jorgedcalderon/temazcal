var express = require("express");
var app = express();
var port = process.env.PORT || "8080";
var ip = process.env.IP || "159.203.13.74";


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

app.get("/pago_exitoso", function(req, res){
    res.render("pago-exitoso");
});

app.get("/pago_en_proceso", function(req, res){
    res.render("pago-en-proceso");
});

app.get("*", function(req, res){
    res.render("/");
});

app.listen(port, ip, function(){
    console.log("Servidor de temazcal inicado");
});