const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let collection;

async function connect() {
    try {
        await client.connect();
        console.log('Connected!');

        const db = client.db('surveyDB');
        collection = db.collection('surveys');
    } catch (e) {
        console.error('Failed to connect to MongoDB:', e.message);
    }
}

async function connection() {
    try {
        await connect(); // Assurez-vous que la connexion est établie
        await collection.insertMany([{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }, { e: 5 }]);
        console.log('Documents inserted');
    } catch (e) {
        console.error(e.message);
    } finally {
        await client.close(); // Ferme la connexion au client MongoDB
    }
}

// Exporter la collection et la fonction connection
module.exports = { connection, getCollection: () => collection };
