import {MyNumLinkedList} from '../../LinkedList/src/numLinkedList';

export class MyQueue {
  #queue: MyNumLinkedList;
  #size: number;
  #maxSize: number;

  constructor(maxSize = Infinity){
    if (maxSize <= 0 || !Number.isInteger(maxSize) && maxSize !== Infinity) {
      throw 'maxSize must be an integer greater than 0'
    }
    this.#maxSize = maxSize;
    this.#queue = new MyNumLinkedList()
    this.#size = 0;
  }

  getSize():number {
    return this.#size;
  }

  enqueue(data:number){
    this.#queue.addToTail(data);
    this.#size += 1;
  }

  dequeue() {
    this.#size -= 1;
    return this.#queue.removeHead()
  }

  peek() {
    const head = this.#queue.getHead()
    if (head) {
      return head.getValue()
    } else {
      return null
    }
  }
}