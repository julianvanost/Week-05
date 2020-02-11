const [, , operator, a, b] = process.argv

// node index.js add 5 7
// node index.js subtract 12 3
// node index.js multiply 9 8
// node index.js divide 12 6

switch (operator) {
  case 'add':
    console.log(parseInt(a) + parseInt(b))
    break
  case 'subtract':
    console.log(parseInt(a) - parseInt(b))
    break
  case 'multiply':
    console.log(parseInt(a) * parseInt(b))
    break
  case 'divide':
    console.log(parseInt(a) / parseInt(b))
    break
}