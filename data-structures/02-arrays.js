// CREATING ARRAYS | using the [] is best practice
const numeros = 9090;

const arr = [1, 2, 3];
console.log(arr.length);

const array = new Array(5);
console.log(array.length);

console.log(Array.isArray(arr));
console.log(Array.isArray(array));
console.log(Array.isArray(numeros));

// ACCESSING & WRITING ARRAY ELEMENTS
var nums = [];
for (var i = 0; i < 20; i++) {
  nums[i] = i + 1;
}
console.log(nums);

var sum = 0;
for (var i = 0; i < nums.length; i++) {
  sum += nums[i];
}
console.log(sum);

// CREATING ARRAYS FROM STRINGS
var stringSet = 'Introduction to Arrays'.split(' ');
console.log(stringSet);

var sentence = 'the quick brown fox jumped over the lazy fox';
var words = sentence.split(' ');
for (var i = 0; i < words.length; i++) {
  console.log(`word ${i}: ${words[i]}`);
}

// AGGREGATE ARRAY OPERATIONS
var constants = []; //shallow copy
for (var i = 0; i < 5; i++) {
  constants[i] = i + 1;
}
// var sameConstants = constants;
// constants[2] = 'three';
// console.log(sameConstants);

// deep copy
var sameConstants = [];
function copy(arr1, arr2) {
  for (var i = 0; i < arr1.length; i++) {
    arr2[i] = arr1[i];
  }
}
copy(constants, sameConstants);
constants[2] = 'three';
console.log(sameConstants);

// ACCESSOR FUNCTIONS (returns rep. of the target array as return value)
// .indexOf() and .lastIndexOf()
var namesArray = [
  'Simi',
  'Idera',
  'Bola',
  'Jidesky',
  'John-Padi',
  'David',
  'Cynthia',
  'Raymond',
  'Clayton',
  'Jennifer',
  'Simi',
  'Idera',
];

function checkNameIndex(name) {
  name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  if (namesArray.includes(name)) {
    console.log(`${name} is at index ${namesArray.lastIndexOf(name)} in the namesArray`);
  } else {
    console.log(`${name} is not found in the namesArray array`);
  }
}
checkNameIndex('SiMi');

// STRING REPRESENTATION OF ARRAYS
// .join() and .toString() | comma-seperated-strings
console.log(typeof namesArray.join());
console.log(namesArray.toString());
