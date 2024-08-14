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
    collectionSurvey.insertOne(document);
    console.log(`le document ${document.surveyId} a été ajouter avec succès.`);
  } catch (e) {
    throw e.message;
  }
}

async function getSurvey() {
 try{
    const result = await collectionSurvey.find({}).toArray();
    console.log("lesresuta", result);
 }catch(e){
    throw e
 }
}

async function updateSurvey(surveyId, updateData) {
  try{
    await collectionSurvey.updateOne(
        { surveyId: surveyId },
        { $set: updateData }
      );
      console.log(`Document ${surveyId} est modifié avec succès. `);
  }catch(e) {
    throw e
  }
}

async function destroySurvey(surveyId) {
   try{
    collectionSurvey.deleteOne({surveyId: surveyId})
    console.log(`Document ${surveyId} a été supprimer avec succès.`)
   }catch(e){
    throw e
   }
}
module.exports = {
  addSurvey,
  getSurvey,
  updateSurvey,
  destroySurvey
};
