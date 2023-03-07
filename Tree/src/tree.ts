export class Tree {
  #value:number;
  #children:Tree[];

  constructor(value:number) {
    this.#value = value;
    this.#children = [];
  }

  getValue(){
    return this.#value;
  }

  addChild(child:number|Tree) {
    if (child instanceof Tree) {
      this.#children.push(child)
    } else {
      this.#children.push(new Tree(child))
    }
  }

  removeChild(childToBeRemoved:number|Tree) {
    this.#children = this.#children.filter(child => {
      if (childToBeRemoved instanceof Tree) {
        return childToBeRemoved.getValue() !== child.#value
      } else {
        return childToBeRemoved !== child.#value
      }
    })
  }

  getChildren(){
    return this.#children;
  }

  breadthFirstTraversal():number[] {
    const traversedArray:number[] = [this.#value];
    if (this.#children.length > 0) {
      let stack:Tree[] = [...this.#children];
      while (stack.length > 0) {
        let currentTree = stack.shift()
        if (currentTree) {
          traversedArray.push(currentTree.#value);
          stack = stack.concat(currentTree.#children)
        }
      }
    }
    return traversedArray;
  }

  depthFirstTraversalRecursive():number[] {
    const traversedArray:number[] = [this.#value]
    for (let i = 0 ; i < this.#children.length; i++) {
      this.#children[i].#depFirTraRec(traversedArray);
    }
    return traversedArray
  }

  #depFirTraRec(traversedArray:number[]): number[]{
    traversedArray.push(this.#value);
    for (let i = 0; i< this.#children.length; i++) {
      this.#children[i].#depFirTraRec(traversedArray)
    }
    return traversedArray;
  }

  stringify():string{
    let outputString = this.#value.toString() + "\n"
    for (let i = 0; i < this.#children.length; i++) {
      outputString = this.#children[i].#str(outputString, 1)
    }
    return outputString;
  }

  #str(outputString:string, level:number = 0):string {
    for (let i = 0; i < level; i++) {
      outputString += "-- "
    }
    outputString += this.#value.toString() + "\n";
    for (let i = 0; i < this.#children.length; i ++) {
      outputString = this.#children[i].#str(outputString, level + 1)
    }
    return outputString;
  }


}