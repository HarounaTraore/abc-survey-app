const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb://localhost:27017')
  client.connect()
const db = client.db('survey_db')

module.exports = {client, db}