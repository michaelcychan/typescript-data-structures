import {MyTwoWayNode} from '../../Nodes/src/twoWayNode'

export class TwoWayLinkedList<Type> {

  #head: (MyTwoWayNode<Type> | null);
  #tail: (MyTwoWayNode<Type> | null);

  constructor(value:Type | null = null) {
    if (value) {
      const firstNode: MyTwoWayNode<Type> = new MyTwoWayNode(value)
      this.#head = firstNode;
      this.#tail = firstNode;
    } else {
      this.#head = null
      this.#tail = null
    }
  }

  getHead() {
    return this.#head
  }

  getTail() {
    return this.#tail
  }

  stringify():string{
    let output:string = "";
    let node = this.#head;
    while (node) {
      const value = node.getValue()
      if (value) {
        output += value.toString()
      }
      if (node.getNext()) {
        output += "-"
      }
      node = node.getNext()
    }
    return output
  }

  addHead(newValue:Type) {
    const newNode = new MyTwoWayNode(newValue)
    newNode.setNext(this.#head)
    if (this.#head) {
      this.#head.setPrev(newNode)
    }
    this.#head = newNode
    if (!this.#tail) {
      this.#tail = newNode
    }
  }

  addTail(value:Type) {
    const newTail = new MyTwoWayNode(value);
    newTail.setPrev(this.#tail)
    if (this.#tail) {
      this.#tail.setNext(newTail)
    }
    this.#tail = newTail
    if (!this.#head) {
      this.#head = newTail;
    }
  }

  length():number {
    let counter:number = 0;
    let node = this.#head;
    while (node) {
      counter += 1;
      node = node.getNext()
    }
    return counter;
  }

  removeHead():(Type | null) {
    if (!this.#head) {
      return null
    }
    const nodeRemoval = this.#head
    this.#head = this.#head.getNext()
    if (this.#head) {
      this.#head.setPrev(null)
    }
    if (nodeRemoval === this.#tail) {
      this.#tail = null
    }
    return nodeRemoval.getValue()
  }

  removeTail():(Type | null){
    if (!this.#tail) {
      return null
    }
    const nodeRemoval = this.#tail
    this.#tail = this.#tail.getPrev()
    if (this.#tail) {
      this.#tail.setNext(null)
    }
    if (nodeRemoval === this.#head) {
      this.#head = null
    }
    return nodeRemoval.getValue()
  }

  removeByValue(value:Type):(Type | null) {
    let currentNode = this.#head;
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (currentNode.getValue() == value) {
        break
      }
      currentNode = currentNode.getNext()
    }
    if (currentNode) {
      if (currentNode === this.#head) {
        this.removeHead()
      } else if (currentNode === this.#tail) {
        this.removeTail()
      } else {
        const prevNode = currentNode.getPrev()
        const nextNode = currentNode.getNext()
        if (prevNode) {
          prevNode.setNext(nextNode)
        }
        if (nextNode) {
          nextNode.setPrev(prevNode)
        }
      }
      return currentNode.getValue()
    } else {
      return null
    }
  }
}