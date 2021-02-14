const express = require("express");
const app = express();
const perthite = require("perthite");

app.use(express.static(__dirname + "/public"));

app.engine("html", perthite.engine);
app.set("view engine", "html");

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})

app.listen(3000, (err) => {
    if (err) {
        console.log("server failed " + err);
    } else {
        console.log("server running")
    }
})