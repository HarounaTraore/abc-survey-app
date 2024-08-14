const { MongoClient } = require('mongodb');

const client = new MongoClient('mongodb://localhost:27017/survey_db');

const connection = async () => {
    try {
         await client.connect();
         return
        // const db = client.db('survey_db');
        // const collectionAnswer = db.collection('answers');
        // const collectionSurvey = db.collection('surveys');
        // const collectionQuestion = db.collection('questions');
        // return {collectionSurvey, collectionQuestion, collectionAnswer
// }
    } catch (e) {
        console.log('Erreur de connection : ', e.message);
    }finally{
    }
   
}

module.exports = {
    connection, client
};
