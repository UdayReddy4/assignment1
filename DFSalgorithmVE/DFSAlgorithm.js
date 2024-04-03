class Graph {
    constructor() {
      this.vertices = new Set();
      this.edges = new Set();
    }
  
    addVertex(vertex) {
      this.vertices.add(vertex);
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.vertices.has(vertex1) || !this.vertices.has(vertex2)) {
        throw new Error('The vertices do not exist.');
      }
      this.edges.add([vertex1, vertex2]);
      this.edges.add([vertex2, vertex1]);
    }
  
    startingPoint(startingNode) {
      if (!this.vertices.has(startingNode)) {
        return'Startingnode does not exist.';
      }
  
      const visited = new Set();
      const result = [];
  
      const stack = [startingNode];
  
      while (stack.length) {
        const vertex = stack.pop();
        if (!visited.has(vertex)) {
          visited.add(vertex);
          result.push(vertex);
          for (const [v1, v2] of this.edges) {
            if (v1 === vertex && !visited.has(v2)) {
              stack.push(v2);
            }
          }
        }
      }
  
      return result;
    }

    searchVertex(vertex) {
        if( this.vertices.has(vertex)){ return true;
        }else{
            return"The Given vertex is Not Exist";
        }
      }
  }
  
  const graph = new Graph();
  
  graph.addVertex('Ice');
  graph.addVertex('Gree');
  graph.addVertex('Cat');
  graph.addVertex('App');
  graph.addVertex('Ele');
  graph.addVertex('Rem');
  
  
  graph.addEdge('App', 'Cat');
  graph.addEdge('App', 'Ele');
  graph.addEdge('Gree', 'App');
  graph.addEdge('Gree', 'Ice');
  graph.addEdge('Ele', 'Rem')
  
  
  console.log(graph.startingPoint('App')); // Output: ['App', 'Gree', 'Ele', 'Cat', 'Ice']
  console.log((graph.searchVertex('App')));//true
  console.log((graph.searchVertex('mer')));// The Given vertex is Not Exist

