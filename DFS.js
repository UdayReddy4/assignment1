// Develop a function in javascript along with test cases to demonstrate depth first search algorithm which has two things to be done inherently

// The code should contain
// 1. Inputs to demonstrate DFS
// 2. Function to build DFS tree
// 3. Function to perform the search operation


class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {

        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            throw new Error("One or more vertices do not exist in the graph.");
        }
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    dfs(startingNode) {
      const visited = {};
      const result = [];
  
      const dfsHelper = (vertex) => {
        if (!vertex) return null;
        visited[vertex] = true;
        result.push(vertex);
        this.adjacencyList[vertex].forEach((neighbor) => {
          if (!visited[neighbor]) {
            return dfsHelper(neighbor);
          }
        });
      };
  
      dfsHelper(startingNode);
      return result;
    }
    searchVertex(value) {
      for (const vertex in this.adjacencyList) {
        if (this.adjacencyList[vertex].includes(value)) {
          return vertex;
        }
      }
      return "THE GIVEN VERTEX IS NOT DEFINED";
    }
  }
  
 // Example usage:
  const graph = new Graph();
  
  // Adding vertices
  graph.addVertex('I');
  graph.addVertex('G');
  graph.addVertex('C');
  graph.addVertex('A');
  graph.addVertex('E');
  
  // Adding edges
  graph.addEdge('A', 'C');
  graph.addEdge('A', 'E');
  graph.addEdge('G', 'A');
  graph.addEdge('G', 'I');

  
 console.log(graph.dfs('E')); // Output:  ['A', 'C', 'E', 'G', 'I' ]
 console.log(graph.searchVertex('C')); // Output: 'A'
 console.log(graph.searchVertex('F')); // Output: null

module.exports =Graph;