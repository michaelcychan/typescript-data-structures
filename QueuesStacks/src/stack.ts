import {MyNumLinkedList} from '../../LinkedList/src/numLinkedList';

export class MyStack {
  #stack:MyNumLinkedList
  #size:number;
  #maxSize:number;

  constructor(maxSize=Infinity) {
    if (maxSize <= 0 || maxSize != Infinity && !Number.isInteger(maxSize)) {
      throw 'maxSize must be an integer greater than 0'
    }
    this.#stack = new MyNumLinkedList();
    this.#size = 0
    this.#maxSize = maxSize
  }

  #isEmpty() {
    return this.#size === 0
  }

  #hasSpace() {
    return this.#maxSize > this.#size
  }

  getMaxSize() {
    return this.#maxSize;
  }

  getSize(){
    return this.#size
  }
  peek() {
    const head = this.#stack.getHead()
    if (head) {
      return head.getValue()
    } else {
      return null
    }
  }

  push(value:number) {
    if (this.#hasSpace()) {
      this.#stack.addNewHead(value)
      this.#size += 1
    } else {
      throw 'stack is full'
    }
  }

  pop(){
    if (this.#isEmpty()) {
      throw 'stack is empty'
    } else {
      this.#size -= 1;
      return this.#stack.removeHead()
    }
  }
}