const axios = require("axios")
// async & await functions are good for parsing large datasets or handling large amounts of data
// such as a database actions. Used a lot with AJAX
async function adder(a, b) {
  let response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot add strings with math, use numbers instead'))
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


async function subtractor(a, b) {
  let response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot subtract strings with math, use numbers instead'))
    } else {
      resolve(a - b)
    }
  })
  return response
}

subtractor(10, 3)
  .then(sum => {
    console.log(sum)
  })
  .catch(e => console.error(e))
