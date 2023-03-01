import {MyQueue} from '../src/queue';

describe('MyQueue', () => {
  describe('initiates', () => {
    it('initiates without maxSize without error', () => {
      const myQueue = new MyQueue();
      expect(myQueue.getSize()).toBe(0);
      expect(myQueue.peek()).toBe(null);
    });
    it('initiates with maxSize without error', () => {
      const myQueue = new MyQueue(5);
      expect(myQueue.getSize()).toBe(0);
      expect(myQueue.peek()).toBe(null);
      expect(myQueue.getMaxSize()).toBe(5);
    });
    it('throws error when initialises with a negative number', () => {
      expect(() => {
        const myQueue = new MyQueue(-5);
      }).toThrow('maxSize must be an integer greater than 0');
    });
    it('throws error when initialises with a decimal number', () => {
      expect(() => {
        const myQueue = new MyQueue(3.14);
      }).toThrow('maxSize must be an integer greater than 0');
    });
  });
  describe('enqueue', () => {
    it('enqueue a number to an empty queue', () => {
      const myQueue = new MyQueue();
      myQueue.enqueue(50);

      expect(myQueue.getSize()).toBe(1);
      expect(myQueue.peek()).toBe(50)
    });
    it('enqueue multiple data to a queue', () => {
      const queue = new MyQueue(5);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);

      expect(queue.peek()).toBe(1);
      expect(queue.getSize()).toBe(5);
    })
    it('enqueue multiple data to a queue', () => {
      const queue = new MyQueue(5);
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.enqueue(4);
      queue.enqueue(5);
      expect(() => {
        queue.enqueue(6)
      }).toThrow('Queue is full')

      expect(queue.peek()).toBe(1);
      expect(queue.getSize()).toBe(5);
    })
  })
  describe('dequeue', () => {
    it('dequeue a queue', () => {
      const myQueue = new MyQueue();
      myQueue.enqueue(50);
      const removed = myQueue.dequeue();
      expect(myQueue.getSize()).toBe(0);
      expect(myQueue.peek()).toBe(null);
      expect(removed).toBe(50)
    });
    it('dequeues an empty queue and throws error', () => {
      const myQueue = new MyQueue();
      expect(() => {
        myQueue.dequeue()
      }).toThrow('Queue is empty');
    })
  })
})