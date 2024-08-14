const db = require('./config/database');

// Fonction pour générer un answerId unique
async function generateUniqueAnswerId(collectionAnswer) {
    const lastAnswer = await collectionAnswer.find({}).sort({ answerId: -1 }).limit(1).toArray();
    return lastAnswer.length > 0 ? lastAnswer[0].answerId + 1 : 1;
}

// Fonction d'ajout
async function addAnswer(document) {
    try {
        const collectionAnswer = await db.connection();
        document.answerId = await generateUniqueAnswerId(collectionAnswer); // Générer un answerId unique
        await collectionAnswer.insertOne(document);
        console.log('Document inserted successfully with answerId:', document.answerId);
    } catch (e) {
        console.error('Failed to insert document:', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction permettant d'afficher tous les documents
async function getAnswer() {
    try {
        const collectionAnswer = await db.connection();
        const results = await collectionAnswer.find({}).toArray(); 
        console.log('Documents retrieved:', results);
        return results;
    } catch (e) {
        console.error('Erreur lors de la récupération des documents :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction pour mettre à jour un document en utilisant answerId
async function updateAnswer(answerId, updateData) {
    try {
        const collectionAnswer = await db.connection();
        const result = await collectionAnswer.updateOne({ answerId: answerId }, { $set: updateData }); 
        console.log('Document updated:', result.modifiedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la mise à jour du document :', e.message);
    } finally {
        db.client.close(); 
    }
}

// Fonction permettant de supprimer un document en utilisant answerId
async function destroyAnswer(answerId) {
    try {
        const collectionAnswer = await db.connection();
        const result = await collectionAnswer.deleteOne({ answerId: answerId }); // Supprime un document correspondant à answerId
        console.log('Document deleted:', result.deletedCount);
        return result;
    } catch (e) {
        console.error('Erreur lors de la suppression du document :', e.message);
    } finally {
        db.client.close(); 
    }
}

module.exports = {
    addAnswer,
    getAnswer,
    updateAnswer,
    destroyAnswer
};
