// const axios = require("axios")

async function adder = (a, b, ) {
  let response = new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot add strings'))
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
