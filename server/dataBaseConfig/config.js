const mysql = require("mysql2");
const connection = mysql.createConnection({
  host: "164.92.194.42",
  user: "said",
  port: 5600,
  password: "$Said123456",
  database: "harmonystore_db",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

module.exports = { connection };