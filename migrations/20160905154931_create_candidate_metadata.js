exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('candidate_metadata', function(table) {
      table.increments();
      table.text('Candidate_ID')
      table.text('ballot_name')
      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('candidate_metadata'),
  ])
};
