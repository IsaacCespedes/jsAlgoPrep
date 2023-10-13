// Object
let obj = { a: 1, b: 2 };
Object.keys(obj); // ["a", "b"]
Object.values(obj); // [1, 2]
Object.entries(obj); // [["a", 1], ["b", 2]]
const result = Object.groupBy(
  [obj, { a: 1, b: 4 }, { q: 1, b: 2 }],
  ({ a }) => a
);
console.log(result.a); // [{ a: 1, b: 2 }, { a: 1, b: 4 }]
delete obj.a;

for (let [k, v] of Object.entries(obj)) {
}

// for ..in  is for iterating over the enumerable properties of an object
// for ..of  is for iterating over the values of an iterable, like an array, map, set, string

// String
const str = "hello";

for (const char of str) {
  console.log(char);
}

let str1 = "cat";
let str2 = "bat";
str1[1]; // "a"
str1.charAt(1); // "a"
console.log(str.charCodeAt(0)); // 104
String.fromCharCode(68); // "C"
// 104, code point is the same as char code except for emojis and other special characters
console.log(str.codePointAt(0));
str1 < str2;
str1.localeCompare(str2); // returns -1,0,1
str1.includes("at"); // t/f
str1.startsWith("c", 0); // true
str1.endsWith("at", 3); // 3 is endpoint
str1.indexOf("t"); // returns 2
str1.indexOf("t", 1); // returns 2, counts from 1
str1.search(/t/); // returns 2, uses regex
str1.lastIndexOf("t", 1); // 1 is startpoint
str1.match(/[a-z]/g); // ["c", "a", "t"]
const regex = /l+/g;
const matches = str.matchAll(regex);
for (const match of matches) {
  console.log(match[0]); // ["ll"]
}

str1.padEnd(10, "."); // cat.......
str1.padStart(10, "."); // .......cat
str1.replace(/a/, "r"); //crt
str1.replaceAll(/a/, "r");
str1.slice(1, 2); // "a" (start, end)
str1.slice(1); // "at"
str1.slice(-1); // "t"
str1.split(""); // ["c", "a" ,"t"]
const myStr = "Hello World!";
const reversedStr = myStr.split("").reverse().join("");
console.log(reversedStr);
str1.substring(0, 3); // "cat", end index not included
str1.toLowerCase();
str1.toUpperCase();
str1.trimStart();
str1.trimEnd();
str1.trim(); // whitespace from both sides
console.log(str.concat(" ", str2)); // "cat bat"
console.log(str.repeat(3)); // "hellohellohello"

// Map
let map = new Map();
map.set("key", "value");
map.size;
map.has("key");
map.get("key");
map.delete("key");
map.clear();
map.entries(); // iter.next().value : ["key","value"]
map.keys(); // iter.next().value : "key"
map.values(); // iter.next().value : "value"
map.forEach(function (value, key) {});

const map2 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Set
let set = new Set();
set.add("value");
set.size;
set.clear();
set.delete("value");
set.has("value");
for (let item of set) {
}
set.entries(); // iter.next().value
set.values(); // iter.next().value

const set2 = new Set([1, 2, 3]);

for (const element of set2) {
  console.log(element);
}

// Array
let arr = [1, 2, 3];
const initArr = new Array(20).fill(0);
arr.push(4);
// arr.push(4,5,6);
arr.pop();
arr.unshift();
arr.shift();

// arr.concat([4, 5, 6]); // [1,2,3,4,5,6]
// arr.concat(4, 5, 6); // [1,2,3,4,5,6]
// arr.at(-1); // 3
// arr.reverse(); // [3,2,1]
// const array1 = ["a", "b", "c"];
// const iterator = array1.values();

// for (const value of iterator) {
//   console.log(value);
// }

// splice to delete

arr.splice(1, 1); // (start, deleteCount), returns deleted elements
let arrCopy = arr.slice(1, 3); // default (0, n)
arr.sort(); // (function compare(a,b){a-b})
arr.forEach((curr, i, arr) => {});
arr.reduce(function (acc, curr, i, arr) {}, acc);
arr.reduceRight(function (acc, curr, i, arr) {}, acc); // starts with last element
arr.map((curr, i, arr) => {});
arr.includes(3); // true
arr.indexOf(2);
arr.lastIndexOf(2);
arr.join("_"); //1_2_3
arr.find((a) => {
  a > 1;
}); // returns 2
arr.findLast((a) => {
  a > 1;
}); // returns 3
arr.findIndex((a) => {
  a > 1;
}); // returns 1
arr.findLastIndex((a) => {
  a > 1;
}); // returns 2
arr.filter((curr, i, arr) => {
  curr > 1;
}); // returns [2,3]
// every
arr.every((a) => {
  a > 1;
}); // returns false
// some
arr.some((a) => {
  a > 1;
}); // returns true

let myArray = [1, 2, [3, 4]];
myArray = myArray.flat();
// myArray is now [1, 2, 3, 4], since the [3, 4] subarray is flattened
const a1 = ["a", "b", "c"];
const a2 = a1.flatMap((item) => [item.toUpperCase(), item.toLowerCase()]);
console.log(a2); // ['A', 'a', 'B', 'b', 'C', 'c']

// Date
Date.now();
window.performance.now();

// Math
Math.E;
Math.LN2;
Math.LN10;
Math.LOG2E;
Math.LOG10E;
Math.PI;
Math.SQRT1_2;
Math.abs();
Math.sin();
Math.cos();
Math.sqrt();
Math.cbrt();
Math.ceil();
Math.floor();
Math.exp(x);
Math.log();
Math.log10();
Math.log2();
Math.max();
Math.min();
Math.random();
Math.round();
Math.floor(Math.random() * max) + min;

// Number
Number.MAX_VALUE;
Number.MIN_VALUE;
Number.parseFloat(s);
Number.parseInt(s, base);
Number.isNaN(n);
Number.prototype.toExponential();
Number.prototype.toFixed(digits);
Number.prototype.toLocaleString();

// BigInt - can be written with n at the end : 123n
//max positive safe integer
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// max negative safe integer
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// supports + * - % ** operators
let bigInt = BigInt(Number.MAX_SAFE_INTEGER * 2);
console.log(bigInt); // 18014398509481982n

// bitwise operators
// & | ^ ~ << >> >>>
let a = 0b1010;
let b = 0b1100;
console.log(a & b); // 0b1000
console.log(a | b); // 0b1110
console.log(a ^ b); // 0b0110
console.log(~a); // 0b11111111111111111111111111110101
console.log(a << 1); // 0b10100

let negativeNum = -8; // binary representation: 11111111111111111111111111111000
console.log(negativeNum >> 1); // -4 (binary representation: 11111111111111111111111111111100)
console.log(negativeNum >>> 1); // 2147483644 (binary representation: 0111111111111111111111111111100)

let positiveNum = 8; // binary representation: 00000000000000000000000000001000
console.log(positiveNum >> 1); // 4 (binary representation: 00000000000000000000000000000100)
console.log(positiveNum >>> 1); // 4 (binary representation: 00000000000000000000000000000100)
