/* Prototype */

/* Objects in JavaScript have a prototype property
that references an object. */

var obj = {
  a: 1,
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

var anotherObject = Object.create(obj);
/*
var anotherObject = {}
anotherObject.__proto__ = obj
*/

console.log(anotherObject);
console.log(anotherObject.a);

console.log(Object.getPrototypeOf(anotherObject));
//Same reference.
console.log(Object.getPrototypeOf(anotherObject) === obj);

console.log(anotherObject.hasOwnProperty('a'));
console.log('a' in anotherObject);

console.log(Object.getOwnPropertyNames(anotherObject));
console.log(Object.keys(anotherObject));

for (var k in anotherObject) {
  console.log('found: ' + k);
}

/* Shadowing */

var obj = {
  a: 1,
};

console.log(Object.getPrototypeOf(obj));
console.log(obj.__proto__);

var anotherObject = Object.create(obj);
anotherObject.a = 7;

console.log(anotherObject.a);
delete anotherObject.a;
console.log(anotherObject.a);

/* Delegation mechanism. The top-end of every normal prototype
chain is the built-in `Object.prototype` */

console.log(Object.prototype);

console.log(Object.getPrototypeOf([1, 2, 3]));
console.log(Object.getPrototypeOf([1, 2, 3]) === Array.prototype);

/* Can be dangerous */
// var myArr1 = [1, 2, 3];

// Array.prototype.map = function() {
//   console.log('oups');
// };

// let result = myArr1.map(function(value) {
//   return value + 1;
// });

// console.log(result);
