// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config();
const path = require("path");

const { DB_URL_DEV } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: DB_URL_DEV,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: path.join(__dirname, "server", "db", "migrations"),
    },
  },

  production: {
    client: "postgresql",
    connection: DB_URL_DEV,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
