const express = require("express"),
    mongo = require("mongoose"),
    app = express()

require("dotenv").config({"path" : "./variables.env"})
 
app.get("/online", (req, res) => {
    res.send("The site is online!")
})
app.listen(process.env.PORT, ()=>{console.log("Server started on " + process.env.PORT + "!")})