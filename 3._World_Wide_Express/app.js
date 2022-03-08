const express = require("express");
const app = express();
app.use(express.static("public"));
const fetch = require("node-fetch")
const port = process.env.PORT || 6000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html");
})

app.get("/frontpage", (req, res) => {
    res.send("<h1> Welcom to World Wide Express </h1>");
})

app.get("/weather", (req, res) => {
    res.sendFile(__dirname + "/public/weather.html");
})


console.log(port);

 app.get("/proxy", async (req, res) => {
   const response = await fetch("https://www.google.com");
   const website = await response.text();
   res.send(website);
});

app.listen(port, () => {
    console.log("Server is running on port ", port);
})
