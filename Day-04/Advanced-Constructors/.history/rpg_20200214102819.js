class Character {
  constructor(name, level, hp, mana, type, money) {
    this.name = name
    this.level = level
    this.hp = hp
    this.mana = mana
    this.type = type
    this.money = money
  }
}
class Mage {
  constructor(name, level, hp, mana, type, money, spells, mageType, inteligence) {
    super(name, level, hp, mana, type, money)
    this.spells = spells
    this.mageType = mageType
    this.inteligence = inteligence
  }
}
class Thief {
  constructor(name, level, hp, mana, type, money, dexterity, daggers) {
    super(name, level, hp, mana, type, money)
    this.dexterity = dexterity
    this.daggers = daggers
  }
}

let char = new Character("Jimmy", 43, 500, 340, "Mage", 443, 45, ) 
console.log(Character)