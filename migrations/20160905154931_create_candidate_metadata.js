exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('candidate_metadata', function(table) {
      table.increments();
      table.string('Candidate_ID')
      table.string('ballot_name')
      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('candidate_metadata'),
  ])
};
