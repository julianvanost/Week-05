// const axios = require("axios")
// async
async function adder = (a, b, ) {
  let response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot add strings with math'))
    } else {
      resolve(a + b)
    }
  })
  return response
}

adder(5, 7)
  .then(sum => {
    console.log(sum)
  })
  .catch(e => console.error(e))
