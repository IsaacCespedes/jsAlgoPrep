class Graph {
  constructor() {
    this.adjMap = new Map();
    this.visited = new Set();
    this.nodesToProcess = [];
  }

  addEdge(a, b, w, directed) {
    if (!this.adjMap.has(a)) {
      this.adjMap.set(a, []);
    }
    if (!this.adjMap.has(b) && !directed) {
      this.adjMap.set(b, []);
    }
    if (!w) {
      this.adjMap.get(a).push(b);
      if (!directed) this.adjMap.get(b).push(a);
    } else {
      this.adjMap.get(a).push([b, w]);
      if (!directed) this.adjMap.get(b).push([a, w]);
    }
  }

  search(s) {
    // dfs&bfs time complexity O(V+E)
    let retVal = "";
    this.nodesToProcess = [];
    this.visited.clear();
    this.visited.add(s);
    this.nodesToProcess.push(s);

    while (this.nodesToProcess.length) {
      let currentNode = this.nodesToProcess.pop(); // dfs - stack
      // let currentNode = this.nodesToProcess.shift(); // bfs - queue
      retVal += currentNode + " ";
      let currentNodeAdjlist = this.adjMap.get(currentNode);
      if (!currentNodeAdjlist || !currentNodeAdjlist.length) {
        continue;
      }
      for (let i = 0; i < currentNodeAdjlist.length; i++) {
        let newNode = currentNodeAdjlist[i];
        if (!this.visited.has(newNode)) {
          this.visited.add(newNode);
          this.nodesToProcess.push(newNode);
        }
      }
    }
    return retVal;
  }

  topologicalSort(v) {
    this.visited.add(v);
    let currentNodeAdjlist = this.adjMap.get(v);
    if (!currentNodeAdjlist || !currentNodeAdjlist.length) {
      this.nodesToProcess.push(v);
      return;
    }

    for (let i = 0; i < currentNodeAdjlist.length; i++) {
      let vertex = currentNodeAdjlist[i];
      if (!this.visited.has(vertex)) {
        this.topologicalSort(vertex);
      }
    }
    this.nodesToProcess.push(v);
  }

  topologicalSortInit() {
    this.visited.clear();
    this.nodesToProcess = [];

    for (let v of this.adjMap.keys()) {
      if (!this.visited.has(v)) {
        this.topologicalSort(v);
      }
    }

    while (this.nodesToProcess.length) {
      console.log(this.nodesToProcess.pop());
    }
  }

  hasUndirectedCycle(v, parent) {
    this.visited.add(v);
    let currentNodeAdjlist = this.adjMap.get(v);

    if (!currentNodeAdjlist) {
      return false;
    }

    for (let i = 0; i < currentNodeAdjlist.length; i++) {
      let vertex = currentNodeAdjlist[i];
      if (!this.visited.has(vertex)) {
        if (this.hasUndirectedCycle(vertex, v)) {
          return true;
        }
      } else if (vertex != parent) {
        return true;
      }
    }

    return false;
  }

  hasUndirectedCycleInit() {
    this.visited.clear();

    for (let v of this.adjMap.keys()) {
      if (!this.visited.has(v)) {
        if (this.hasUndirectedCycle(v, -1)) {
          return true;
        }
      }
    }
    return false;
  }

  dijsktra(start) {
    let procMap = new Map();
    let distMap = {};
    for (let v of this.adjMap.keys()) {
      distMap[v] = Number.MAX_VALUE;
    }

    procMap.set(start, 0);
    distMap[start] = 0;

    while (procMap.size) {
      // let a = Array.from(procSet.values())[0];
      let a = Array.from(procMap.keys()).sort(function (a, b) {
        return distMap[a] - distMap[b];
      })[0];
      procMap.delete(a);

      let aDist = distMap[a];

      let neighbors = this.adjMap.get(a);
      for (let i = 0; i < neighbors.length; i++) {
        let b = neighbors[i][0];
        let bDist = distMap[b];
        let nDist = aDist + neighbors[i][1];
        if (bDist > nDist) {
          distMap[b] = nDist;
          procMap.set(b, nDist);
        }
      }
    }
    console.log("V | Dist");
    for (let i of Object.keys(distMap)) {
      console.log(`${i} | ${distMap[i]}`);
    }
  }
}

// let graph = new Graph();
// graph.addEdge(0, 1, 0, true);
// graph.addEdge(0, 2, 0, true);
// graph.addEdge(0, 3, 0, true);
// graph.addEdge(1, 4, 0, true);
// graph.addEdge(2, 5, 0, true);
// graph.addEdge(3, 6, 0, true);
// graph.addEdge(4, 7, 0, true);
// graph.addEdge(5, 7, 0, true);
// graph.addEdge(6, 7, 0, true);
// console.log("Search:");
// console.log(graph.search(0));

// let g = new Graph();
// g.addEdge(5, 2, 0, true);
// g.addEdge(5, 0, 0, true);
// g.addEdge(4, 0, 0, true);
// g.addEdge(4, 1, 0, true);
// g.addEdge(2, 3, 0, true);
// g.addEdge(3, 1, 0, true);
// console.log("Topological Sort:");
// g.topologicalSortInit();

// let g1 = new Graph();
// g1.addEdge(1, 0);
// g1.addEdge(0, 2);
// g1.addEdge(2, 1);
// console.log("Undirected Cycle 1:");
// console.log(g1.hasUndirectedCycleInit());

// let g2 = new Graph();
// g2.addEdge(0, 3);
// g2.addEdge(3, 4);
// console.log("Undirected Cycle 2:");
// console.log(g2.hasUndirectedCycleInit());

// let g4 = new Graph();
// g4.addEdge(0, 1, 4);
// g4.addEdge(0, 7, 8);
// g4.addEdge(1, 2, 8);
// g4.addEdge(1, 7, 11);
// g4.addEdge(2, 3, 7);
// g4.addEdge(2, 5, 4);
// g4.addEdge(2, 8, 2);
// g4.addEdge(3, 4, 9);
// g4.addEdge(3, 5, 14);
// g4.addEdge(4, 5, 10);
// g4.addEdge(5, 6, 2);
// g4.addEdge(6, 7, 1);
// g4.addEdge(6, 8, 6);
// g4.addEdge(7, 8, 7);
// console.log("Dijsktra:");
// g4.dijsktra(0);
