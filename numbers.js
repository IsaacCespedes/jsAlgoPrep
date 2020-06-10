function modulo(num, divisor) {
  while (num >= divisor) {
    num -= divisor;
  }
  return num;
}

// console.log(modulo(100, 7));

function isPrime(n) {
  if (n <= 1) {
    return false;
  }

  for (let i = 2; i * i < n; i++) {
    if (!modulo(n, i)) {
      return false;
    }
  }

  return true;
}

// console.log(isPrime(11));
// console.log(isPrime(15));

function fastPower(x, y, p) {
  let res = 1;
  x = modulo(x, p);

  if (x == 0) {
    return 0;
  }

  while (y > 0) {
    if (y & 1) {
      res = modulo(res * x, p);
    }
    y = y >> 1;
    x = (x * x) % p;
  }

  return res;
}

// console.log(fastPower(2, 5, 13));

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

function orientation(p1, p2, p3) {
  let val = (p2.y - p1.y) * (p3.x - p2.x) - (p2.x - p1.x) * (p3.y - p2.y);
  if (!val) return 0;
  else if (val < 0) return -1;
  else return 1;
}

// let p1 = new Point(0, 0);
// let p2 = new Point(4, 4);
// let p3 = new Point(1, 2);

// console.log(orientation(p1, p2, p3));

function onSegment(p, q, r) {
  if (
    q.x <= Math.max(p.x, r.x) &&
    q.x >= Math.min(p.x, r.x) &&
    q.y <= Math.max(p.y, r.y) &&
    q.y >= Math.min(p.y, r.y)
  )
    return true;

  return false;
}

function doIntersect(p1, q1, p2, q2) {
  let o1 = orientation(p1, q1, p2);
  let o2 = orientation(p1, q1, q2);
  let o3 = orientation(p2, q2, p1);
  let o4 = orientation(p2, q2, q1);

  if (o1 != o3 && o2 != o4) {
    return true;
  }

  // Special Cases
  // p1, q1 and p2 are colinear and p2 lies on segment p1q1
  if (o1 == 0 && onSegment(p1, p2, q1)) return true;

  // p1, q1 and q2 are colinear and q2 lies on segment p1q1
  if (o2 == 0 && onSegment(p1, q2, q1)) return true;

  // p2, q2 and p1 are colinear and p1 lies on segment p2q2
  if (o3 == 0 && onSegment(p2, p1, q2)) return true;

  // p2, q2 and q1 are colinear and q1 lies on segment p2q2
  if (o4 == 0 && onSegment(p2, q1, q2)) return true;

  return false; // Doesn't fall in any of the above cases
}

// let p1 = new Point(10, 0);
// let p2 = new Point(0, 0);
// let q1 = new Point(0, 10);
// let q2 = new Point(10, 10);

// console.log(doIntersect(p1, q1, p2, q2));
