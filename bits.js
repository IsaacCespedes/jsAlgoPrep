function swapEvenOddBits(x) {
  x = ((x & 0x55555555) << 1) | ((x & 0xaaaaaaaa) >> 1);
  return x >>> 0;
}
// console.log(swapEvenOddBits(23));

function rotate(n, d, left = true) {
  let x = 0;
  if (left) {
    x = (n << d) | (n >> (32 - d));
  } else {
    x = (n >> d) | (n << (32 - d));
  }
  return x >>> 0;
}
// console.log(rotate(16, 2, false));

function countSetBits(n) {
  let count = 0;
  let setBits = new Array(n + 1).fill(0);
  setBits[0] = 0;
  setBits[1] = 1;
  for (let i = 2; i <= n; i++) {
    if (i & 1) {
      setBits[i] = setBits[i - 1] + 1;
    } else {
      setBits[i] = setBits[i / 2];
    }
  }
  for (let i = 0; i <= n; i++) {
    count = count + setBits[i];
  }
  return count;
}
// console.log(countSetBits(6));

function binRep(n) {
  let str = 0;
  for (let i = (1 << 31) >>> 0; i > 0; i >>>= 1) {
    str += n & i ? "1" : "0";
  }
  return str;
}
// console.log(binRep(7));

function numDiffBits(a, b) {
  let xor = a ^ b;
  let count = 0;
  while (xor) {
    if (xor & 1) {
      count++;
    }
    xor >>>= 1;
  }
  return count;
}
console.log(numDiffBits(2, 1));
