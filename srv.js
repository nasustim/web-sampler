const _express = require("express");
const _app = _express();
const bodyParser = require('body-parser');

_app.use(bodyParser.json());
_app.set("view engine","ejs");
_app.use(_express.static(__dirname+'/public'));

var _server = _app.listen(8081,function(){
    console.log("express is running at "+_server.address().port);
});

var add = [];



_app.get("/",function(req,res){
    res.render("index",{});
});
_app.get("/foot",function(req,res){
    res.render("foot",{});
});
_app.post("/add",function(req,res){
    var date = new Date();
    console.log("+");
    console.log(req.body);
    if(req.body.dat === "clear"){
        add = [];
        res.json({result: "clear"});
        return;
    }
    add.push(req.body.dat  + " - " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
    res.json({result: "success"});
});
_app.post("/pull",function(req,res){
    console.log("-");
    res.json(add);
});

_app.get("/admin",function(req,res){
    res.render("admin",{});
});