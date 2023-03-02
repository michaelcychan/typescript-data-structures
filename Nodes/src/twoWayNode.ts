export class MyTwoWayNode<T> {
  #value: T
  #nextNode: (MyTwoWayNode<T> | null)
  #prevNode: (MyTwoWayNode<T> | null)
  
  constructor(value: T) {
    this.#value = value
    this.#nextNode = null
    this.#prevNode = null
  }

  getValue():(T|null){
    return this.#value
  }

  getNext():(MyTwoWayNode<T>|null){
    return this.#nextNode
  }

  getPrev():(MyTwoWayNode<T>|null){
    return this.#prevNode
  }

  setNext(nextNode: (MyTwoWayNode<T>|null)){
    this.#nextNode = nextNode
  }

  setPrev(prevNode: (MyTwoWayNode<T>|null)){
    this.#prevNode = prevNode
  }
}