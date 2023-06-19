import {MyVertex} from '../src/myVertex';

describe('MyVertex', () => {
  describe('initialisation', () => {
    it('initialises with a number, returns proper data', () => {
      const vertex1 = new MyVertex(5);

      const actualData = vertex1.getData();
      const actualAdjacent = vertex1.getEdges();

      expect(actualData).toBe(5);
      expect(actualAdjacent.length).toBe(0);
    });
    it('initialises with a string, returns proper data', () => {
      const ver1 = new MyVertex('Hong Kong');

      expect(ver1.getData()).toBe('Hong Kong');
      expect(ver1.getEdges().length).toBe(0);
    });
    it('initialises with an object', () => {
      const obj1 = {
        name: 'Michael',
        birthplace: 'Hong Kong',
        id: 1
      }
      const ver1 = new MyVertex(obj1);

      expect(ver1.getData()).toStrictEqual(obj1);
    })
  });
  describe('basic functions', () => {
    it('adds edge and returns properly', () => {
      const ver1 = new MyVertex(5);
      const ver2 = new MyVertex(10);

      ver1.addEdge(ver2);
      
      expect(ver1.getEdges().length).toBe(1);
      expect(ver1.getEdges()[0]).toBe(ver2);
    });
    it('removes an edge', () => {
      const ver1 = new MyVertex('Tseung Kwan O');
      const ver2 = new MyVertex('Kowloon');
      const ver3 = new MyVertex('Causeway Bay');

      ver1.addEdge(ver2);
      ver1.addEdge(ver3);

      expect(ver1.getEdges().length).toBe(2);

      ver1.removeEdge(ver3);
      expect(ver1.getEdges().length).toBe(1);
    });
    it('add edges to Vertices with object as data', () => {
      const ver1 = new MyVertex({
        name: 'John',
        birthYear: 1985,
        isHandsome: false
      })
      const ver2 = new MyVertex({
        name: 'Ken',
        birthYear: 1960,
        isHandsome: true
      })

      ver1.addEdge(ver2);
      expect(ver1.getEdges().length).toBe(1);
    })
  });
  describe('edge cases or errors', () => {
    it('would not add a duplicate adjacent', () => {
      const ver1 = new MyVertex(5);
      const ver2 = new MyVertex(10);

      ver1.addEdge(ver2);
      ver1.addEdge(ver2);
      
      expect(ver1.getEdges().length).toBe(1);
      expect(ver1.getEdges()[0]).toBe(ver2);
    });
    it('removes an non-existent edge', () => {
      const ver1 = new MyVertex('Tseung Kwan O');
      const ver2 = new MyVertex('Kowloon');
      const ver3 = new MyVertex('Causeway Bay');

      ver1.addEdge(ver2);

      ver1.removeEdge(ver3);
      expect(ver1.getEdges().length).toBe(1);
    })
  })
})