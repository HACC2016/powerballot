exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('candidates', function(table) {
      table.increments();
      table.text('Candidate_ID')
      table.text('Contest_ID')
      table.text('Candidate_Name')
      table.text('Candidate_Party')
      table.text('Candidate_FEC')
      table.text('Candidate_CSC')
      table.timestamps();
    }),
  ])
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('candidates'),
  ])
};
