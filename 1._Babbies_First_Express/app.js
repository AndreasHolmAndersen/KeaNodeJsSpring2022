// Imports express via the require method
const express = require("express");
const app = express();
// Or const app = require("express")();

app.use(express.json());

app.get("/", (req, res) => {
    res.send({message: "Welcome to my server. This is my first route ever"});
});

app.get("/about", (req, res) => {
    res.send({message: "This is some vital info about the server! .....It uses Express"})
})

app.post("/", (req, res) => {
    res.send(req.body);
});

app.post("/opinion", (req, res) => {
    res.send(req.body);
})

app.get("/aboutclient/:name", (req, res) => {
    res.send({ greeting: `Hello there ${req.params.name}`});
});

app.get("/libraries", (req, res) => {
    res.send(req.query);
});



app.listen(8080, (error) => {
    console.log("Server is running on port", 8080)
});