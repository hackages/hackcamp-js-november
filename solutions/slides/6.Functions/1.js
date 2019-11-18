/* Function */

/* Declaration */

/* foo is just a variable in the enclosing scope 
that's given a reference to the function being declared */
function foo() {
  console.log('foo');
}
foo();

// anonymous function
var bar = function() {
  console.log('bar');
};
bar();

var baz = function foo() {
  console.log('baz');
};

baz();

/* Function are object */
function fn(){
  console.log("object")
}
fn.foo = "bar";

console.log(fn)
console.log(fn.foo)

/* arguments */
function sayHello(name) {
  console.log(`Hello ${name}`);
}
sayHello('Samih');

/* Default argument */
function sayHi(name = 'default') {
  console.log(`Hi ${name}`);
}
sayHi();
sayHi(null);

/* Callback function */
function first(value, cb) {
  cb(value);
}

first('hello', function(value) {
  console.log(value.toUpperCase());
});

/* Return function */
function makeAdd(x) {
  return function(y) {
    return x + y;
  };
}

var addTwo = makeAdd(2);
var addFive = makeAdd(5);
console.log(addTwo(5));
console.log(addFive(5));

/* arguments & this */

function foo() {
  console.log(arguments);
  console.log(this);
}
foo('a', 'b');

/* IIFE - Immediately Invoked Function Expressions */
(function() {
  console.log('hey');
})();
