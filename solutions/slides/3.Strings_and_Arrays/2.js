/* Array */

/* Creation */
console.log(new Array(3));
console.log(Array.from({ length: 3 }));
console.log(
  Array.from({ length: 3 }, function(v, i) {
    return i;
  })
);
console.log([1, 2, 3]);

/* length */
var arr = [1, 2, 3];

console.log(arr.length);
arr.length = 7;
console.log(arr.length);

/* isArray */
var arr = [1, 2, 3];
console.log(typeof arr);
console.log(Array.isArray(arr));

/* Access property */
var arr = [1, 2, 3];
console.log(arr[0]);
console.log(arr[4]);
console.log(arr[-1]);

/* We can mix item's types */
var mixedArray = [1, 'two', ['inner']];
console.log(mixedArray[0]);
console.log(mixedArray[1]);
console.log(mixedArray[2]);

/* Set value */
var arr2 = [];
arr2[0] = 'first';
console.log(arr2);

arr2.key = 'value';

console.log(arr2);
console.log(arr2[1]);
console.log(arr2.key);
console.log(arr2.length);

/* Check existence */
var arr = [1, 2, 3, 4];
console.log(arr.includes(1));
console.log(arr.includes(9));

/* Find element */
var arr = [1, 2, 3, 4];
console.log(
  arr.find(function(value) {
    return value === 3;
  })
);
console.log(
  arr.find(function(value) {
    return value === 9;
  })
);

/* copy (by reference) */
var original = [1, 2, 3];
var copy = original;
console.log(copy);
console.log(original === copy);
copy[3] = 4;
console.log(original);

/* copy */
var original = [1, 2, 3];
var copy = Array.from(original);
// var copy = original.slice()
console.log(original);
console.log(copy);
console.log(original === copy);

/* Passed by reference */
function add(arr) {
  arr.push('new');
}
var myArray = [];
add(myArray);
console.log(myArray);

/* Add at then end */
var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

/* Remove last element */
var arr = [1, 2, 3, 4];
var lastElem = arr.pop();
console.log(lastElem);
console.log(arr);

/* map */
var arr = [1, 2, 3, 4];
var transformedArray = arr.map(function(value) {
  return value + 1;
});

console.log(transformedArray);

/* filter */
var arr = [1, 2, 3, 4];
var filteredArray = arr.filter(function(value) {
  return value > 2;
});

console.log(filteredArray);

/* reduce */
var arr = [1, 2, 3, 4];
var total = arr.reduce(function(acc, value) {
  return acc + value;
}, 0);

console.log(total);

/* slice */
var arr = [1, 2, 3, 4];
console.log(arr.slice(2));
console.log(arr.slice(2, 2));
console.log(arr.slice(2, 3));
console.log(arr.slice(-2));
var copy = arr.slice();
console.log(copy);

/* sort */
var arr = [4, 3, 2, 1];

arr.sort(function(a, b) {
  if (a === b) {
    return 0;
  }
  if (a < b) {
    return -1;
  }
  return 1;
});
console.log(arr);

/* join */
var arr = [1, 2, 3, 4];
console.log(arr.join(', '));
