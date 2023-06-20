import { MyEdge } from "./myEdge";

export class MyVertex<T> {
  
  #data: T;
  #edges: MyEdge<T>[];
  
  constructor(data:T) {
    this.#data = data;
    this.#edges = [];
  }

  getData() {
    return this.#data;
  }

  getEdges() {
    return this.#edges;
  }

  addEdge(vertex: MyVertex<T>) {
    let endExisted = false;
    for (const edge of this.#edges) {
      if (edge.getEnd() === vertex) {
        endExisted = true
      }
    }
    if (!endExisted) {
      this.#edges.push(new MyEdge(this, vertex));
    }
  }

  removeEdge(vertex: MyVertex<T>){
    // assume we need the exact object, not just equal content
    this.#edges = this.#edges.filter(edge => edge.getEnd() !== vertex)
  }

}

