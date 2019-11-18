/* String */

var hello = 'Hello';
var world = new String('World');

/* Concatenation */
var newStr = hello + ' ' + world;
var newStr2 = `${hello} ${world}`;
console.log(newStr);
console.log(newStr2);

/* char at index */
console.log(newStr.charAt(0));

/* length */
console.log(newStr.length);

/* uppercase */
console.log(newStr.toUpperCase());

/* split to array */
console.log(newStr.split(' '));

/* take a portion */
console.log(newStr.slice(0, 5));
console.log(newStr.slice(0));
console.log(newStr.slice(6));
console.log(newStr.slice(6, 80));
console.log(newStr.slice(-5));

/* replace */
console.log(newStr.replace('World', 'JavaScript'));

/* remove leading and trailing space */
console.log(' Hello World '.trim());
