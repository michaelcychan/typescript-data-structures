import {MyLinkedList} from '../../LinkedList/src/myLinkedList';

export class MyQueue<T> {
  #queue: MyLinkedList<T>;
  #size: number;
  #maxSize: number;

  constructor(maxSize = Infinity){
    if (maxSize <= 0 || !Number.isInteger(maxSize) && maxSize !== Infinity) {
      throw 'maxSize must be an integer greater than 0'
    }
    this.#maxSize = maxSize;
    this.#queue = new MyLinkedList()
    this.#size = 0;
  }

  #isEmpty(){
    return this.#size === 0;
  }

  #hasSpace(){
    return this.#maxSize > this.#size;
  }

  getMaxSize():number {
    return this.#maxSize;
  }

  getSize():number {
    return this.#size;
  }

  enqueue(data:T){
    if (this.#hasSpace()) {
      this.#queue.addToTail(data);
      this.#size += 1;
    } else {
      throw 'Queue is full'
    }
  }

  dequeue() {
    if (this.#isEmpty()) {
      throw 'Queue is empty'
    } else {
      this.#size -= 1;
      return this.#queue.removeHead()
    }
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