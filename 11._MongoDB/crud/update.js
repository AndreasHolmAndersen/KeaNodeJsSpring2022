import db from "../createConnection.js";

db.actors.updateOne({name: "Tom Hanks"}, {$set: {name: "Tom Cruise"}});