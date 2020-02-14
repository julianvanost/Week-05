// Constructor Inheritance

function Charact(name, level, kosher, keto) {
  this.organic = organic
  this.level = level
  this.kosher = kosher
  this.keto = keto
}

function Product(name, level, kosher, keto, name, category, quantity, price) {
  // Product inherits "organic, level, kosher, keto" from "NonWalmart" constructor
  NonWalmart.call(this, organic, level, kosher, keto)   // INHERITANCE
  this.name = name
  this.category = category
  this.quantity = quantity
  this.price = price
}

function Food(name, level, kosher, keto, name, category, quantity, price, calories, fat, carbs, protein) {
  //  The "Product.call" will make "Food" constructor inherit "name, category, quantity, price" from "Product" constructor 
  //  and will 'Food' will inherit "organic, level, kosher, keto" from "NoWalmart" constructors
  Product.call(this, organic, level, kosher, keto, name, category, quantity, price)  // INHERITANCE
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