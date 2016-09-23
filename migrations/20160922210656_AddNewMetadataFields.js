exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      table.text('Candidate_CSC')
      table.text('csc_viz_url')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      table.dropColumn('Candidate_CSC')
      table.dropColumn('csc_viz_url')
    }),
  ])
}
