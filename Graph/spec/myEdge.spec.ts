import {MyEdge} from '../src/myEdge';

import {MyVertex} from '../src/myVertex';

jest.mock('../src/myVertex', () => {
  return {
    MyVertex: jest.fn().mockImplementation((data) => {
      return {
        getData: jest.fn().mockReturnValue(data),
        getEdges: jest.fn().mockReturnValue([]),
        addEdge: jest.fn(),
        removeEdge: jest.fn()
      };
    })
  };
});

describe('MyEdge', () => {
  describe('initialisation', () => {
    it('initialises without error', () => {
      const mockVer1 = new MyVertex(5);
      const mockVer2 = new MyVertex(10);
      const edge1 = new MyEdge(mockVer1, mockVer2);

      expect(edge1.getEnd()).toBe(mockVer2);
    })
  })
})