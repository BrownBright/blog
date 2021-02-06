const express = require("express");
const bodyParser = require("body-parser");


const app = express();


const headtitle = "Creative Writing";
const body_text = "Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. The writer can use the paragraph as the first one of a short story and build upon it. A second option is to use the random paragraph somewhere in a short story they create. The third option is to have the random paragraph be the ending paragraph in a short story. No matter which of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph into their writing."

app.set("view-engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))
 
app.get('/', function (req, res) {
    res.render("home.ejs",{
        headtitle : headtitle ,
        body_text : body_text
    })
})


app.post('/', function (req, res) {

})




let port = 3000;
app.listen(port, function (req, res) {
    console.log("server is up .. ")
})