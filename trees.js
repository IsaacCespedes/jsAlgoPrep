// for a balanced tree of n nodes
// height = log2(n+1)
// so n = 2^(height) -1
// the number of leaves is (n+1)/2
// A Binary Tree with L leaves has at least | Log2L |+ 1   levels

// In a Binary tree where every node has 0 or 2 children, the number of leaf nodes is always one more than nodes with two children

// In a non-empty binary tree,
// if n is the total number of nodes and e is the total number of edges,
// then e = n-1

// The maximum number of nodes at level ‘l’ of a binary tree is 2l

class Node {
  constructor(d) {
    this.data = d;
    this.left = null;
    this.right = null;
  }
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}

function minDepth(root) {
  if (!root) {
    return 0;
  }

  if (!root.left && !root.right) {
    return 1;
  }

  if (!root.left) {
    return minDepth(root.right) + 1;
  }

  if (!root.right) {
    return minDepth(root.left) + 1;
  }

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}

let root = new Node(1);
root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

console.log(minDepth(root));

class MaxPathSum {
  constructor() {
    this.sum = Number.MIN_VALUE;
  }

  maxPathSum(root) {
    if (!root) {
      return 0;
    }

    let left = this.maxPathSum(root.left);
    let right = this.maxPathSum(root.right);

    let maxPath = Math.max(root.data, root.data + left, root.data + right);

    this.sum = Math.max(this.sum, maxPath, root.data + left + right);

    return maxPath;
  }
}

// let mps = new MaxPathSum();
// let root = new Node(10);
// root.left = new Node(2);
// root.right = new Node(10);
// root.left.left = new Node(20);
// root.left.right = new Node(1);
// root.right.right = new Node(-25);
// root.right.right.left = new Node(3);
// root.right.right.right = new Node(4);
// mps.maxPathSum(root);
// console.log(mps.sum);

function preOrder(node) {
  if (!node) return;

  console.log(node.data);
  preOrder(node.left);
  preOrder(node.right);
}

function inOrder(node) {
  if (!node) return;

  inOrder(node.left);
  console.log(node.data);
  inOrder(node.right);
}

function postOrder(node) {
  if (!node) return;

  postOrder(node.left);
  postOrder(node.right);
  console.log(node.data);
}

// let root = new Node(1);
// root.left = new Node(2);
// root.right = new Node(3);
// root.left.left = new Node(4);
// root.left.right = new Node(5);

// postOrder(root);
