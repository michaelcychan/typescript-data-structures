import {MyTwoWayNode} from '../src/twoWayNode';

describe('MyTwoWayNode', () => {
  describe('storing numbers', () => {

    it('creates a new number node', () => {
      const node3 = new MyTwoWayNode(3);
  
      expect(node3.getValue()).toBe(3);
      expect(node3.getNext()).toBe(null);
      expect(node3.getPrev()).toBe(null);
    })
    it('links two nodes', () => {
      const node42 = new MyTwoWayNode(42);
      const node3 = new MyTwoWayNode(3);
  
      node42.setNext(node3)
      node3.setPrev(node42)
  
      expect(node3.getNext()).toBe(null)
      expect(node42.getPrev()).toBe(null)
      expect(node42.getNext()).toBe(node3)
      expect(node3.getPrev()).toBe(node42)
    })
  });
  describe('storing strings', () => {
    it('stores strings and links two nodes togehter', () => {
      const nodeA = new MyTwoWayNode('A');
      const nodeB = new MyTwoWayNode('B');
  
      nodeA.setNext(nodeB);
      nodeB.setPrev(nodeA);

      expect(nodeA.getValue()).toBe('A');
      expect(nodeB.getValue()).toBe('B');
  
      expect(nodeB.getNext()).toBe(null);
      expect(nodeA.getPrev()).toBe(null);
      expect(nodeA.getNext()).toBe(nodeB);
      expect(nodeB.getPrev()).toBe(nodeA);
    })
  });
})