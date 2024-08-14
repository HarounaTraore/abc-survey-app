const { client, db } = require("./config/database");

const collectionQuestion = db.collection("questions");

async function generateUniqueQuestionId(collectionQuestion) {
  const lastQuestion = await collectionQuestion
    .find({})
    .sort({ questionId: -1 })
    .limit(1)
    .toArray();
  return lastQuestion.length > 0 ? lastQuestion[0].questionId + 1 : 1;
}

async function addQuestion(document) {
  try {
    document.questionId = await generateUniqueQuestionId(collectionQuestion);
    collectionQuestion.insertOne(document);
    console.log(`le document ${document.questionId} a été ajouter avec succès.`);
  } catch (e) {
    throw e.message;
  }
}

async function getQuestion() {
 try{
    const result = await collectionQuestion.find({}).toArray();
    console.log("lesresuta", result);
 }catch(e){
    throw e
 }
}

async function updateQuestion(questionId, updateData) {
  try{
    await collectionQuestion.updateOne(
        { questionId: questionId },
        { $set: updateData }
      );
      console.log(`Document ${questionId} est modifié avec succès. `);
  }catch(e) {
    throw e
  }
}

async function destroyQuestion(questionId) {
   try{
    collectionQuestion.deleteOne({questionId: questionId})
    console.log(`Document ${questionId} a été supprimer avec succès.`)
   }catch(e){
    throw e
   }
}
module.exports = {
  addQuestion,
  getQuestion,
  updateQuestion,
  destroyQuestion
};
