const express = require("express")
const bodyParser = require("body-parser")
const ejs = require("ejs")
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine", "ejs");
app.use(express.static("public"))


app.use('/', (req,res)=>{
    res.send("connect")
})



app.listen(3801, (err,res) => {
})