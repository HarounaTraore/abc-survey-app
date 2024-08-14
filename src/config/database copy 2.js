const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017');

const connection = async () => {
    try {
         await client.connect();
        const db = client.db('survey_db');
        const collectionSurvey = db.collection('surveys');
        const collectionQuestion = db.collection('questions');
        const collectionAnswer = db.collection('answers');
        return {
            collectionAnswer,
            collectionQuestion,
            collectionSurvey
        };
    } catch (e) {
        console.log('Erreur de connection : ', e.message);
    }finally{
    }
   
}

module.exports = {
    connection, client
};
