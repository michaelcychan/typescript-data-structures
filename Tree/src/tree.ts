export class Tree<Type> {
  #value:Type;
  #children:Tree<Type>[];

  constructor(value:Type) {
    this.#value = value;
    this.#children = [];
  }

  getValue(){
    return this.#value;
  }

  addChild(child:Type|Tree<Type>) {
    if (child instanceof Tree) {
      this.#children.push(child)
    } else {
      this.#children.push(new Tree(child))
    }
  }

  removeChild(childToBeRemoved:Type|Tree<Type>) {
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

  breadthFirstTraversal():Type[] {
    const traversedArray:Type[] = [this.#value];
    if (this.#children.length > 0) {
      let stack:Tree<Type>[] = [...this.#children];
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

  depthFirstTraversalRecursive():Type[] {
    const traversedArray:Type[] = [this.#value]
    for (let i = 0 ; i < this.#children.length; i++) {
      this.#children[i].#depFirTraRec(traversedArray);
    }
    return traversedArray
  }

  #depFirTraRec(traversedArray:Type[]): Type[]{
    traversedArray.push(this.#value);
    for (let i = 0; i< this.#children.length; i++) {
      this.#children[i].#depFirTraRec(traversedArray)
    }
    return traversedArray;
  }

  stringify():string{
    let outputString;
    
    if (typeof this.#value === "number") {
      outputString = this.#value.toString() + "\n"
      for (let i = 0; i < this.#children.length; i++) {
        outputString = this.#children[i].#str(outputString, 1)
      }
    } else if (typeof this.#value === "string") {
      outputString = this.#value + "\n"
      for (let i = 0; i < this.#children.length; i++) {
        outputString = this.#children[i].#str(outputString, 1)
      }
    } else {
      outputString = "type not string or number";
    }

    return outputString;
  }

  #str(outputString:string, level:number = 0):string {
    for (let i = 0; i < level; i++) {
      outputString += "-- "
    }
    if (typeof this.#value === "number") {
      outputString += this.#value.toString() + "\n";
      for (let i = 0; i < this.#children.length; i ++) {
        outputString = this.#children[i].#str(outputString, level + 1)
      }
    } else if (typeof this.#value === "string") {
      outputString += this.#value + "\n";
      for (let i = 0; i < this.#children.length; i ++) {
        outputString = this.#children[i].#str(outputString, level + 1)
      }
    }
    return outputString;
  }


}