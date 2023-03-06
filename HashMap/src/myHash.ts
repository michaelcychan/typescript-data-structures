import {} from '../../LinkedList/src/numLinkedList'

export class MyHash {
  #hashMap:string[];

  constructor(size = 0) {
    this.#hashMap = new Array(size).fill(null);

  }
}