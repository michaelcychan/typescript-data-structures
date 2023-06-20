import {MyVertex} from './myVertex'

export class MyEdge<T> {
  #start: MyVertex<T>;
  #end: MyVertex<T>

  constructor(start: MyVertex<T>, end: MyVertex<T>) {
    this.#start = start;
    this.#end = end;
  }

  getEnd(){
    return this.#end;
  }
}