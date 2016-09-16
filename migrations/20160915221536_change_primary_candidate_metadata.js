
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      table.unique('Candidate_ID')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      // TODO: Un-unique????
    }),
  ])
}
