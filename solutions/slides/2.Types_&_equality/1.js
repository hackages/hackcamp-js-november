/* Types */

/* 7 language types:
  - string
  - number
  - boolean
  - symbol
  - null
  - undefined
  - object (not primitive) */

/* typeof null to return the string "object" incorrectly. 
It should return its own primitive type. */

console.log(typeof '');
console.log(typeof 7);
console.log(typeof true);
console.log(typeof Symbol(4));
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof { name: 'Samih' });

/* Function is a sub-type of Object (callable object). */
/* Arrays are also a form of objects, with extra behavior */

console.log(typeof function() {});

/* Built-in Objects:
  - String
  - Number
  - Boolean
  - Object
  - Function
  - Array
  - Set
  - Map
  - Date
  - RegExp
  - Error

These are no types but built-in functions that we call with the new keyword 
to create object of the sub-type in question. 
*/

var strPrimitive = 'I am a string';
console.log(typeof strPrimitive);
console.log(strPrimitive instanceof String);

var strObject = new String('I am a string');
console.log(typeof strObject);
console.log(strObject instanceof String);

// inspect the object sub-type
console.log(Object.prototype.toString.call(strObject));

/* 
These objects contains additional properties. T
he language automatically coerces primitive value to their 
object representation when necessary. */

console.log(String.prototype);

var s1 = new String('hello');
console.log(s1.toUpperCase());

var s2 = 'hello';
console.log(s2.toUpperCase());
