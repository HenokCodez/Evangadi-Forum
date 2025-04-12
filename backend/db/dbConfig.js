const mysql2 = require("mysql2");

const dbConn = mysql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: 3306,
  connectionLimit: 10,
});

dbConn.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    connection.release();
  }
});

module.exports = dbConn.promise();
