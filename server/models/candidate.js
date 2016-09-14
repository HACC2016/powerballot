const bookshelf = require('../bookshelf')

const Candidate = bookshelf.Model.extend({
  tableName: 'candidates',
  hasTimestamps: true,
})

module.exports = Candidate
