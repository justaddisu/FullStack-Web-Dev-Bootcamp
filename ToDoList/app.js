const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const date  = require(__dirname + "/date.js");

app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workList = [];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){

   const day = date.getDate();
    
    res.render("list", {listTitle: day, newListItem: items});
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workList});
})

app.post("/", function(req, res){

    let item = req.body.newItem;
    let newWorkList = req.body.newItem;

    if(req.body.list === "Work List"){
        workList.push(newWorkList);
        res.redirect('/work');
    }else{
        items.push(item);
        res.redirect('/');
    } 

})

app.listen(3000, function(){
    console.log('The server running on port 3000.')
})


