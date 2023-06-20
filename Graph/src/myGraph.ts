import {MyVertex} from './myVertex';

export class MyGraph<T> {
  #vertices: MyVertex<T>[];
  #isDirected: boolean;

  constructor(isDirected : boolean = false ) {
    this.#vertices = [];
    this.#isDirected = isDirected
  }

  addVertex(vertex: MyVertex<T>){
    if (!this.#vertices.includes(vertex)) {
      this.#vertices.push(vertex);
    }
  }

  showVertexNumber(){
    return this.#vertices.length;
  }

  addEdge(vertex1: MyVertex<T>, vertex2: MyVertex<T>){
    if (!this.#vertices.includes(vertex1) || !this.#vertices.includes(vertex2)) {
      throw new Error('Both vertices must be in the graph');
    }
    if (vertex1 === vertex2) {
      console.log('creating a loop');
    }
    vertex1.addEdge(vertex2);
    if (!this.#isDirected) {
      vertex2.addEdge(vertex1);
    }
  }

  removeEdge(ver1: MyVertex<T>, ver2: MyVertex<T>) {
    if (!this.#vertices.includes(ver1) || !this.#vertices.includes(ver2)) {
      throw new Error('Both vertices must be in the graph');
    }
    ver1.removeEdge(ver2);
    if (!this.#isDirected) {
      ver2.removeEdge(ver1);
    }
  }
}