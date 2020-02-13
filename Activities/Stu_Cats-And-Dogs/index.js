let dog = {
  raining: true,
  noise: "Woof!",
  makeNoise() {
    if (this.raining)
      console.log(this.noise)

  }
}

let cat = {
  raining: false,
  noise: "Meow!",
  makeNoise() {
    if (this.raining)
      console.log(this.noise)

  }
}

// const massHysteria = (dog, cat) => {
//   cat.raining = true
//   if (dog.raining && cat.raining) {
//     console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//   }
// }

dog.makeNoise()

cat.raining = true

cat.makeNoise()

// massHysteria()