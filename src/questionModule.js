const db = require('./config/database');

// Fonction pour générer un questionId unique
async function generateUniqueQuestionId(collectionQuestion) {
    const lastQuestion = await collectionQuestion.find({}).sort({ questionId: -1 }).limit(1).toArray();
    return lastQuestion.length > 0 ? lastQuestion[0].questionId + 1 : 1;
}

// Fonction d'ajout
async function addQuestion(document) {
    try {
        const collectionQuestion = await db.connection();
        
        document.questionId = await generateUniqueQuestionId(collectionQuestion); // Générer un questionId unique
        await db.client.collectionQuestion.insertOne(document);
        console.log('Document inserted successfully with questionId:', document.questionId);
    } catch (e) {
        console.error('Failed to insert document:', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour récupérer tous les documents
async function getQuestion() {
    try {
        const collectionQuestion = await db.connection();
        const results = await collectionQuestion.find({}).toArray(); 
        console.log('Documents retrieved:', results);
        return results;
    } catch (e) {
        console.error('Erreur lors de la récupération des documents :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour mettre à jour un document en utilisant questionId
async function updateQuestion(questionId, updateData) {
    try {
        const collectionQuestion = await db.connection();
        const result = await collectionQuestion.updateOne({ questionId: questionId }, { $set: updateData }); 
        console.log('Document updated:', result.modifiedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la mise à jour du document :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour supprimer un document en utilisant questionId
async function destroyQuestion(questionId) {
    try {
        const collectionQuestion = await db.connection();
        const result = await collectionQuestion.deleteOne({ questionId: questionId });
        console.log('Document deleted:', result.deletedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la suppression du document :', e.message);
    } finally {
        db.client.close(); 
    }
}

module.exports = {
    addQuestion,
    getQuestion,
    updateQuestion,
    destroyQuestion
}
