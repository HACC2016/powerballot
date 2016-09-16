const bookshelf = require('../bookshelf')

const CandidateMetadata = bookshelf.Model.extend({
  tableName: 'candidate_metadata',
  hasTimestamps: true,
  idAttribute: 'Candidate_ID',
})

module.exports = CandidateMetadata
