import {MyStack} from '../src/stack';

describe('MyStack', () => {
  describe('initiates', () => {
    it('initiates without maxSize without error', () => {
      const mystack = new MyStack();
      expect(mystack.getSize()).toBe(0);
      expect(mystack.peek()).toBe(null);
      expect(mystack.getMaxSize()).toBe(Infinity);
    });
    it('initiates with maxSize without error', () => {
      const myStack = new MyStack(5);
      expect(myStack.getSize()).toBe(0);
      expect(myStack.peek()).toBe(null);
      expect(myStack.getMaxSize()).toBe(5)
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
    it('push a number to an empty stack', () => {
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
    it('push multiple data to a stack', () => {
      const stack = new MyStack(5);
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.push(4);
      stack.push(5);
      expect(() => {
        stack.push(6)
      }).toThrow('stack is full')

      expect(stack.peek()).toBe(5);
      expect(stack.getSize()).toBe(5);
    })
  })
  describe('pop', () => {
    it('pop a queue', () => {
      const myStack = new MyStack();
      myStack.push(50);
      const removed = myStack.pop();
      expect(myStack.getSize()).toBe(0);
      expect(myStack.peek()).toBe(null);
      expect(removed).toBe(50)
    });
    it('pops an empty stack and throws error', () => {
      const myStack = new MyStack();
      expect(() => {
        myStack.pop()
      }).toThrow('stack is empty');
    })
  })
})