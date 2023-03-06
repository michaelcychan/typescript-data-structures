export class MyNode<T> {
  #value: T;
  #next: (MyNode<T>|null);

  constructor(value:T, next:MyNode<T> | null = null){
    this.#value = value;
    this.#next = next;
  }

  getValue(): T{
    return this.#value;
  }

  setValue(newValue:T) {
    this.#value = newValue;
  }

  getNext(): MyNode<T>|null{
    return this.#next;
  }

  setNext(next: MyNode<T>|null){
    this.#next = next;
  }
}