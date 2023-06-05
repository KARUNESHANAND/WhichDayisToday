const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items = [];
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get("/", function(req,res){

    var today = new Date();

    var options = {
        hour :"numeric",
        minute : "numeric", 
        second : "numeric",
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric'
    }; 

    var day = (today.toLocaleDateString("en-US", options));
    res.render("list", {dayoftheWeek: day, list_items: items});
});

app.post('/', function(req, res) {
    var item = req.body.list_item;
    items.push(item);
    res.redirect("/");
})

app.listen(3000,function(){
    console.log("Server started on port 3000");
});

