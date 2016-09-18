exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('polling_places', function(table) {
      table.increments()
      table.text('POLLINGID')
      table.text('FULLADD')
      table.text('CITY')
      table.text('POLLNAME')
      table.text('FACILITY')
      table.text('ZIPCODE')
      table.timestamps()
    }),
  ])
}

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('polling_places'),
  ])
}
