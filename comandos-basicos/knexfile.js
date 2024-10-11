// Update with your config settings.


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

require("dotenv").config()
module.exports = {

  client: 'mysql2',
  connection: {
    host: '127.0.0.1',
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
  },

};
