/* EXECUTION CONTEXT */

/* Execution contexts allow JavaScript engine to manage and run the code.
   Each execution contexts has two phases:
    - Creation phase
    - Execution phase

    
 1. Global Execution Context (created when we run the program)
    
 Creation phase:
      1. Create a global object (window or global on Node)
      2. Create an object called `this` which reference the global object
      3. Set up memory space for variables and functions
      4. Assign variable declarations a default value of “undefined”  

    https://jsbin.com/wujiyal/edit?js,console
 */

/* Variables are initialized during the creation phase => default value to "undefined". 
   This is called the HOISTING.
*/

console.log('name: ', name);

var name = 'Samih';

/* Mental model */

// var name;

// console.log('name: ', name)

// name = 'Samih'
