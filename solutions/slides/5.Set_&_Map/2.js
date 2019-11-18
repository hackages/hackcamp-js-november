/* Map */

/* Map are object for which any values (both object and primitives) 
can be used as key */

/* Creation */
var map = new Map([[1, 'one'], [2, 'two']]);
console.log(map);

/* Access value */
var map = new Map([[1, 'one'], [2, 'two']]);
console.log(map.get(1));
console.log(map.get(8));

/* Set value */
var map = new Map();
map.set(1, 'one');
console.log(map);

/* Existence */
var map = new Map([[1, 'one'], [2, 'two']]);
console.log(map.has(1));
console.log(map.has(9));

/* Delete */
var map = new Map([[1, 'one'], [2, 'two']]);
console.log(map.has(1));
map.delete(1);
console.log(map.has(1));

/* Object/Array as key */
var samih = { name: 'Samih' };
var booba = { name: 'Booba' };
var arr = [1, 2, 3];

var map = new Map();
map.set(samih, 'this is samih');
map.set(booba, 'this is booba');
map.set(arr, { value: 'this is the array' });
console.log(map);
console.log(map.get(samih));
console.log(map.get(arr));
