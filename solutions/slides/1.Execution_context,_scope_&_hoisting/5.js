/* SCOPE */

/* We can think of scope to `where varaibles are accessible. 
  We can define scope as the current execution context`
  Two kinds of scope: Global and Function.
  Each function has its own Execution Context (Scope). 
  Variable accessible within the scope they are created */

function foo() {
  var bar = 'Declared in foo';
}

foo();

// console.log(bar);

/* If a variable is not found in the local scope, 
JS Engine will check to the parent scope (until global) = Scope chain */

var day = 'Monday';
function outer() {
  var user = 'Samih';
  function inner() {
    // Look up to parent scope
    console.log(user);
    console.log(day);
  }
  inner();
}
outer();

/* Shadowing */

function outer() {
  var user = 'Samih';
  function inner() {
    var user = 'Booba';
    // Look up to parent scope
    console.log(user);
  }
  inner();
}
outer();

/* Only functions create new scope */
function fn() {
  var foo = true;
  console.log(bar);
  if (foo) {
    var bar = 7;
  }
}
fn()
