const express = require("express");
const app = express();
const port = 8000;

const mongoose = require("mongoose");
const MONGOSERVER =
  "celerexUser:j6XpDw6DN9ED26P@zohocrmcluster.izadd.mongodb.net";
const MONGODBNAME = "celerex-dev?retryWrites=true&w=majority";
const MONGOURI = `mongodb+srv://${MONGOSERVER}/${MONGODBNAME}`;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/productos", (req, res) => {
  res.send("Hello World!");
});

try {
  mongoose
    .connect(MONGOURI)
    .then((res) => {
      app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
} catch (e) {
  console.log(e);
}
