function Product(name, category, quantity, price) {
  this.name = name
  this.category = category
  this.quantity = quantity
  this.price = price
}

function Food(name, category, quantity, price, calories, fat, carbs, protein) {
  //the "Product call" will take the Properties from product and "Food" consrtuctor will now inherit them 
  Product.call(this, name, category, quantity, price) // INHERITANCE
  this.calories = calories
  this.fat = fat
  this.carbs = carbs
  this.protein = protein
}

Food.prototype.servingSize = 5 // Changes the 'servingSize" property for all later instances of the "Food" constructor
pizza.servingSize = 5 // Only changes the "servingSize" property for this instance of the "Food" constructor

const pizza = new Product('Frozen Pizza', 'Food', 1000, 8.99, 1000, 59, 199, 12)
console.log(pizza)