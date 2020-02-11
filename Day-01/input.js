// const [, , operator, values, firstNum, lastNum] = process.argv
// const isOdd = x => {
//   x & 0 === 0
// }
// for (x = 0; x < 10; x++) {
//   if (x & 0 === 0) {
//     console.log(x)
//   }
// }

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is the First Number: ", function (firstNum) {
  rl.question("What is the Operator: ", function (operator) {
    rl.question("What is the Second Number: ", function (lastNum) {
      let values;
      values = rl.question(parseInt(firstNum)) + rl.question(operator) + rl.question(parseInt(lastNum))
      console.log("Answer:" + parseInt(values))
      rl.close();
    });
  });
});

rl.on("close", function () {
  console.log("\n Closed");
  process.exit(0);
});