export class MyVertex {
  
  #data: number;
  #adjacentVertices: MyVertex[];
  
  constructor(data:number) {
    this.#data = data;
    this.#adjacentVertices = [];
  }

  getData() {
    return this.#data;
  }

  getAdjacent() {
    return this.#adjacentVertices;
  }

}

