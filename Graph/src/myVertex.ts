export class MyVertex<T> {
  
  #data: T;
  #adjacentVertices: MyVertex<T>[];
  
  constructor(data:T) {
    this.#data = data;
    this.#adjacentVertices = [];
  }

  getData() {
    return this.#data;
  }

  getEdges() {
    return this.#adjacentVertices;
  }

  addEdge(vertex: MyVertex<T>) {
    if (!this.#adjacentVertices.includes(vertex)) {
      this.#adjacentVertices.push(vertex);
    }
  }

  removeEdge(vertex: MyVertex<T>){
    // assume we need the exact object, not just equal content
    this.#adjacentVertices = this.#adjacentVertices.filter(ver => ver !== vertex)
  }

}

