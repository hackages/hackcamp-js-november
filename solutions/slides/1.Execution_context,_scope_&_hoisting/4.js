/*2. Function Execution Context: created whenever a function is invoked 

Creation phase:
1. Create an argument object
2. Create an object called `this`
3. Set up memory space for variables and functions
4. Assign variable declarations a default value of “undefined”  

*/

function getUser() {
  console.log(this);
  console.log(arguments);
}
getUser();

/* Hoisting */

function another() {
  console.log(user);
  var user = 'Samih';
}
another();

/* Mental Model */

function another() {
  var user;
  console.log(user);
  user = 'Samih';
}
another();
