const db = require('./config/database');

// Fonction pour générer un surveyId unique
async function generateUniqueSurveyId(collectionSurvey) {
    const lastSurvey = await collectionSurvey.find({}).sort({ surveyId: -1 }).limit(1).toArray();
    return lastSurvey.length > 0 ? lastSurvey[0].surveyId + 1 : 1;
}

// Fonction d'ajout
async function addSurvey(document) {
    try {
        const collectionSurvey = await db.connection();
        document.surveyId = await generateUniqueSurveyId(collectionSurvey); // Générer un surveyId unique
        await collectionSurvey.insertOne(document);
        console.log('Document inserted successfully with surveyId:', document.surveyId);
    } catch (e) {
        console.error('Failed to insert document:', e.message);
    } finally {
        db.client.close(); 
    }
}

// Une fonction permettant d'afficher tous les documents
async function getSurvey() {
    try {
        const collectionSurvey = await db.connection();
        const results = await collectionSurvey.find({}).toArray(); 
        console.log('Documents retrieved:', results);
        return results;
    } catch (e) {
        console.error('Erreur lors de la récupération des documents :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour mettre à jour un document en utilisant surveyId
async function updateSurvey(surveyId, updateData) {
    try {
        const collectionSurvey = await db.connection();
        const result = await collectionSurvey.updateOne({ surveyId: surveyId }, { $set: updateData }); 
        console.log('Document updated:', result.modifiedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la mise à jour du document :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour supprimer un document en utilisant surveyId
async function destroySurvey(surveyId) {
    try {
        const collectionSurvey = await db.connection();
        const result = await collectionSurvey.deleteOne({ surveyId: surveyId }); // Supprime un document correspondant à surveyId
        console.log('Document deleted:', result.deletedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la suppression du document :', e.message);
    } finally {
        db.client.close(); // Assure que la connexion est fermée après l'opération
    }
}

module.exports = {
    addSurvey,
    getSurvey,
    updateSurvey,
    destroySurvey
}
