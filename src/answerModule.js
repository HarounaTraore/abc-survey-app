const { client, db } = require("./config/database");

const collectionAnswer = db.collection("answers");

async function generateUniqueAnswerId(collectionAnswer) {
  const lastAnswer = await collectionAnswer
    .find({})
    .sort({ answerId: -1 })
    .limit(1)
    .toArray();
  return lastAnswer.length > 0 ? lastAnswer[0].answerId + 1 : 1;
}

async function addAnswer(document) {
  try {
    document.answerId = await generateUniqueAnswerId(collectionAnswer);
    collectionAnswer.insertOne(document);
    console.log(`le document ${document.answerId} a été ajouter avec succès.`);
  } catch (e) {
    throw e.message;
  }
}

async function getAnswer() {
 try{
    const result = await collectionAnswer.find({}).toArray();
    console.log("lesresuta", result);
 }catch(e){
    throw e
 }
}

async function updateAnswer(answerId, updateData) {
  try{
    await collectionAnswer.updateOne(
        { answerId: answerId },
        { $set: updateData }
      );
      console.log(`Document ${answerId} est modifié avec succès. `);
  }catch(e) {
    throw e
  }
}

async function destroyAnswer(answerId) {
   try{
    collectionAnswer.deleteOne({answerId: answerId})
    console.log(`Document ${answerId} a été supprimer avec succès.`)
   }catch(e){
    throw e
   }
}
module.exports = {
  addAnswer,
  getAnswer,
  updateAnswer,
  destroyAnswer
};
