class Animal {
  // Default property
  constructor(name, energy = 0) {
    this.name = name;
    this.energy = energy;
  }
  eat(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  }
  sleep(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  }
  // Static property
  static IsAlive(animal) {
    return animal.energy > 8;
  }
}

const leo = new Animal('Leo', 7);
const snoop = new Animal('Snoop');
console.log(snoop.energy);

console.log(Animal.prototype);
console.log(Object.getPrototypeOf(leo) === Animal.prototype);
console.log(leo instanceof Animal);
