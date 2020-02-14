const prompt = require('inquirer').createPromptModule()
let conetstant = ''
let panelists = []
let questions = ['What\'s my favorite food', 'two', 'three', 'four', 'five']
let numOfPanelists
async function getUserInput(message, type) {
  try {
    const { response } = await prompt({
      type: type,
      name: 'response',
      message: message
    })
    return response
  } catch (e) {
  }
}
async function runMatchGame() {
  try {
    contestant = await getUserInput('Please enter contestants name:', 'input')
    numOfPanelists = await getUserInput('Please enter number of panelists:', 'number')
    for (let i = 0; i < numOfPanelists; i++) {
      panelists.push(await getUserInput(`Please enter panelists #${i + 1}'s name:`, 'input'))
    }
    for (let i = 0; i < questions.length; i++) {
      const answer = await getUserInput(`${questions[i]}\n\s Contestants Answer:`, 'password')
      console.log(answer)
    }
  } catch (e) {
  }
}
runMatchGame()