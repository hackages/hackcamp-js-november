/* Equality */

/* Two equality operators
  - Loose equality (==)
  - Strict euqality (===)

Coercion: converting value from on type to another.
  - Explicit coercion
  - Implicit coercion
  */

/* Explicit coercion */

var n1 = 4;
var s1 = n1.toString();
var s2 = String(n1);
console.log(typeof s1, s1);
console.log(typeof s2, s2);

/* Implicit coercion */

/* Loose Equality */
console.log(4 == '4');
console.log(4 === '4');

console.log(4 + 'hello');

console.log(null == undefined);
console.log(null === undefined);

// bug ? Object.is()
console.log(NaN == NaN);
console.log(NaN === NaN);

/* Addition */
console.log(4 + 'hello');

/* Condition */
/* Falsy values: */
console.log(Boolean(false));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));

if (0) {
  console.log('thruty');
}
if (1) {
  console.log('thruty');
}

var user = 'Samih' || 'no user';
console.log(user);

var user2 = '' || 'no user';
console.log(user2);

/* Primitive values are immutables => compared by value.
Others like Objects, Array, Map are compared by reference */

var str1 = 'hello';
var str2 = 'hello';

console.log(str1 === str2);

/* Does not share the same reference */
var st1 = "Samih"
var st2 = st1
st2 = "samih_copy"
console.log(st1)


/* Compared by reference */
var obj1 = { name: 'Samih' };
var obj2 = { name: 'Samih' };
var obj3 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1 === obj3);

/* Share the same reference */
var samih = {name: "samih"}
var samih_copy = samih
samih_copy.name = "samih_copy"
console.log(samih)

