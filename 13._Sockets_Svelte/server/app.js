import "dotenv/config";

import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));    

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
});
app.use(sessionMiddleware);

import path from "path";
app.use(express.static(path.resolve("../client/public")));

import router from "./routers/userregistration.js";
app.use(router);

import http from "http";
const server = http.createServer(app);

import { Server } from "socket.io";
const io = new Server(server);

io.on("connection", (socket) => {
    socket.on("colorChanged", ({ data }) => {
        io.emit("changeColor", { data });
    });
});




const PORT = process.env.port || 3000;
server.listen(PORT, () => {
    console.log("Server listening on port", PORT);
});