var knex = require('knex')({
  client: 'pg',
  connection: {
    host     : '127.0.0.1',
    user     : '',
    password : '',
    database : 'power_ballot_development',
    charset  : 'utf8',
  },
  migrations: {
    tableName: 'migrations',
  },
});

module.exports = require('bookshelf')(knex);

// var User = bookshelf.Model.extend({
//   tableName: 'users',
// });
