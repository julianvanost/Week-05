const prompt = require('inquirer').createPromptModule()

async function startGame() {
  try {
    const { panelist } = await prompt({
      list: 'input',
      name: 'panelist',
      message: 'What is the name of the constestant?'
    })
    const panelistName = panelist
    console.log(panelistName)
  } catch (e) {
    console.error(e)
  }

  try {
    const { contestants } = await prompt({
      type: 'number',
      name: 'contestants',
      message: 'How many contestanst will be playing?'
    })
    const numContestants = contestants
    console.log(panelistName)
  } catch (e) {
    console.error(e)
  }
}

startGame()