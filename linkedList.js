class Node {
  constructor(d) {
    this.data = d;
    this.next = null;
  }

  static Reverse(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    return prev;
  }

  static Delete(head, data) {
    let prev = null;
    let retNode = head;
    while (head) {
      if (head.data === data) {
        if (prev) {
          prev.next = head.next;
        } else {
          retNode = head.next;
          head.next = null;
        }
        break;
      }
      prev = head;
      head = head.next;
    }
    return retNode;
  }

  static Insert(head, newNode) {
    newNode.next = head;
    head = newNode;
    return head;
  }

  static SortedInsert(head, newNode) {
    if (!head || head.data >= newNode.data) {
      newNode.next = head;
      head = newNode;
    } else {
      let current = head;
      while (current.next && current.next.data < newNode.data) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    return head;
  }

  static PrintList(head) {
    let output = "";

    while (head) {
      output = `${output} ${head.data}`;
      head = head.next;
    }

    console.log(output.trim());
  }

  static PrintRandom(head) {
    // The probability that the second last node is result
    //       = [Probability that the second last node replaces result] X
    //         [Probability that the last node doesn't replace the result]
    //       = [1 / (N-1)] * [(N-1)/N]
    //       = 1/N
    if (!head) return;
    let result = head.data;
    let current = head;
    for (let i = 2; current; i++) {
      if (Math.floor(Math.random() * i) === 0) {
        result = current.data;
      }
      current = current.next;
    }
  }

  static DetectAndRemoveLoop(head) {
    // x = fast node steps
    // y = slow node steps
    // k = start of loop to meeting point
    // m = head to start of loop
    // n = length of loop
    // (m + n*x + k) = 2*(m + n*y + k) therefore...
    // m + k = (x-2y)*n
    // Which means m+k is a multiple of n.

    if (!head || !head.next) {
      return false;
    }

    let slow = head;
    let fast = head;

    slow = slow.next;

    if (!slow) {
      return false;
    }

    fast = fast.next.next;

    if (!fast) {
      return false;
    }

    while (fast && fast.next) {
      if (slow.data === fast.data) {
        break;
      }
      slow = slow.next;
      fast = fast.next.next;
    }

    if (slow.data !== fast.data) {
      return false;
    }

    slow = head;
    while (slow.next.data != fast.next.data) {
      slow = slow.next;
      fast = fast.next;
    }
    fast.next = null;

    return true;
  }

  static CompareStrings(a, b) {
    while (a && b && a.data.charCodeAt(0) === b.data.charCodeAt(0)) {
      a = a.next;
      b = b.next;
    }

    if (a && b) {
      return a.data.charCodeAt(0) > b.data.charCodeAt(0) ? 1 : -1;
    }

    if (a && !b) {
      return 1;
    }

    if (b && !a) {
      return -1;
    }

    return 0;
  }

  static GetLength(node) {
    let size = 0;
    while (node) {
      node = node.next;
      size++;
    }
    return size;
  }

  static copyList(head, emptyHead) {
    while (head) {
      emptyHead.data = head.data;
      if (head.next) {
        emptyHead.next = new Node();
        emptyHead = emptyHead.next;
      }
      head = head.next;
    }
  }

  static AddLists(n1, n2) {
    let rN1 = Node.Reverse(n1);
    let rN2 = Node.Reverse(n2);

    let carry = 0;
    let sum = 0;
    let result = null;
    let temp = null;
    let currentNode = null;

    while (rN1 || rN2) {
      sum = (rN1 ? rN1.data : 0) + (rN2 ? rN2.data : 0) + carry;
      carry = sum >= 10 ? 1 : 0;
      sum %= 10;
      temp = new Node(sum);
      if (!result) {
        result = temp;
      } else {
        currentNode.next = temp;
      }
      currentNode = temp;
      if (rN1) rN1 = rN1.next;
      if (rN2) rN2 = rN2.next;
    }

    if (carry > 0) {
      temp.next = new Node(carry);
    }

    let r = Node.Reverse(result);
    Node.Reverse(n1);
    Node.Reverse(n2);

    return r;
  }
}

let node = new Node(9);
node = Node.Insert(node, new Node(9));
node = Node.Insert(node, new Node(9));
console.log("First list");
Node.PrintList(node);

let node2 = new Node(8);
node2 = Node.Insert(node2, new Node(1));
console.log("Second list");
Node.PrintList(node2);

let res = Node.AddLists(node, node2);
console.log("Result");
Node.PrintList(res);
