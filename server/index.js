const express = require("express");
const path = require("path");
const mysql = require("mysql");
const {
  connection,
  getAll,
  createOne,
  deleteOne,
  updateOne
} = require("../database/index.js");
const PORT = 3000;
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "client", "public")));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from the server!");
});

app.get("/api/cows", (req, res) => {
  connection.query(getAll, (err, results) => {
    res.json(results);
  });
});
app.post("/api/cows", (req, res) => {
  connection.query(
    createOne,
    [req.body.name, req.body.description],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("sent");
      }
    }
  );
});
app.delete("/api/cows/:idcows", (req, res) => {
  const id = parseInt(req.params.idcows);
  connection.query(deleteOne,[id], (err, result) => {
    if (err) {
      console.error(err);
    }else {
      res.send("item deleted");
    }
  });
});

app.put("/api/cows/:idcows", (req, res) => {
  const id = parseInt(req.params.idcows);
  const updatedName=req.params.name;
  const updatedDescription=req.params.description;
  connection.query(updateOne,[id],[updatedName,updatedDescription], (err, result) => {
    if (err) {
      console.error(err);
    }else {
      res.send("item updated");
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
