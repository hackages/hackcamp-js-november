/* Closure */

/* Closure is when a function is able to remember and access 
its lexical scope even when that function is 
executing outside its lexical scope 
*/

/* Not a Closure */
function foo() {
  var a = 2;

  function bar() {
    console.log(a);
  }

  bar();  // bar is executed in its lexical scope (where declared)
}

foo();

/* Closure */

function foo2() {
  var a = 2;

  function bar2() {
    console.log(a);
  }

  return bar2;
}

var baz2 = foo2();

baz2(); // closure - execute baz2 outside of its scope.
