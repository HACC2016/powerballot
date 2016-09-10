
Install postgres (on Mac you can use Postgres.app)

Install knex

Install npm

npm install
npm start

createdb power_ballot_development
npm install -g knex
knex migrate:latest

node server/update_data.js
