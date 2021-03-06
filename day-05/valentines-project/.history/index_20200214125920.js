// import { async } from "rxjs/internal/scheduler/async"

async function adder(a, b) {
  let response = await new Promise((resolve, reject) => {
    if (typeof a === 'string' || typeof b === 'string') {
      reject(new Error('cannot add strings with math, use numbers instead'))
    } else {
      resolve(a + b)
    }
  })
  return response
}

async function Rungame
function DigitalPal(contestant, numContestants, contestantName, age, outside, houseCondition) {
  this.contestant = contestant
  this.numContestants = numContestants
  this.contestantName = contestantName
  this.age = age
  this.outside = outside
  this.houseCondition = houseCondition
  this.sleep = function () {
    if (this.numContestants) {
      console.log('ZZzzzZZzz.... I am 10 years older now')
      this.numContestants = true
      this.contestantName = true
      this.increaseAge()
    } else {
      console.log('No way! I am not tired')
    }
  }
  this.play = function () {
    if (this.contestantName) {
      console.log('Yay!, Lets play! Some')
      this.contestantName = false
      this.contestant = true
    } else {
      console.log('Not right now. Later?')
    }
  }
  this.feed = function () {
    if (this.contestant) {
      console.log("Yum! Gimme sum moar!")
      this.contestant = false
      this.numContestants = true
    } else {
      console.log("I am not fkn contestant, yackass!")
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
      this.contestantName = false
      this.numContestants = true
    }
  }  this.houseCondition = function () {
    this.houseCondition = this.houseCondition + 50
  }
}

const dog = new DigitalPal(true, false, true, 12, false, 100)
const dog = new DigitalPal(false, true, false, 9, true, 100)

dog.feed()
dog.feed()