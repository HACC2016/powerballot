# Development Setup

Install postgres (on Mac you can use Postgres.app)
Install npm and node.js (https://nodejs.org/en/)

Run these commands:

    npm install -g knex
    npm install
    npm start
    createdb power_ballot_development
    knex migrate:latest
    node server/update_data.js
    node server/insert_candidate_metadata.js

# Production Deploys

    heroku pg:push power_ballot_development DATABASE_URL --app power-ballot
