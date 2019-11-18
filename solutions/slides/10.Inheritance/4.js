/* Class */

class Animal {
  constructor(name, energy) {
    this.name = name
    this.energy = energy
  }
  eat(amount) {
    console.log(`${this.name} is eating.`)
    this.energy += amount
  }
  sleep() {
    console.log(`${this.name} is sleeping.`)
    this.energy += length
  }
}

class Dog extends Animal {
  constructor(name, energy, breed) {
    super(name, energy) // calls Animal's constructor
    this.breed = breed
  }
  bark() {
    console.log(`${this.name} bark!`);
  }
}