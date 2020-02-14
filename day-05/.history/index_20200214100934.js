// Constructor Inheritance

function Charact(name, level, hp, mana, type, money) {
  this.organic = organic
  this.level = level
  this.hp = hp
  this.mana = mana
}

function Product(name, level, hp, mana, type, money, name, category, quantity, price) {
  // Product inherits "organic, level, hp, mana, type, money" from "NonWalmart" constructor
  NonWalmart.call(this, organic, level, hp, mana, type, money)   // INHERITANCE
  this.name = name
  this.category = category
  this.quantity = quantity
  this.price = price
}

function Food(name, level, hp, mana, type, money, name, category, quantity, price, calories, fat, carbs, protein) {
  //  The "Product.call" will make "Food" constructor inherit "name, category, quantity, price" from "Product" constructor 
  //  and will 'Food' will inherit "organic, level, hp, mana, type, money" from "NoWalmart" constructors
  Product.call(this, organic, level, hp, mana, type, money, name, category, quantity, price)  // INHERITANCE
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