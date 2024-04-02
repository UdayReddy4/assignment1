const Graph = require('./DFS'); 

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
    graph.addVertex('I');
    graph.addVertex('G');
    graph.addVertex('C');
    graph.addVertex('A');
    graph.addVertex('E');
    graph.addEdge('A', 'C');
    graph.addEdge('A', 'E');
    graph.addEdge('G', 'A');
    graph.addEdge('G', 'I');
  });

  describe('dfs', () => {
    test('should return array of vertices in DFS order starting from given vertex', () => {
      expect(graph.dfs('A')).toEqual(['A', 'C', 'E', 'G', 'I']);
    });

    test('should throw an error if starting vertex does not exist', () => {
      expect(() => {
        graph.dfs('Z');
      }).toThrow('Cannot read properties of undefined (reading \'forEach\')');
    });
  });

  describe('searchVertex', () => {
    test('should return the vertex containing the specified value', () => {
      expect(graph.searchVertex('C')).toBe('A');
    });

    test('should return "THE GIVEN VERTEX IS NOT DEFINED" if the vertex is not found', () => {
      expect(graph.searchVertex('F')).toBe('THE GIVEN VERTEX IS NOTDEFINED');
    });
  });
});
