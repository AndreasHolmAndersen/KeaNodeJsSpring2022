import express from "express";
const app = express();

app.use(express.static("public"));



import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    // console.log("A client connected",socket.id);

    socket.on("a client changed the color", ({ data }) => {
        // socket.broadcast.emit("change the color", { data });
        // socket.emit("change the color", { data });

        io.emit("change the color", { data });
    });
});

import path from "path";

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/colors.html"));
});


server.listen(3000);