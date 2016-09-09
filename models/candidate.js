const bookshelf = require('../server/bookshelf')

const Candidate = bookshelf.Model.extend({
  tableName: 'candidates',
  hasTimestamps: true,
});

module.exports = Candidate
