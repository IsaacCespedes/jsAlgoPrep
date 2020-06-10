function combinationMod(n, r, p) {
  let cArr = new Array(r + 1);
  cArr.fill(0);

  cArr[0] = 1;

  // C(n, r)%p = [ C(n-1, r-1)%p + C(n-1, r)%p ] % p
  // C(n, 0) = C(n, n) = 1

  // One pass constructs remaining rows of Pascal
  // Triangle from top to bottom
  for (let i = 1; i <= n; i++) {
    for (let j = Math.min(i, r); j > 0; j--) {
      // nCj = (n-1)Cj + (n-1)C(j-1);
      cArr[j] += cArr[j - 1];
      cArr[j] %= p;
    }
  }
  return cArr[r];
}
// console.log(combinationMod(1000, 900, 13));

function editDistance(s1, s2) {
  let l1 = s1.length;
  let l2 = s2.length;

  let DP = new Array(l1 + 1);
  for (let i = 0; i < DP.length; i++) {
    DP[i] = new Array(l2 + 1);
  }

  // fill top row and left column
  for (let i = 0; i < DP[0].length; i++) {
    DP[0][i] = i;
  }
  for (let j = 0; j < DP.length; j++) {
    DP[j][0] = j;
  }

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      let a = s1[i - 1];
      let b = s2[j - 1];

      let min = Math.min(DP[i - 1][j - 1], DP[i - 1][j], DP[i][j - 1]);

      DP[i][j] = a == b ? min : min + 1;
    }
  }

  let i = l1;
  let j = l2;

  while (i > 0 && j > 0) {
    if (s1[i - 1] == s2[j - 1]) {
      i--;
      j--;
    } else if (DP[i][j] == DP[i - 1][j - 1] + 1) {
      console.log(`Edit s1's ${s1[i - 1]} to s2's ${s2[j - 1]}`);
      i--;
      j--;
    } else if (DP[i][j] == DP[i - 1][j] + 1) {
      console.log(`Delete ${s1[i - 1]} in s1`);
      i--;
    } else if (DP[i][j] == DP[i][j - 1] + 1) {
      console.log(`Delete ${s2[j - 1]} in s2`);
      j--;
    }
  }

  console.log("test");
}

// editDistance("abcdef", "azced");

function longestIncreasingSubsequence(arr) {
  let n = arr.length;
  let lisLengthArr = new Array(n).fill(1);
  let maxLength = 0;
  let maxIndex = 0;

  //set up list O(n^2)
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i] && lisLengthArr[j] >= lisLengthArr[i]) {
        lisLengthArr[i] = lisLengthArr[j] + 1;
        if (maxLength < lisLengthArr[i]) {
          maxLength = lisLengthArr[i];
          maxIndex = i;
        }
      }
    }
  }

  let length = maxLength;
  let subArr = [];
  for (let i = n - 1; i >= 0; i--) {
    if (lisLengthArr[i] == length) {
      subArr.push(arr[i]);
      length--;
    }
  }
  console.log(maxLength);
  console.log(subArr.reverse());
}

// longestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60]);
// longestIncreasingSubsequence([3, 4, -1, 0, 6, 2, 3]);
// longestIncreasingSubsequence([2, 5, 1, 8, 3]);

function longestCommonSubsequence(arrA, arrB) {
  let m = arrA.length;
  let n = arrB.length;

  let lcsLengths = new Array(m + 1);

  for (let i = 0; i < m + 1; i++) {
    lcsLengths[i] = new Array(n + 1).fill(0);
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (arrA[i - 1] == arrB[j - 1]) {
        lcsLengths[i][j] = lcsLengths[i - 1][j - 1] + 1;
      } else {
        lcsLengths[i][j] = Math.max(lcsLengths[i - 1][j], lcsLengths[i][j - 1]);
      }
    }
  }

  let length = lcsLengths[m][n];
  let lcsArr = [];
  let i = m;
  let j = n;
  console.log(length);
  while (i && j) {
    if (lcsLengths[i - 1][j - 1] == length - 1) {
      lcsArr.push(arrB[j - 1]);
      length--;
    } else if (lcsLengths[i][j - 1] < lcsLengths[i - 1][j]) {
      i--;
    } else {
      j--;
    }
  }
  console.log(lcsArr.reverse());
}

// longestCommonSubsequence(
//   ["a", "g", "g", "t", "a", "b"],
//   ["g", "x", "t", "x", "a", "y", "b"]
// );

function knapsack(capacity, items) {
  let n = items.length;

  let kValues = new Array(n + 1);
  for (let kV = 0; kV < n + 1; kV++) {
    kValues[kV] = new Array(capacity + 1).fill(0);
  }

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      let currentItem = items[i - 1];
      let takeVal = currentItem.value + kValues[i - 1][w - currentItem.weight];
      let discardVal = kValues[i - 1][w];
      if (currentItem.weight <= w) {
        kValues[i][w] = Math.max(takeVal, discardVal);
      } else {
        kValues[i][w] = discardVal;
      }
    }
  }

  console.log(kValues[n][capacity]);

  let i = n;
  let w = capacity;
  let itemsChosen = "";
  while (i > 0 && w > 0) {
    if (kValues[i - 1][w] != kValues[i][w]) {
      itemsChosen = `${itemsChosen} ${items[i - 1].weight}`;
      w -= items[i - 1].weight;
    }
    i--;
  }
  console.log(itemsChosen.trim());
}

let items = [
  { weight: 10, value: 60 },
  { weight: 20, value: 100 },
  { weight: 30, value: 120 },
];

knapsack(50, items);

// let items = [
//   { weight: 1, value: 1 },
//   { weight: 3, value: 4 },
//   { weight: 4, value: 5 },
//   { weight: 5, value: 7 },
// ];
// knapsack(7, items);
