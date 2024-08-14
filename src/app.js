const {addSurvey, getSurvey, updateSurvey, destroySurvey} = require('./surveyModule')
// const {addAnswer, getAnswer, updateAnswer, destroyAnswer} = require('./answerModule')
// const {addQuestion, getQuestion, updateQuestion, destroyQuestion} = require('./questionModule')

    const surveys = 
        {   
            name: "Customer InSatisfaction Survey",
            description: "ssssssssssssssssssssssssss.",
            createdAt: new Date("2024-07-25T08:00:00Z"),
            createdBy: {
              employeeName: "Harouna Traore",
              employeeRole: "Client Developpeur."
            },
            questionIds: 1
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
        // await updateSurvey(8, surveys)
        await destroySurvey(11)

        // await addAnswer(answer)
        // await getAnswer()
        // await updateAnswer()
        // await destroyAnswer()

        // await addQuestion(questions)
        // await getQuestion()
        // await updateQuestion()
        // await destroyQuestion()

    } catch(e){
        console.log(e)
    }
}

main()

