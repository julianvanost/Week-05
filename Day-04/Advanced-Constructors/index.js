const Product = (name, category, quantity, price) => ({
  name,
  category,
  quantity,
  price,
})

const NotWalmart = (organic, nonGMO, kosher, keto) => ({
  organic,
  nonGMO,
  kosher,
  keto,
})

const Food = (name, category, quantity, price, calories, fat, carbs, protein, organic, nonGMO, kosher, keto) => ({
  ...Product(name, category, quantity, price),
  calories,
  fat,
  carbs,
  protein,
  ...NotWalmart(organic, nonGMO, kosher, keto)
})


const pizza = Food('Frozen Pepperoni Pizza', 'food', 1000, 8.99, 1000, 100, 10, 1, false, false, true, false)

console.log(pizza)