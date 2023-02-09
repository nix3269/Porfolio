var express = require('express');
var app = express();
var hbs = require('hbs')
app.set('view engine', 'hbs')
app.use(express.static('public'));
app.set('views', "./views")
// app.use(express.favicon("public/images/favicon.ico"));
app.get('/', function(req, res){
   res.render("index");
});

app.get("*",function(req, res){
   res.status(404).render("notfound");
});

app.listen(3000);