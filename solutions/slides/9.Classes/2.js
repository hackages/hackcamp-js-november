/* All functions have a property called `prototype` */

function Foo() {}
console.log(Foo.prototype);
// Reference back to the function
console.log(Foo.prototype.constructor === Foo);

/* Object created from calling a function with `new` keywoard
will be prototype-linked to the function prototype. */

function Foo() {}

var a = new Foo();

console.log(Object.getPrototypeOf(a) === Foo.prototype);
console.log(a.constructor === Foo);

/* Pseudoclassical Instantiation. */
function Animal(name, energy) {
  // this = Object.create(Animal.prototype);
  this.name = name;
  this.energy = energy;
  // return this;
}

Animal.prototype.eat = function(amount) {
  console.log(`${this.name} is eating.`);
  this.energy += amount;
};

Animal.prototype.sleep = function(length) {
  console.log(`${this.name} is sleeping.`);
  this.energy += length;
};

// Static property
Animal.IsAlive = function(animal) {
  return animal.energy > 8;
};

var leo = new Animal('Leo', 7);
var snoop = new Animal('Snoop', 8);

leo.eat(10);
console.log(Animal.IsAlive(snoop));
snoop.sleep(5);
console.log(snoop.energy);

console.log(Object.getPrototypeOf(leo) === Animal.prototype);
console.log(leo instanceof Animal);
