// Three different ways to build constructors

// first letter of all constructor names should be capitlized (e.g. "function Pet") 


// One - "Functional Constructors" : 
function Pet(raining, noise) {
  this.raining = raining
  this.noise = noise
  this.makeNoie = function () {
    if (this.raining) {
      console.log(noise)
    }
  }
}

const dog = new Pet(true, "Woof!");
const cat = new Pet(false, "Meow!");


function Person(name, email, address, phone) {
  this.name = name
  this.email = email
  this.address = address
  this.phone = phone
}
const teacher = new Person("John", "john@gmail.com", "101 The City Drive", "555-555-5555");
const student = new Person("Kim", "kim@gmail.com", "124 Feldner Rd", "555-555-1234");


// Two - "TYPE? Constructors" : 







// Three - "Class Constructors" : 