import {MyStack} from '../src/stack';

describe('MyStack', () => {
  describe('initiates', () => {
    it('initiates without maxSize without error', () => {
      const mystack = new MyStack();
      expect(mystack.getSize()).toBe(0);
      expect(mystack.peek()).toBe(null);
    });
    it('initiates with maxSize without error', () => {
      const myStack = new MyStack(5);
      expect(myStack.getSize()).toBe(0);
      expect(myStack.peek()).toBe(null);
    });
    it('throws error when initialises with a negative number', () => {
      expect(() => {
        const myStack = new MyStack(-5);
      }).toThrow('maxSize must be an integer greater than 0');
    });
    it('throws error when initialises with a decimal number', () => {
      expect(() => {
        const myStack = new MyStack(3.14);
      }).toThrow('maxSize must be an integer greater than 0');
    });
  });
  describe('push', () => {
    it('push a number to an empty queue', () => {
      const myStack = new MyStack();
      myStack.push(50);

      expect(myStack.getSize()).toBe(1);
      expect(myStack.peek()).toBe(50)
    });
    it('push multiple data to a stack', () => {
      const stack = new MyStack(5);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);

      expect(stack.peek()).toBe(5);
      expect(stack.getSize()).toBe(5);
    })
  //   it('enqueue multiple data to a queue', () => {
  //     const queue = new MyQueue(5);
  //     queue.push(1);
  //     queue.enqueue(2);
  //     queue.enqueue(3);
  //     queue.enqueue(4);
  //     queue.enqueue(5);
  //     expect(() => {
  //       queue.enqueue(6)
  //     }).toThrow('Queue is full')

  //     expect(queue.peek()).toBe(1);
  //     expect(queue.getSize()).toBe(5);
  //   })
  })
  // describe('dequeue', () => {
  //   it('dequeue a queue', () => {
  //     const myQueue = new MyQueue();
  //     myQueue.enqueue(50);
  //     const removed = myQueue.dequeue();
  //     expect(myQueue.getSize()).toBe(0);
  //     expect(myQueue.peek()).toBe(null);
  //     expect(removed).toBe(50)
  //   });
  //   it('dequeues an empty queue and throws error', () => {
  //     const myQueue = new MyQueue();
  //     expect(() => {
  //       myQueue.dequeue()
  //     }).toThrow('Queue is empty');
  //   })
  // })
})