import {MyVertex} from './myVertex';

export class MyGraph<T> {
  #vertices: MyVertex<T>[];

  constructor() {
    this.#vertices = [];
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
    vertex2.addEdge(vertex1);
  }
}