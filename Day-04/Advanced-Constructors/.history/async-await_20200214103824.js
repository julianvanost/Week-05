const axios = require("axios")

const adder = (a, b, ) => {
  return new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot add strings'))
    } else {
      resolve(a + b)
    }
  })
}

adder(5, 7)
  .then(sum => {
    console.log(sum)
  })
  .catch(e => console.error(e))
