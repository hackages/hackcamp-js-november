/* Set */

/* The Set object lets you store unique values of any type */

/* Creation */
var set = new Set([1, 2, 3, 4, 5]);
console.log(set);

/* size */
var set = new Set([1, 2, 3, 4, 5]);
console.log(set.size);

/* Add value */
var set = new Set([1, 2, 3, 4, 5]);
set.add('hello');
console.log(set);
set.add('hello');
console.log(set);
console.log(set.size);

/* Existence */
var set = new Set([1, 2, 3, 4, 5]);
console.log(set.has(3));
console.log(set.has(8));

/* Remove */
var set = new Set([1, 2, 3, 4, 5]);
set.delete(2);
console.log(set);

/* Set to array */
var set = new Set([1, 2, 3, 4, 5]);
console.log(Array.from(set));

/* Unique array values */
var arr = [1, 1, 2, 2, 3, 3, 4, 4, 4];
var uniqueValues = Array.from(new Set(arr));
console.log(uniqueValues);
