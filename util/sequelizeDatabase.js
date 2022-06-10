const Sequelize = require("sequelize").Sequelize;

const seq = new Sequelize("basic_node_js", "root", "pass", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = seq;
