const express = require("express");
const app = express();

const movies = [
    { id: 1, title: "Harry Potter 1"},
    { id: 2, title: "Don't look up"},
    { id: 3, title: "Did you lock the door"}
];

app.get("/movies", (req, res) => {
    res.send({movies: movies});
});

app.get("/movies/:id", (req, res) => {
    const foundMovie = movies.find(movie => movie.id === Number(req.params.id));
    foundMovie ? res.send({ movie: foundMovie}) : res.sendStatus(404);
});

app.delete("/movies/:id", (req, res) => {
    const foundMovieIndex = movies.findIndex(movie => movie.id === Number(req.params.id));
    /* if(foundMovieIndex !== -1){
        movies.splice(foundMovieIndex, 1);
        res.send({ });
    } else {
        res.status(404).send({ });
    } */
    foundMovieIndex !== -1 ? movies.splice(foundMovieIndex, 1) : res.status(404).send({ });
});

app.listen(8080, () => {
    console.log("Server is running on port", 8080);
})