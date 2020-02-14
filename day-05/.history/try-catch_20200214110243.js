const prompt = require('inquirer').createPromptModule()
const axios = require('axios')

async function getMovie() {
  try {
    const { title } = await prompt({
      type: 'input',
      name: 'title',
      message: 'What movie are you looking for?'
    })

    const { data } = await axios.get(`http://omdbapi.com/?t=${title}&apikey=trilogy`)

    console.log(data)
  } catch (e) {
    console.error(e)
  }
}

getMovie()