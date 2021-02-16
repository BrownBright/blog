const express = require("express");
const bodyParser = require("body-parser");


const app = express();


const headtitle = [];
const body_text = [];
if(headtitle.length = 0){
    headtitle
}

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
 
app.get('/', function (req, res) {
    res.render("home.ejs",{
        headtitle : headtitle ,
        body_text : body_text 
    })
})

app.get('/about', function (req, res) {
    res.render("about.ejs",{

    })
})

app.get('/contact', function (req, res) {
    res.render("contact.ejs",{

    })
})


app.get('/compose', function (req, res) {
    res.render("compose.ejs",{

    })
})


app.post('/compose', function (req, res) {
    console.log(req.body.data)
    body_text.push(req.body.data) ;
    headtitle.push(req.body.title) ;
    res.render("home.ejs",{
        headtitle : headtitle ,
        body_text : body_text
    })
})




let port = 3000;
app.listen(port, function (req, res) {
    console.log("server is up .. ")
})