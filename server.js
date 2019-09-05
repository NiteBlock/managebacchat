const express = require("express"),
    mongo = require("mongoose"),
    app = express()
fs = require("fs"),
    path = require("path"),
    bodyParser = require("body-parser");

require("./models/chat")
require("dotenv").config({ "path": "./variables.env" })

app.get("/online", (req, res) => {
    res.send("The site is online!")
})

//add middelware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use(require("cors")())

// add routers
const routersPath = path.join(__dirname, 'routers');
//passsing routersPath and callback function
fs.readdir(routersPath, function (err, files) {
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }
    files.forEach(function (file) {
        if (file.endsWith(".js")) {
            app.use("/", require("./routers/" + (file.replace(".js", ""))))
        }
    });
});

app.listen(process.env.PORT, () => { console.log("Server started on " + process.env.PORT + "!") })