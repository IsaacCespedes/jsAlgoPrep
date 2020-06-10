// Object
let obj = { a: 1, b: 2 };
Object.keys(obj); // [keys]
Object.values(obj); // [values]
Object.entries(obj); // [[key, value]]
delete obj.a;

// String
let str1 = "cat";
let str2 = "bat";
str1[1];
str1.charAt(1);
str1.charCodeAt(1);
String.fromCharCode(68); // "C"
str1 < str2;
str1.localeCompare(str2); // returns -1,0,1
str1.includes("at"); // t/f
str1.startsWith("c", 0); // true
str1.endsWith("at", 3); // 3 is endpoint
str1.indexOf("t", 1); // 1 is startpoint
str1.search(/t/); // returns 2
str1.lastIndexOf("t", 1); // 1 is startpoint
str1.match(/[a-z]/g); // ["c", "a", "t"]
str1.padEnd(10, "."); // cat.......
str1.padStart(10, "."); // .......cat
str1.replace(/a/, "r"); //crt
str1.replaceAll(/a/, "r");
str1.slice(1, 2); // "at"
str1.slice(1); // "at"
str1.slice(-1); // "t"
str1.split(""); // ["c", "a" ,"t"]
str1.substring(0, 3); // "cat"
str1.toLowerCase();
str1.toUpperCase();
str1.trimStart();
str1.trimEnd();
str1.trim(); // whitespace from both sides

Number.MAX_VALUE;
Number.MIN_VALUE;
Number.parseFloat(s);
Number.parseInt(s, base);
Number.isNaN(n);
Number.prototype.toExponential();
Number.prototype.toFixed(digits);
Number.prototype.toLocaleString();

// BigInt - ends with n (123n)

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

// Array
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift();
arr.shift();
arr.splice(1, 1); // (start, deleteCount)
let arrCopy = arr.slice(1, 3); // default (0, n)
arr.sort(); // (function compare(a,b){a-b})
arr.forEach((curr) => {});
arr.reduce(function (acc, curr, i, arr) {}, acc);
arr.map((curr) => {});
arr.includes(3); // true
arr.indexOf(2);
arr.lastIndexOf(2);
arr.join("_"); //1_2_3
arr.find((a) => {
  a > 1;
}); // returns 2
arr.findIndex((a) => {
  a > 1;
}); // returns 1
arr.filter((a) => {
  a > 1;
});

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
