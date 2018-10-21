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

{"error":{"code":499,"message":"Token Required","messageCode":"SB_0005","details":["Token Required"]}}

https://services2.arcgis.com/tuFQUQg1xd48W6M5/ArcGIS/rest/services/HACC_HI2016G_Candidates/FeatureServer/1/query?where=1=1&geometry=-157.84046804353997,21.288510260084095&geometryType=esriGeometryPoint&returnGeometry=false&inSR=4326&outFields=*&f=json

client id:
HDi1G0Torc7kHUx7

client secret:
f39a9490ed2744e5888320af3d362bbb

temporary token:
k11BZSoYc_nvtv44j0BOdwYllBkOR6-NPO1FVgDUcYOwF6p7_8DUQrykqJQLWw-H8YSyTzo7HvIOW5rbvIdGYUN3Nr6qiquBMJ7Jo1LCN0K-3PyeFHfgz9a1txcUWPjdGm2COFg7iBM9WmkvWWIhRg..
