/* Class ES5 */

/* No built-in class. Let's try to simulate it. */

/* Function */

function Animal(name, energy) {
  let animal = {};
  animal.name = name;
  animal.energy = energy;

  animal.eat = function(amount) {
    console.log(`${this.name} is eating.`);
    this.energy += amount;
  };

  animal.sleep = function(length) {
    console.log(`${this.name} is sleeping.`);
    this.energy += length;
  };

  return animal;
}

var leo = Animal('Leo', 7);
var snoop = Animal('Snoop', 10);

/* Problem: We recreate the method that are generic each time => waste of memory
  Class: share behavior
*/

/* Prototypal Instantiation */

function Animal(name, energy) {
  let animal = Object.create(Animal.prototype);
  animal.name = name;
  animal.energy = energy;

  return animal;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

var leo = Animal('Leo', 7);
var snoop = Animal('Snoop', 10);

leo.eat(10);
snoop.sleep(5);
console.log(snoop.energy);

console.log(Object.getPrototypeOf(leo) === Animal.prototype)
console.log(leo instanceof Animal)
