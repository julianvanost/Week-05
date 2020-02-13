// FACTORY FUNCTIONS
const Product = (name, category, quantity, price) => {
  return {
    name: name,
    category: category,
    quantity: quantity,
    price: price,
  }
}
const pizza = Product("Frozen Cardboard pizza", "Food", 100, 8.99)
console.log(pizza)

// OR : Same result: : 
const Product = (name, category, quantity, price) => ({
  name: name,
  category: category,
  quantity: quantity,
  price: price,
})
const pizza = Product("Frozen Cardboard pizza", "Food", 100, 8.99)
console.log(pizza)


// OR : Same result: : 
const Product = (name, category, quantity, price) => ({
  name,
  category,
  quantity,
  price,
})
const pizza = Product("Frozen Cardboard pizza", "Food", 100, 8.99)
console.log(pizza)