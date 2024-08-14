const {addSurvey, getSurvey, updateSurvey, destroySurvey} = require('./surveyModule')
const {addAnswer, getAnswer, updateAnswer, destroyAnswer} = require('./answerModule')
const {addQuestion, getQuestion, updateQuestion, destroyQuestion} = require('./questionModule')

    const surveys = 
        {
            name: "Customer Satisfaction Survey",
            description: "Survey to evaluate customer satisfaction with our services.",
            createdAt: new Date("2024-07-25T08:00:00Z"),
            createdBy: {
              employeeName: "Jane Smith",
              employeeRole: "Customer Service Manager"
            },
            questionIds: [1, 2, 3, 4, 5, 6]
          }
          
    const questions = 
        {
          surveyId: 1,
          title: "How would you rate our service?",
          type: "rating",

      
        }
       
          
      const answer =  {
        questionId: 2,
        userId: 101,
        answer: "Yes"
      }


async function main() {
    try{
        // await addSurvey(surveys)
        // await getSurvey()
        // await updateSurvey()
        // await destroySurvey()

        // await addAnswer(answer)
        // await getAnswer()
        // await updateAnswer()
        // await destroyAnswer()

        await addQuestion(questions)
        // await getQuestion()
        // await updateQuestion()
        // await destroyQuestion()

    } catch(e){
        throw e
    }
}

main()

