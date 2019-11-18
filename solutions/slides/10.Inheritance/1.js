/* Inheritance */

/* Pseudoclassical Instantiation. */

function Animal(name, energy) {
  this.name = name;
  this.energy = energy;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  this.energy += length;
  console.log(`${this.name} is sleeping.`);
};

/* Dog */

function Dog(name, energy, breed) {
  Animal.call(this, name, energy);
  this.breed = breed;
}

var charlie = new Dog('Charlie', 10, 'Golden');

console.log(charlie);

/* What about methods ? */

// console.log(charlie.sleep())

Dog.prototype = Object.create(Animal.prototype);

var leo = new Dog('Leo', 7, 'Golden');

leo.sleep()

