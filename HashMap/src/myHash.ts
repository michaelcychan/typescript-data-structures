import {MyLinkedList} from '../../LinkedList/src/myLinkedList'
import { MyNode } from '../../Nodes/src/node';

type LinkedListType = {
  key: string|number,
  value: any
}

export class MyHash {

  // saving data in hashMap in LinkedList to handle collision
  #hashMap:MyLinkedList<LinkedListType>[];

  constructor(size = 0) {
    if (size < 0 || size % 1 !== 0) {
      throw "size must be positive and integer"
    }
    this.#hashMap = new Array(size).fill(null).map(() => new MyLinkedList<LinkedListType>());
  }

  #getHashCode(key:string|number):number {
    let hashCode:number = 0;
    if (typeof key === "number") {
      hashCode = key % this.#hashMap.length;
    } else if (typeof key === "string") {
      for (const chr of key) {
        hashCode += hashCode + chr.charCodeAt(0);
      }
      hashCode = hashCode % this.#hashMap.length
    }
    return hashCode;
  }

  set(key:(string|number), value:any) {
    const arrayIdx = this.#getHashCode(key);
    if (this.#hashMap[arrayIdx].getHead()) {
      let currentNode = this.#hashMap[arrayIdx].getHead();
      while (currentNode) {
        if (currentNode.getValue().key === key) {
          currentNode.getValue().value = value;
          return;
        }
        if (currentNode.getNext() === null) {
          currentNode.setNext(new MyNode({key: key, value: value}));
          return
        } else {
          currentNode = currentNode.getNext();
        }
      }
    } else {
      this.#hashMap[arrayIdx].addNewHead({key: key, value: value});
      return;
    }
  }

  retrieve(key:string|number) {
    const arrayIdx = this.#getHashCode(key);
    let targetNode = this.#hashMap[arrayIdx].getHead();
    while (targetNode) {

      // need to add conflict handling
      if (targetNode.getValue().key === key) {
        return targetNode.getValue().value;
      }

      targetNode = targetNode.getNext()
    }
    return null
  }

  delete(key:string|number) {
    const arrayIdx = this.#getHashCode(key);
    let targetNode = this.#hashMap[arrayIdx].getHead();
    while (targetNode) {
      if (targetNode.getValue().key === key) {
        return this.#hashMap[arrayIdx].removeNode(targetNode.getValue());
      }
      targetNode = targetNode.getNext();
    }
    return null;
  }
}
