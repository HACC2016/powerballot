exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('candidates', function(table) {
      table.increments();
      table.string('Candidate_ID')
      table.string('Contest_ID')
      table.string('Candidate_Name')
      table.string('Candidate_Party')
      table.string('Candidate_FEC')
      table.string('Candidate_CSC')
      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('candidates'),
  ])
};
