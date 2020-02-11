const fs = require('fs')
// File System node library 

fs.writeFile('allText.txt', 'Hello World!',
  e => e ? console.log(e) : null)
//Creates a file ^^

fs.appendFile('allText.txt', 'Goodbye World!',
  e => e ? console.log(e) : null)
// Appends text to a file ^^

fs.readFile('allText.txt', 'utf8', (e, text) => {
  if (e) {
    console.log(e)
  }
  console.log(text)
})
//Read's file that was created above.