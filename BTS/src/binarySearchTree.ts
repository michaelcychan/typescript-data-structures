export class BinarySearchTree {
  
  private data: string|number;
  private occurence:number =1;
  private left: BinarySearchTree | null = null;
  private right: BinarySearchTree | null = null;
  private level: number;
  
  constructor(data:string|number){
    this.data = data;
    this.level = 1;
  }

  getData(){
    return this.data;
  }

  getLevel(){
    return this.level;
  }

  getOccurence(){
    return this.occurence;
  }

  getLeftChild(){
    return this.left;
  }

  getRightChild(){
    return this.right;
  }

  private checkType(data:string |number){
    if(typeof this.data !== typeof data){
      throw "type mismatch"
    }
  }

  findNodeByValue(data:number|string):BinarySearchTree|null{
    this.checkType(data);
    if (data === this.data){
      return this;
    }
    if (data < this.data) {
      if (this.left) {
        return this.left.findNodeByValue(data);
      } else {
        return null
      }
    } else {
      if (this.right) {
        return this.right.findNodeByValue(data);
      } else {
        return null
      }
    }
  }

  addChild(data:string|number) {
    this.checkType(data);
    this.privateAddChild(data, 1);
  }

  private privateAddChild(data:string|number, levelCount:number) {
    if (data === this.data) {
      this.occurence += 1
    } else if (data < this.data) {
      if (this.left) {
        this.left.privateAddChild(data, levelCount + 1)
      } else {
        this.left = new BinarySearchTree(data)
        this.left.level += levelCount
      }
    } else {
      if (this.right) {
        this.right.privateAddChild(data, levelCount + 1)
      } else {
        this.right = new BinarySearchTree(data)
        this.right.level += levelCount
      }
    }
  }

  removeChild(target:string|number){
    this.checkType(target)
    if (target === this.data) {
      if (this.occurence > 1) {
        this.occurence -= 1
      } else {
        // what to do if it is the last occurence??
      }
    } else if (target < this.data) {
      if (this.left) {
        this.left.removeChild(target)
      } else {
        // if cannot find node?
      }
    } else {
      if (this.right) {
        this.right.removeChild(target)
      } else {
        // if cannot find node?
      }
    }

  }

  inorderTraverse():(string|number)[]{
    return this.inorder([]);

  }

  private inorder(arr:(string|number)[]):(string|number)[] {
    if (this.left) {
      arr = [...this.left.inorder(arr)]
    }
    arr.push(this.data);
    if (this.right) {
      arr = [...this.right.inorder(arr)]
    }
    return arr
  }


}

