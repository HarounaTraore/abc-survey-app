const { client, db } = require("./config/database");

const collectionSurvey = db.collection("surveys");

async function generateUniqueSurveyId(collectionSurvey) {
  const lastSurvey = await collectionSurvey
    .find({})
    .sort({ surveyId: -1 })
    .limit(1)
    .toArray();
  return lastSurvey.length > 0 ? lastSurvey[0].surveyId + 1 : 1;
}

async function addSurvey(document) {
  try {
    document.surveyId = await generateUniqueSurveyId(collectionSurvey);
    await collectionSurvey.insertOne(document);
    console.log(`Le document ${document.surveyId} a été ajouté avec succès.`);
  } catch (e) {
    throw new Error(e.message);
  }
}

async function getSurvey() {
  try {
    const result = await collectionSurvey.find({}).toArray();
    console.log("Les résultats:", result);
  } catch (e) {
    throw new Error(e.message);
  }
}

async function updateSurvey(surveyId, updateData) {
  try {
    // Convertir surveyId en entier si nécessaire
    const id = parseInt(surveyId, 10);

    const existingSurvey = await collectionSurvey.findOne({ surveyId: id });
    if (existingSurvey) {
      await collectionSurvey.updateOne(
        { surveyId: id },
        { $set: updateData }
      );
      console.log(`Document ${id} est modifié avec succès.`);
    } else {
      console.log(`Erreur: Le document que vous tentez de modifier n'existe pas.`);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

async function destroySurvey(surveyId) {
  try {
    // Convertir surveyId en entier si nécessaire
    const id = parseInt(surveyId, 10);

    const existingSurvey = await collectionSurvey.findOne({ surveyId: id });
    if (existingSurvey) {
      await collectionSurvey.deleteOne({ surveyId: id });
      console.log(`Document ${id} a été supprimé avec succès.`);
    } else {
      console.log(`Erreur: Le document que vous tentez de supprimer n'existe pas.`);
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = {
  addSurvey,
  getSurvey,
  updateSurvey,
  destroySurvey,
};
