exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      table.text('staradvertiser_url')
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('candidate_metadata', function(table) {
      table.dropColumn('staradvertiser_url')
    }),
  ])
}
