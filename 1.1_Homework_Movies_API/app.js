const express = require("express");
const app = express();
app.use(express.json());

const movies = [
    {id: 1, title: "Avengers: Endgame", duration: 192, director: "The Russo brothers"},
    {id: 2, title: "Spider-man: No way home", duration: 200, director: "Jon Watts"},
    {id: 3, title: "Avatar", duration: 240, director: "James Cameron"}
];

app.get("/movies", (req, res) => {
    res.send(movies);
})

app.get("/movies/:id", (req, res) => {
    res.send({movies: movies[req.params.id-1]})
});

app.post("/movies", (req, res) => {
    movies.push(req.body);
});

app.put("/movies/:id", (req, res) => {
    movies[req.params.id-1] = req.body;
});

app.delete("/movies/:id", (req, res) => {
    movies.splice(movies[req.params.id-1], 1);
});




app.listen(8080);