import {MyVertex} from '../src/myVertex';

describe('MyVertex', () => {
  describe('initialisation', () => {
    it('initialises with a number, returns proper data', () => {
      const vertex1 = new MyVertex(5);

      const actualData = vertex1.getData();
      const actualAdjacent = vertex1.getAdjacent();

      expect(actualData).toBe(5);
      expect(actualAdjacent.length).toBe(0);
    })
  })
})