const knex = require('knex')({
    client: 'mysql',
    connection: {
      host : "mysql-do-user-7045040-0.b.db.ondigitalocean.com",
      port : 25060,
      user : 'bms',
      password : 'e_NQ2k5mnb7Uly_v',
      database : 'aluguel'
    }
  });
  module.exports = knex