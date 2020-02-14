const prompt = require('inquirer').createPromptModule()
let conetstant = ''
let panelists = []
let questions = ['one', 'two', 'three', 'four', 'five']
let panelistPoints = []
let numOfPanelists
async function getUserInput(message, type) {
  try {
    const { response } = await prompt({
      type: type,
      name: 'response',
      message: message
    })
    return response
  } catch (e) { console.log(e) }
}
function validateAnswers(answer, panAnswers) {
  console.log(`${conetstant}'s Answer: ${answer}`)
  for (let i = 0; i < panAnswers.length; i++) {
    console.log(`${panelists[i]} guessed: ${panAnswers[i]}`)
    if (answer === panAnswers[i]) {
      panelistPoints[i]++
    }
  }
}
async function runMatchGame() {
  try {
    conetstant = await getUserInput('Please enter contestants name:', 'input')
    numOfPanelists = await getUserInput('Please enter number of panelists:', 'number')
    for (let i = 0; i < numOfPanelists; i++) {
      panelists.push(await getUserInput(`Please enter pnaelist #${i + 1}'s name:`, 'input'))
      panelistPoints.push(0)
    }
    for (let i = 0; i < questions.length; i++) {
      const answer = await getUserInput(`${questions[i]}\nContestants Answer:`, 'password')
      let panAnswers = []
      for (let j = 0; j < panelists.length; j++) {
        panAnswers.push(await getUserInput(`Panelist #${j + 1} (${panelists[j]}) Answer:`, 'password'))
      }
      validateAnswers(answer, panAnswers)
    }
  } catch (e) {
  }
}
runMatchGame()'