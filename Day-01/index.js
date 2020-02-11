const songs = require('./songs.js')
const books = require('./books.js')
const movies = require('./movies.js')
console.log("Songs  : " + songs)
console.log("Books  : " + books)
console.log("Movies : " + movies)

const myFunction = require("./file.js")
myFunction()
// 

//Calc files:
const addFunc = require("./add.js")
const subtractFunc = require("./subtract.js")
const multiplyFunc = require("./multiply.js")
const devideFunc = require("./devide.js")
const [, , operator, a, b] = process.argv
switch (operator) {
  case 'add':
    console.log(addFunc(parseInt(a), parseInt(b)))
    break
  case 'subtract':
    console.log(subtractFunc(parseInt(a), parseInt(b)))
    break
  case 'multiply':
    console.log(multiplyFunc(parseInt(a), parseInt(b)))
    break
  case 'divide':
    console.log(devideFunc(parseInt(a), parseInt(b)))
    break
}
// console.log(process.argv)
// // subtract(10, 11)
// // add(12, 13)
const fs = require('fs')
// File System node library 
function writeNewFile() {
  fs.writeFile('allText.txt', 'some text', (e, text) => {
    if (e) {

      fs.appendFile('allText.txt', songs + "&bsp;" + movies + "&bsp;" + books, (e, text) => {

        if (e) {

          fs.readFile('allText.txt', 'utf8', (e, text) => {

            if (e) {
              console.log(e)
            }
            console.log(text)
          })
        }
      })
    }
  })
}

writeNewFile()
  //Read's file that was created above.