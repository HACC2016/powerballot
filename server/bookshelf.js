var productionConnection = process.env.DATABASE_URL
var devConnection = {
  host     : '127.0.0.1',
  user     : '',
  password : '',
  database : 'power_ballot_development',
  charset  : 'utf8',
}

var connection = process.env.NODE_ENV === 'production' ? productionConnection : devConnection

var knex = require('knex')({
  client: 'pg',
  connection,
  migrations: {
    tableName: 'migrations',
  },
})

module.exports = require('bookshelf')(knex)
