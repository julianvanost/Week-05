const prompt = require('inquirer').createPromptModule()
let contestant = ''
let panelist = []
let questions = ['What\'s my favorite food dish?', 'If I had a snake, what would I name it?', 'Guess my grandmother\'s name.', 'Guess my age!', 'how much u luv me?']
let panelistPoints = []
let panelist
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
  console.log(`${contestant}'s Answer: ${answer}`)
  for (let i = 0; i < panAnswers.length; i++) {
    console.log(`${panelist[i]} guessed: ${panAnswers[i]}`)
    if (answer === panAnswers[i]) {
      panelistPoints[i]++
    }
  }
}
async function runMatchGame() {
  try {
    contestant = await getUserInput('Please enter contestants name:', 'input')
    panelist = await getUserInput('Please enter number of panelist:', 'number')
    for (let i = 0; i < panelist; i++) {
      panelist.push(await getUserInput(`Please enter pnaelist #${i + 1}'s name:`, 'input'))
      panelistPoints.push(0)
    }
    for (let i = 0; i < questions.length; i++) {
      const answer = await getUserInput(`${questions[i]}\nContestants Answer:`, 'password')
      let panAnswers = []
      for (let j = 0; j < panelist.length; j++) {
        panAnswers.push(await getUserInput(`Panelist #${j + 1} (${panelist[j]}) Answer:`, 'password'))
      }
      validateAnswers(answer, panAnswers)
    }
  } catch (e) {
  }
}
runMatchGame()