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
    await collectionAnswer.insertOne(document);
    console.log(`Le document ${document.answerId} a été ajouté avec succès.`);
  } catch (e) {
    throw new Error(e.message);
  }
}

async function getAnswer() {
  try {
    const result = await collectionAnswer.find({}).toArray();
    console.log("Les résultats:", result);
  } catch (e) {
    throw new Error(e.message);
  }
}

async function updateAnswer(answerId, updateData) {
  try {
    // Convertir answerId en entier si nécessaire
    const id = parseInt(answerId, 10);

    // Exclure le champ `_id` de updateData s'il est présent
    const { _id, ...updateFields } = updateData;

    const existingAnswer = await collectionAnswer.findOne({ answerId: id });
    if (existingAnswer) {
      await collectionAnswer.updateOne(
        { answerId: id },
        { $set: updateFields }
      );
      console.log(`Document ${id} est modifié avec succès.`);
    } else {
      console.log(
        `Erreur: Le document que vous tentez de modifier n'existe pas.`
      );
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

async function destroyAnswer(answerId) {
  try {
    // Convertir answerId en entier si nécessaire
    const id = parseInt(answerId, 10);

    const existingAnswer = await collectionAnswer.findOne({ answerId: id });
    if (existingAnswer) {
      await collectionAnswer.deleteOne({ answerId: id });
      console.log(`Document ${id} a été supprimé avec succès.`);
    } else {
      console.log(
        `Erreur: Le document que vous tentez de supprimer n'existe pas.`
      );
    }
  } catch (e) {
    throw new Error(e.message);
  }
}

module.exports = {
  addAnswer,
  getAnswer,
  updateAnswer,
  destroyAnswer,
};
