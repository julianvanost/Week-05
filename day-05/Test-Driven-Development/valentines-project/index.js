

function DigitalPal(hungry, sleepy, bored, age, outside, houseCondition) {
  this.hungry = hungry
  this.sleepy = sleepy
  this.bored = bored
  this.age = age
  this.outside = outside
  this.houseCondition = houseCondition
  this.sleep = function () {
    if (this.sleepy) {
      console.log('ZZzzzZZzz.... I am 10 years older now')
      this.sleepy = true
      this.bored = true
      this.increaseAge()
    } else {
      console.log('No way! I am not tired')
    }
  }
  this.play = function () {
    if (this.bored) {
      console.log('Yay!, Lets play! Some')
      this.bored = false
      this.hungry = true
    } else {
      console.log('Not right now. Later?')
    }
  }
  this.feed = function () {
    if (this.hungry) {
      console.log("Yum! Gimme sum moar!")
      this.hungry = false
      this.sleepy = true
    } else {
      console.log("I am not fkn hungry, yackass!")
    }
  }
  this.increaseAge = function () {
    this.age++
    console.log('Happy Birthday to me, I am ' + this.age + 'years old!')
  }
  let bark = function () {
    console.log('Woof Woof')
  }
  this.goOutside = function () {
    if (this.outside === false) {
      console.log('Yay, I love the outdoors')
      this.outside = true
      this.bark()
    } else {
      console.log('We are already outside')
    }
  }
  this.goInside = function () {
    if (this.outside) {
      console.log("Do we have to? Ok then fine!")
    } else {
      console.log("Already inside, are you going crazy?")
    }
  }
  this.mine = function () {
    console.log("Meow! Meow! ")
  }
  this.destroyHouse = function () {
    if (this.houseCondition >= 0) {
      console.log("Muahahahaha house is destoryed!@#$!")
      this.bored = false
      this.sleepy = true
    }
  }  this.houseCondition = function () {
    this.houseCondition = this.houseCondition + 50
  }
}

const dog = new DigitalPal(true, false, true, 12, false, 100)
const dog = new DigitalPal(false, true, false, 9, true, 100)

dog.feed()
dog.feed()