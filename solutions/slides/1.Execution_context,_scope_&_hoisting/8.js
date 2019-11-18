/* let vs const */

/*
var: 
  function scoped
  undefined when accessing a variable before it's declared

let: 
  block scoped
  ReferenceError when accessing a variable before it's declared

const:
  block scoped
  ReferenceError when accessing a variable before it's declared
  can't be reassigned (does not mean immutable!)
*/

let name = 'Samih';
name = 'Booba';

console.log(name);

const company = 'Hackages';
company = 'another';

/* Does not mean immutable! */
const user = {
  name: 'Samih',
  company: 'Hackages',
};

user.name = 'Booba';

console.log(user);
