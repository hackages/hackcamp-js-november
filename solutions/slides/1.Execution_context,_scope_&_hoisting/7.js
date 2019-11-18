/* var vs let */

/*
var: 
  function scoped
  undefined when accessing a variable before it's declared

let: 
  block scoped
  ReferenceError when accessing a variable before it's declared (no hoisting)
*/

/* No hoisting */

// function noHoisting() {
//   console.log(a);
//   let a = 5;
// }
// noHoisting();


/* Block Scoped */
// function fn() {
//   var foo = true;
//   console.log(bar);
//   if (foo) {
//     let bar = 7;
//   }
// }
// fn();

/* Loops + Closure */

for (var i = 1; i <= 5; i++) {
  setTimeout(function timer() {
    console.log(i); 
  }, i);
}

/* solution: create new scope for each oteration or use let */

