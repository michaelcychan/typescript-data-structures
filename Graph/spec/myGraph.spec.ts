import {MyGraph} from '../src/myGraph';

import {MyVertex} from '../src/myVertex';

jest.mock('../src/myVertex', () => {
  return {
    MyVertex: jest.fn().mockImplementation((data) => {
      return {
        getData: jest.fn().mockReturnValue(data),
        getEdges: jest.fn().mockReturnValue([]),
        addEdge: jest.fn(),
      };
    })
  };
});

describe('MyGraph', () => {
  describe('initialisation', () => {
    it('initialises and able to add vertex', () => {
      const graph1 = new MyGraph();

      expect(graph1.showVertexNumber()).toBe(0);
    })
  });
  describe('basic functions', () => {
    it('adds vertex', () => {
      const mockVertex = new MyVertex(60);

      const graph1 = new MyGraph();
  
      graph1.addVertex(mockVertex);
      expect(graph1.showVertexNumber()).toBe(1);
    });
    it('add edge', () => {
      const mockVer1 = new MyVertex(50);
      const mockVer2 = new MyVertex(60);
      
      const graph1 = new MyGraph();
      graph1.addVertex(mockVer1);
      graph1.addVertex(mockVer2);
      
      graph1.addEdge(mockVer1, mockVer2);
      expect(mockVer1.addEdge).toBeCalledTimes(1);
      expect(mockVer2.addEdge).toBeCalledTimes(1);

    })
  });
  describe('edge cases', () => {
    it('attempting to create edge with vertex not in the graph', () => {
      const mockVer1 = new MyVertex(50);
      const mockVer2 = new MyVertex(60);
      
      const graph1 = new MyGraph();
      graph1.addVertex(mockVer1);
      expect(()=> {
        graph1.addEdge(mockVer1, mockVer2);
      }).toThrowError('Both vertices must be in the graph');
    });
    it('prints when creating a self loop', () => {
      const mockVer1 = new MyVertex(50);
      
      const graph1 = new MyGraph();
      graph1.addVertex(mockVer1);
      const consoleLogMock = jest.spyOn(global.console, 'log');
      graph1.addEdge(mockVer1, mockVer1);
      expect(console.log).toBeCalledTimes(1)
      expect(console.log).toBeCalledWith('creating a loop');
      consoleLogMock.mockRestore();
      
    })
  })
})