const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));

app.get("/clockwork", (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
});

// app.listen(8080, (error) => {
//     console.log("This server is running on port ", 8080);
// });

app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });