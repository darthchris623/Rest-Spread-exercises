console.log('Rest & spread operator exercises');

// Refactor it to use the rest operator & an arrow function:

// Traditional function delcaration
// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// };

// Altered code
const filterOutOdds = (...nums) => {
  return nums.filter((num) => num % 2 === 0);
};

// console.log(filterOutOdds(1, 2, 3, 4, 5, 6));

/*
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.
Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
*/

// function findMin(...nums) {
//   return nums.reduce(function (min, nextNum) {
//     return nextNum < min ? nextNum : min;
//   });
// };

const findMin = (...nums) => nums.reduce((min, nextNum) => nextNum < min ? nextNum : min);

// console.log(findMin(1, 4, 12, -3)); // -3
// console.log(findMin(14, 52, -10, 11, 27, -18)); // -18

/*
mergeObjects
Write a function called mergeObjects that accepts two objects and returns a new object
which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
*/

const testObj1 = { a: 1, b: 2 };
const testObj2 = { c: 3, d: 4 };

const newTestObj = { ...testObj1, ...testObj2 };

// function mergeObjects(...obj) {
//   return { ...obj };
// }; // Doesn't work, returns --> {{a:1, b:2},{c:3, d:4}}

// function mergeObjects(...obj) {
//   return obj;
// }; // Doesn't work, returns --> [{a:1, b:2},{c:3, d:4}]

const mergeObjects = (object1, object2) => ({ ...object1, ...object2 });

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments.
The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]
*/

const testArary = [1, 2, 3, 4];
// First draft
// function doubleAndReturnArgs(arr, ...args) {
//   // console.log(arr); // [1, 2, 3, 4]
//   // console.log(args); // [5, 6]
//   // console.log([...arr, args * 2]); // --> [1, 2, 3, 4, NaN]
//   const doublesArr = args.map(function (val) {
//     return val * 2;
//   });
//   return [...arr, ...doublesArr]
// };

// Final answer
const doubleAndReturnArgs = (arr, ...args) => {
  const doublesArr = args.map((val) => val * 2);
  return [...arr, ...doublesArr]
};

// console.log(testArary, 5, 6);

/*
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//   return items.slice(Math.floor(Math.random() * items.length));
// };

const removeRandom = items => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1)];
};

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
  return [...array1, ...array2];
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
  return {...obj, [key]:val };
};


/** Return a new object with a key removed. */

// THIS ONE RETURNS THE SAME OBJECT
// const removeKey = (obj, key) => {
//   delete obj[key];
//   return obj;
// };

// MY METHOD
const removeKey = (obj, key) => {
  const newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

// const removeKey = (obj, key) => {

//   // OPTION 1
//   let newObj = { ...obj }
//   delete newObj[key]
//   return newObj;

//   // OPTION 2 (uses an object enhancement you'll see in the next unit)
//   // ({ [key]: undefined, ...obj } = obj);
//   // return obj;
// };


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
  const newObject = { ...obj };
  newObject[key] = val;
  return newObject;
};