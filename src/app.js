const { addSurvey, getSurvey, updateSurvey, destroySurvey } = require("./surveyModule");
const { addAnswer, getAnswer, updateAnswer, destroyAnswer } = require("./answerModule");
const { addQuestion, getQuestion, updateQuestion, destroyQuestion } = require("./questionModule");



async function main() {
  try {
    await addSurvey()
    await getSurvey()
    await updateSurvey()
    await destroySurvey()


    await addAnswer()
    await getAnswer()
    await updateAnswer()
    await destroyAnswer()


    await addQuestion()
    await getQuestion()
    await updateQuestion()
    await destroyQuestion()
  } catch (e) {
    console.log(e);
  }
}

main();
