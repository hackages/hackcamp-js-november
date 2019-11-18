/* This */

/* The this keyword allows you to reuse functions with different contexts.
   Function Execution Context => this is created.
   What's the `this` referencing ? => look where the function is invoked */

/* Call a function with a `this` context */

function identify() {
  return this.name.toUpperCase();
}

console.log(identify.call({ name: 'Samih' }));

/* is like */
function identifyWithCtx(context) {
  return context.name.toUpperCase();
}

console.log(identifyWithCtx({ name: 'Samih' }));

/* `This` is automatically defined in the scope of every function */

/* 4 rules:
  1. Implicit Binding
  2. Explicit Binding
  3. new Binding
  4. Default Binding
*/

/* 1. Implicit Binding */

/* Function called on an object (implicit context).
Look to the left of the dot when the function is invoked */

var user = {
  name: 'Samih',
  age: 27,
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

user.greet();

/* Reference chain matters */

var user = {
  name: 'Samih',
  age: 27,
  friend: {
    name: 'Booba',
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    },
  },
};

user.friend.greet();

/* Implicit lost */
var obj = {
  a: 2,
  foo: function() {
    console.log(this.a);
  },
};

var bar = obj.foo; // function reference

bar(); // What matters is where the function is invoked

/* Same with callback */

function doFoo(fn) {
  fn();
}

var obj = {
  a: 2,
  foo: function() {
    console.log(this.a);
  },
};

doFoo(obj.foo);

/* 2. Explicit Binding */

/* “call” is a method on every function that allows you to invoke 
the function specifying in what context the function will be invoked */

var user = {
  name: 'Samih',
  age: 27,
};

function greet() {
  console.log(`Hello, my name is ${this.name}`);
}

greet();
greet.call(user);
greet.apply(user);

/* With arguments */
var user = {
  name: 'Samih',
  age: 27,
};

function sayHi(l1, l2) {
  console.log(`Hello, my name is ${this.name} and I know ${l1}, ${l2}`);
}

sayHi.call(user, 'JavaScript', 'Python');
sayHi.apply(user, ['JavaScript', 'Python']);

/* bind */
var user = {
  name: 'Samih',
  age: 27,
};

function printAge() {
  console.log(this.age);
}
var printUserAge = printAge.bind(user); // Return a new function
printUserAge();

/* 3. new Binding */

/*By calling a function with `new`, it will create a brand new object for you and call it `this`:
The `this` keywoard will reference this newly created object.
If the function does not explicitly return something, this new object (`this`) is returned. */

function User(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello ${this.name}`);
  };
}

const me = new User('Samih', 27);

console.log(me);
me.greet();

/* Kind of */

function User2(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    console.log(`Hello ${this.name}`);
  };
  return this;
}

var me2 = User2.call({}, 'Samih', 27);
console.log(me2);

/* Default Binding - catch-all case */

/* Default rule when none of the other rules apply. 
The `this` keyword is binded to the global object. */

function sayAge() {
  console.log(`My age is ${this.age}`);
}

var user = {
  name: 'Samih',
  age: 27,
};
// global.age = 45
sayAge();

/* Arrow functions */

/* Allow to write functions in a more concise format */

function plain() {
  console.log('plain');
}

var arrow = () => {
  console.log('arrow');
};

var arrow2 = () => 'Hey';

/* They don't have the arguments property */

let arrow = () => {
  console.log(arguments)
}

/* Arrow functions don't have theur own `this`*/

function hasThis() {
  console.log(this);
}
hasThis();

var arrow = () => {
  console.log(this);
};
arrow();
arrow.call({ name: 'Samih' });

/* this is determined how you’d expect, following the normal variable lookup rules */

function foo() {
  // this = {a: 2}
  return (a) => {
    console.log(this.a);
  };
}

var obj1 = {
  a: 2,
};

var obj2 = {
  a: 3,
};

var bar = foo.call(obj1);
bar.call(obj2);

function foo2() {
  // this = {a: 2}
  return function a() {
    // this = {a: 3}
    console.log(this.a);
  };
}

var bar2 = foo2.call(obj1);
bar2.call(obj2);

/* --- */
var user = {
  name: 'Samih',
  languages: ['JavaScript', 'Python', 'Ruby'],
  greet() {
    return this.languages.reduce(function(acc, language, i) {
      if (i === this.languages.length - 1) {
        return `${acc} and ${language}`;
      }
      return `${acc} ${language}`;
    }, '');
  },
};

console.log(user.greet());

/* --- */

function foo() {
  setTimeout(function() {
    console.log(this.a);
  }, 100);
}

var obj = {
  a: 2,
};

foo.call(obj);
