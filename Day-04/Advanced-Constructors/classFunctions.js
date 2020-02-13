class Price {
  constructor(cheap, pricey, fknexpensive, free) {
    this.cheap = cheap
    this.pricey = pricey
    this.fknexpensive = fknexpensive
    this.free = free
  }
}
class Taste extends Price {
  constructor(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious) {
    super(cheap, pricey, fknexpensive, free)
    this.nasty = nasty
    this.fkngross = fkngross
    this.great = great
    this.delicious = delicious
  }
}

class NonWalmart extends Price {
  constructor(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious, organic, nonGMO, kosher, keto) {
    super(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious)
    this.organic = organic
    this.nonGMO = nonGMO
    this.kosher = kosher
    this.keto = keto
  }
}


class Product extends NonWalmart {
  constructor(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious, organic, nonGMO, kosher, keto, name, category, quantity, price) {
    super(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious, organic, nonGMO, kosher, keto)
    this.name = name
    this.category = category
    this.quantity = quantity
    this.price = price
  }
}

class Food extends Product {
  constructor(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious, organic, nonGMO, kosher, keto, name, category, quantity, price, calories, fat, carbs, protein) {
    super(cheap, pricey, fknexpensive, free, nasty, fkngross, great, delicious, organic, nonGMO, kosher, keto, name, category, quantity, price)
    this.calories = calories
    this.fat = fat
    this.carbs = carbs
    this.protein = protein
  }
}

const pizza = new Food(false, false, true, true, 8, "no", 6, true, false, false, false, false, "Jack in Tha Kraken", "Disgusting Greasy Tacos", 54, "too much $", "Too many for sure", "Lots, so much. So much fat, jesus fkn christ m8, so much fat!", '2312g', '899g', 6000)
console.log(pizza)