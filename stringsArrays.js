// REVERSING

function reverseString(s) {
  return s.split("").reverse().join("");
}

function reverseStringIgnoreSpecials(s) {
  let sArray = s.split("");

  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    let leftChar = sArray[i];
    let rightChar = sArray[j];

    let lAlpha = leftChar.match(/[a-zA-Z]/i);
    let rAlpha = rightChar.match(/[a-zA-Z]/i);

    if (!lAlpha) {
      i++;
    }

    if (!rAlpha) {
      j--;
    }

    if (lAlpha && rAlpha) {
      sArray[j] = leftChar;
      sArray[i] = rightChar;
      i++;
      j--;
    }
  }

  return sArray.join("");
}

// let myString = "Ab,c,de!$";

// console.log(reverseString(myString));
// console.log(reverseStringIgnoreSpecials(myString));

// PYTHAGOREAN TRIPLETS
function hasPythagoreanTriplet(arr) {
  let hypotenuseSet = new Set(arr.map((i) => i * i));
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let hypCalc = arr[i] * arr[i] + arr[j] * arr[j];
      if (hypotenuseSet.has(hypCalc)) {
        return true;
      }
    }
  }
  return false;
}

// console.log(hasPythagoreanTriplet([10, 4, 6, 12, 5]));
// console.log(hasPythagoreanTriplet([3, 1, 4, 6, 5]));

function buySellStock(prices) {
  if (prices.length <= 1) {
    return;
  }

  let i = 0;
  let n = prices.length;

  while (i < n - 1) {
    // find local minima
    while (i < n - 1 && prices[i + 1] <= prices[i]) {
      i++;
    }

    if (i == n - 1) {
      break;
    }

    let buy = i++;

    // find local maxima

    while (i < n && prices[i] >= prices[i - 1]) {
      i++;
    }

    let sell = i - 1;

    console.log(`Buy: ${buy}, Sell: ${sell}`);
  }
}

// buySellStock([100, 180, 260, 310, 40, 535, 695]);

function longestPalindrome(s) {
  let start = 0;
  let end = 0;
  let n = s.length;
  let maxPalLength = 0;

  for (let i = 0; i <= n - 1; i += 0.5) {
    // pal center
    let a = Math.floor(i);
    let b = Math.ceil(i);
    let currPalLength = 0;

    // iterate to edges
    while (a >= 0 && b <= n - 1 && s[a] == s[b]) {
      currPalLength += a == b ? 1 : 2;
      a--;
      b++;
    }

    if (currPalLength > maxPalLength) {
      maxPalLength = currPalLength;
      start = a + 1;
      end = b - 1;
    }
  }

  let retVal = s.substring(start, end + 1);
  return retVal;
}

console.log(longestPalindrome("babaab"));

function maxSubarraySum(arr) {
  let maxSum = Number.MIN_VALUE;
  let runningSum = 0;

  // for array values
  // update end to i when maxSum updates
  // update start to i + 1 when runningSumUpdates
  for (let i = 0; i < arr.length; i++) {
    runningSum += arr[i];
    maxSum = Math.max(maxSum, runningSum);
    runningSum = Math.max(runningSum, 0);
  }

  return maxSum;
}

// console.log(maxSubarraySum([-2, -3, 4, -1, -2, 1, 5, -3]));

function smallestSubarrayWithSum(arr, x) {
  let n = arr.length;
  let minLen = n + 1;
  let currSum = 0;
  let start = 0;
  let end = 0;

  while (end < n) {
    while (currSum <= x && end < n) {
      currSum += arr[end];
      end++;
    }

    while (currSum > x && start < n) {
      minLen = Math.min(minLen, end - start);
      currSum -= arr[start];
      start++;
    }
  }
  return minLen;
}

// console.log(
//   smallestSubarrayWithSum([1, 11, 100, 1, 0, 200, 3, 2, 1, 250], 280)
// );
