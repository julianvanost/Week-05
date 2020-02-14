// Constructor Inheritance

function Character(name, level, kosher, keto) {
  this.organic = organic
  this.nonGMO = nonGMO
  this.kosher = kosher
  this.keto = keto
}

function Product(organic, nonGMO, kosher, keto, name, category, quantity, price) {
  // Product inherits "organic, nonGMO, kosher, keto" from "NonWalmart" constructor
  NonWalmart.call(this, organic, nonGMO, kosher, keto)   // INHERITANCE
  this.name = name
  this.category = category
  this.quantity = quantity
  this.price = price
}

function Food(organic, nonGMO, kosher, keto, name, category, quantity, price, calories, fat, carbs, protein) {
  //  The "Product.call" will make "Food" constructor inherit "name, category, quantity, price" from "Product" constructor 
  //  and will 'Food' will inherit "organic, nonGMO, kosher, keto" from "NoWalmart" constructors
  Product.call(this, organic, nonGMO, kosher, keto, name, category, quantity, price)  // INHERITANCE
  this.calories = calories
  this.fat = fat
  this.carbs = carbs
  this.protein = protein
}

const pizza = new Product(false, false, false, false 'Frozen Pizza', 'Food', 1000, 8.99, 1000, 59, 199, 12)
callFood = function () {
  console.log(this.pizza)
}
this.callFood()