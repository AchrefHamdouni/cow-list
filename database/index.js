const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "cowlist",
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL!");
  }
});

// Your Database Queries Here!!
const getAll = "SELECT * FROM cowlist.cows";
const createOne = "INSERT INTO cowlist.cows (name,description) VALUES(?,?)";
const deleteOne = "DELETE FROM cowlist.cows WHERE idcows=?";
const updateOne='UPDATE cowlist.cows SET ? WHERE idcows=?'

// Don't forget to export your functions!
module.exports = { connection, getAll, createOne, deleteOne,updateOne };
