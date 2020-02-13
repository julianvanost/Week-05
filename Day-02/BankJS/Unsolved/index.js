var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

if (action == 'total') {
  total(value)
} else if
  (action == 'deposit') {
  deposit(value)
} else if
  (action == 'withdraw') {
  withdraw(value)
} else if
  (action == 'lotto') {
  lotto()
} else {
  console.log("no function called!")
}

function total(tot) {
  fs.readFile("receipts.txt", "utf8", function (err, data) {
    if (err) {
      return console.log(err);
    }
    data = data.split(", ");
    var result = 0;
    for (var i = 0; i < data.length; i++) {
      if (parseFloat(data[i])) {
        result += parseFloat(data[i]);
      }
    }
    console.log("You have a total of " + result.toFixed(2));
    let tot = result.toFixed(2);
    console.log("tot : " + tot)
    return tot;
  });
}

function deposit() {
  fs.appendFile("receipts.txt", ", " + value, function (err) {
    if (err) {
      return console.log(err);
    }
  });
  console.log("Deposited " + value + ".");
}

function withdraw() {
  fs.appendFile("receipts.txt", ", -" + value, function (err) {
    if (err) {
      return console.log(err);
    }
  });
  console.log("Withdrew " + value + ".");
}

function lotto() {
  fs.appendFile("receipts.txt", ", -5.00", function (err) {
    if (err) {
      return console.log(err);
    }
  });

  var chance = Math.floor((Math.random() * 5) + 1);
  if (chance === 1) {
    fs.appendFile("receipts.txt", ", 200", function (err) {
      if (err) {
        return console.log(err);
      }
    });
    console.log("You've just won the lottery! Quit your lousy desk job");
  }
  else {
    console.log(`Lotto lost! You just wasted $5 buying that ticket. Get a job (and a rid of those tight-pants and fo-hawk), ya hipster!`);
    console.log(`Maybe just give in to your inner hipster and join \'Antifa\', or \'Save the Tree-Frogs Association of Portland, OR\'`);
  }
}
