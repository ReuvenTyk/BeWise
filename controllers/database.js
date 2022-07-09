const config = require("../config/dev");
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0,
});

async function query(sql, values) {
  const promisePool = pool.promise();
  return ([row, fields] = await promisePool.query(sql, values));
}

module.exports = {
  query,
};
