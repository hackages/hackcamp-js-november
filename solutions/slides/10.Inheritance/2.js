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

// Don't forget to Object.create (to delegate)
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function() {
  console.log(`${this.name} bark!`);
};

var charlie = new Dog('Charlie', 10, 'Golen');
charlie.bark();
var animal = new Animal('Leo', 8);
// animal.bark();
