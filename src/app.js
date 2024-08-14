const { addSurvey, getSurvey, updateSurvey, destroySurvey } = require("./surveyModule");
const { addAnswer, getAnswer, updateAnswer, destroyAnswer } = require("./answerModule");
const { addQuestion, getQuestion, updateQuestion, destroyQuestion } = require("./questionModule");





const question ={
  questionId: 1,
  surveyId: 1,
  title: "Comment évalueriez-vous notre service ?",
  type: "rating",
  
}


const survey = {
  surveyId: 1,
  name: "Enquête de Satisfaction 001",
  description: "Enquête visant à évaluer la satisfaction des clients concernant nos services.",
  createdAt: "2024-07-25T08:00:00Z",
  createdBy: {
    employeeName: "Jane Smith",
    employeeRole: "Responsable du service client"
  }
}

const answer = {
  answerId: 1,
  questionId: 1,
  title: "Très satisfait"
}


async function main() {
  try {
    await addSurvey(survey)
    await getSurvey()
    await updateSurvey(1, survey)
    await destroySurvey(1)


    await addAnswer(answer)
    await getAnswer()
    await updateAnswer(1, answer)
    await destroyAnswer(1)


    await addQuestion(question)
    await getQuestion()
    await updateQuestion(1, question)
    await destroyQuestion(1)
  } catch (e) {
    console.log(e);
  }
}

main();
