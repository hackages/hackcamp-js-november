/* Destructuring */

let user = {
  name: 'Samih',
  age: 27,
  company: 'Hackages',
  friend: { name: 'Alex', age: 25 },
};

/* ES5 */
var name = user.name;
var age = user.age;
console.log(name);
console.log(age);

/* ES 6 */

var { name, age } = user;

console.log(name);
console.log(age);

/* Give other name */

var { name: firstname, age } = user;

console.log(firstname);
console.log(age);

/* Default value */

var { profession = 'developer' } = user;

console.log(profession);

/* Nested */

var {
  age,
  friend: { name },
} = user;

console.log(name);
// console.log(friend);

/* Default value object */
var { age, nested: { nestedProp } = {} } = user;

console.log(nestedProp);

/* Rest */

var {name, ...rest} = user;
console.log(rest)

/* Function */

function test({ param1 }) {
  console.log(param1);
}

test({ param1: 1, param2: 2 });

/* Copy */

var copy = {...user};
console.log(copy)
console.log(copy === user)

/* Array */

var users = ['Samih', 'Milenko', 'Alex', 'Bouba'];

/* ES 5 */
var samih = users[0];
var milenko = users[1];

/* ES 6 */

var [samih, milenko, _, bouba, other = 'NA'] = users;
console.log(samih);
console.log(bouba);
console.log(other);

/* With object */

var { 0: samih, 2: bouba } = users;

console.log(samih);
console.log(bouba);

/* Function */

function printUsers([first, _, third]){
  console.log(first)
  console.log(third)
}

printUsers(users)

/* Copy */
var copy = [...users];
console.log(copy)
console.log(copy === users)
