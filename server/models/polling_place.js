const bookshelf = require('../bookshelf')

const PollingPlace = bookshelf.Model.extend({
  tableName: 'polling_places',
  hasTimestamps: true,
})

module.exports = PollingPlace
