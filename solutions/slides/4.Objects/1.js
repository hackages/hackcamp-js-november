/* Object - key/value pairs */

/* Creation */
// Declarative form
console.log({ name: 'Samih' });

// Constructed form
console.log(new Object({ name: 'Samih' }));

/* Set property - key can only be string */
var obj = {};
obj.name = 'Booba';
obj['age'] = 28;
console.log(obj);

/* Access property */
var obj = { name: 'Samih', company: 'Hackages' };
console.log(obj.name);
console.log(obj['company']);

var companyProperty = 'company';
console.log(obj[companyProperty]);

// Case sensitive
console.log(obj.Name);

/* Delete property */

var obj = { name: 'Samih' };
delete obj.name;
console.log(obj);

/* Nested object */
var obj = { name: 'Samih', company: 'Hackages', friend: { name: 'Booba' } };
console.log(obj.friend.name);
console.log(obj['friend']['name']);

/* Existence */
var myObj = {
  a: 1,
  b: 2,
  c: undefined,
};

console.log(myObj.c);
console.log(myObj.d);

// Does not look at the prototype chain
console.log(myObj.hasOwnProperty('c'));
console.log(myObj.hasOwnProperty('d'));

// Look up the prototype chain
console.log('c' in myObj);
console.log('d' in myObj);

/* Enumeration */
var myObj = {
  a: 1,
  b: 2,
};

// Return all enumarble properties
console.log(Object.keys(myObj));

for (var k in myObj) {
  console.log(k, myObj[k]);
}

// Return all the properties
console.log(Object.getOwnPropertyNames(myObj));

/* Iteration */
var myObj = {
  a: 1,
  b: 2,
};

Object.values(myObj).map((value) => {
  console.log(value);
});

/* Copy reference */
var myObj = { a: 1 };
var copy = myObj;
copy.b = 'two';

console.log(myObj);

/* Passed by reference */
function mutate(obj) {
  obj.name = 'changed';
}

var myObj = { name: 'Samih' };
mutate(myObj);
console.log(myObj);

/* Copy */
var myObj = {
  name: 'Booba',
  company: 'Hackages',
  friend: {
    name: 'Milenko',
  },
};

var copy = Object.assign({}, myObj);

console.log(copy);
console.log(myObj === copy);
console.log(myObj.friend === copy.friend);
copy.friend = { name: 'Samih' };
console.log(myObj);
console.log(copy);

/* Deep change */
var myObj = {
  name: 'Booba',
  company: 'Hackages',
  friend: {
    name: 'Milenko',
  },
};

var copy = Object.assign({}, myObj);
copy.friend.name = 'Samih';

console.log(myObj);

/* --- */

var myObj = {
  name: 'Booba',
  company: 'Hackages',
  friend: {
    name: 'Milenko',
  },
};

var copy = Object.assign({}, myObj, { friend: { name: 'Samih' } });

console.log(myObj);
console.log(copy);
console.log(copy.friend === myObj.friend);

/* Property Descriptors */

var myObject = {
  a: 2,
};

console.log(Object.getOwnPropertyDescriptor(myObject, 'a'));

Object.defineProperty(myObj, 'b', {
  value: 3,
  writable: true,
  enumerable: true,
  configurable: true,
});

console.log(myObj);

/* Writable - Ability to change the property */
var myObj = {};

Object.defineProperty(myObj, 'a', {
  value: 1,
  writable: false,
  enumerable: true,
  configurable: true,
});

console.log(myObj);
myObj.a = 3;
console.log(myObj);

/* Configurable - Ability to reconfigure a property descriptor */
var myObj = {};

Object.defineProperty(myObj, 'a', {
  value: 1,
  writable: true,
  enumerable: true,
  configurable: false,
});

console.log(myObj);
// Object.defineProperty(myObj, 'a', {
//   value: 1,
//   writable: true,
//   enumerable: false,
//   configurable: false,
// });

/* Enumerable - Specify if the property will show up 
when enumerating the object properties */

var myObj = {
  a: 1,
};

Object.defineProperty(myObj, 'b', { value: 2, enumerable: false });

// Return all enumarble properties
console.log(Object.keys(myObj));

for (var k in myObj) {
  console.log(k, myObj[k]);
}

// Return all the properties
console.log(Object.getOwnPropertyNames(myObj));

/* Object.freeze */

/* Create a frozen object. It means that we won't be able to change any of the object's property 
(make all of them as `writable: false`). NOT RECURSIVE. */

var myObj = Object.freeze({
  name: 'Booba',
  company: 'Hackages',
  friend: { name: 'Milenko' },
});

myObj.name = 'Milenko';

console.log(myObj.name);

myObj.friend.name = 'Samih';
console.log(myObj.friend.name);
