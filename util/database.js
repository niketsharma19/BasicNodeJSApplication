const sql = require("mysql2");

const pool = sql.createPool({
  user: "root",
  database: "basic_node_js",
  host: "localhost",
  password: "pass",
});

module.exports = pool.promise();
