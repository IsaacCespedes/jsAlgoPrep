function binarySearch(arr, val) {
  if (!arr || !arr.length) {
    return -1;
  }
  let lo = 0;
  let hi = arr.length - 1;
  let mid = 0;

  while (lo < hi) {
    mid = Math.floor(lo + (hi - lo) / 2);
    let midVal = arr[mid];
    if (midVal == val) {
      return mid;
    } else if (midVal > val) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return -1;
}

// console.log(binarySearch([2, 3, 4, 10, 40], 10));

class QuickSort {
  constructor(arr) {
    this.arr = arr;
  }

  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }

  partition(lo, hi) {
    let pivot = this.arr[hi];
    let i = lo - 1;
    for (let j = lo; j <= hi - 1; j++) {
      if (this.arr[j] < pivot) {
        i++;
        this.swap(i, j);
      }
    }
    this.swap(i + 1, hi);
    return i + 1;
  }

  quicksort(lo, hi) {
    if (lo < hi) {
      let part = this.partition(lo, hi);
      this.quicksort(lo, part - 1);
      this.quicksort(part + 1, hi);
    }
  }

  initQS() {
    this.quicksort(0, this.arr.length - 1);
    console.log(this.arr);
  }
}

// let qs = new QuickSort([10, 7, 8, 9, 1, 5]);
// qs.initQS();
// console.log("done");

class MinHeap {
  constructor(arr) {
    this.arr = arr;
  }

  swap(a, b) {
    let temp = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = temp;
  }

  parent(index) {
    return Math.floor((index - 1) / 2);
  }

  insert(k) {
    this.arr.push(k);
    let i = this.arr.length - 1;

    while (i > 0 && this.arr[this.parent(i)] > this.arr[i]) {
      this.swap(i, this.parent(i));
      i = this.parent(i);
    }
  }

  extractMin() {
    let n = this.arr.length;

    if (n === 1) {
      return this.arr.pop();
    }

    let root = this.arr[0];
    this.arr[0] = this.arr.pop();
    this.heapify(0);
    return root;
  }

  heapify(i) {
    let n = this.arr.length;
    let smallest = -1;

    // ensure that only non-leaf nodes are heapified
    // since leaf nodes are already heapified by definition
    while (smallest != i && i < n / 2) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;

      smallest = this.arr[left] < this.arr[i] ? left : i;

      if (right < n) {
        smallest = this.arr[right] < this.arr[smallest] ? right : smallest;
      }

      if (smallest != i) {
        this.swap(i, smallest);
        i = smallest;
        smallest = -1;
      }
    }
  }

  buildHeap() {
    for (let i = Math.floor(this.arr.length / 2 - 1); i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapSort() {
    this.buildHeap();
    while (this.arr.length) {
      console.log(this.extractMin());
    }
  }
}

function getKLargest(arr, k) {
  let heap = new MinHeap([]);
  for (let i = 0; i < k; i++) {
    heap.insert(arr[i]);
  }

  for (let i = k; i < arr.length; i++) {
    if (arr[i] < heap.arr[0]) {
      continue;
    } else {
      heap.arr[0] = arr[i];
      heap.heapify(0);
      if (heap.arr.length > k) {
        heap.arr.pop();
      }
    }
  }
  console.log(heap.arr);
}

// let heap = new MinHeap([12, 11, 13, 5, 6, 7]);
// heap.heapSort();
let arr = [11, 3, 2, 1, 15, 5, 4, 45, 88, 96, 50, 45];
let k = 7;
getKLargest(arr, k);
console.log("done");
