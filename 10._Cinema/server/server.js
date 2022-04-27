import express from "express";
const app = express();

import cors from "cors";
app.use(cors());

import path from "path";
app.use(express.static(path.resolve('../client/public')));

import moviesRouter from "./routers/moviesRouter.js";
app.use(moviesRouter);








const PORT = 3000;
app.listen(PORT, () => {
    console.log("The server is running on port", PORT);
});




