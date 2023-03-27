import {MyStack} from '../../QueuesStacks/src/stack'

class BSTNode {
  private data: string|number;
  private occurence:number =1;
  private left: BSTNode | null = null;
  private right: BSTNode | null = null;
  private level:number;

  constructor(data:string|number, level:number){
    this.data = data;
    this.level = level;
  }

  getData(){
    return this.data;
  }

  setData(data: (string|number)) {
    this.data = data
  }

  getOccurence(){
    return this.occurence;
  }

  addOccurence(){
    this.occurence += 1;
  }

  reduceOccurence(){
    this.occurence -= 1;
  }

  getLevel(){
    return this.level;
  }

  getLeftChild(){
    return this.left;
  }

  getRightChild(){
    return this.right;
  }

  setLeftChild(leftChild:(BSTNode | null)){
    this.left = leftChild;
  }

  setRightChild(rightChild:(BSTNode | null)) {
    this.right = rightChild;
  }
}

export class BinarySearchTree {
  
  private root: (BSTNode | null) = null;

  constructor(data:(number|string|null)=null) {
    if (data !== null) {
      this.root = new BSTNode(data, 1);
    }
  }

  getRoot(){
    return this.root;
  }

  addChild(data:string|number) {
    this.checkType(data);
    let level = 1
    if (!this.root) {
      this.root = new BSTNode(data, level);
    } else {
      let currentNode:(BSTNode|null) = this.root;
      while (currentNode) {
        if (currentNode.getData() === data) {
          currentNode.addOccurence();
          return
        } else if (currentNode.getData() > data){
          if (!currentNode.getLeftChild()) {
            currentNode.setLeftChild(new BSTNode(data, level + 1));
            return;
          } else {
            currentNode = currentNode.getLeftChild();
            level += 1;
          }
        } else {
          if (!currentNode.getRightChild()) {
            currentNode.setRightChild(new BSTNode(data, level + 1))
            return
          } else {
            currentNode = currentNode.getRightChild()
            level += 1;
          }
        }
      }
    }
  }


  private checkType(data:string |number){
    if(this.root && typeof this.root.getData() !== typeof data){
      throw "type mismatch"
    }
  }

  findNodeByValue(data:number|string):BSTNode|null{
    this.checkType(data);
    let currentNode:(BSTNode|null) = this.root;
    if (!currentNode) {
      return null;
    }
    while (currentNode) {
      if (data === currentNode.getData()){
        return currentNode;
      }
      if (data < currentNode.getData()) {
        currentNode = currentNode.getLeftChild();
      } else {
        currentNode = currentNode.getRightChild();
      }
    }
    return null;
  }

  findInorderSuccessor(startingNode:BSTNode):(BSTNode|null){

    // this is one method to do (simplest in my own opinion)
    // we make use of the existing inorderTraverse method
    const inOrderArray = this.inorderTraverse();
    const startIdx = inOrderArray.findIndex((ele)=> ele === startingNode.getData())
    if (startIdx === inOrderArray.length - 1) {
      return null
    } else {
      return this.findNodeByValue(inOrderArray[startIdx+1])
    }
  }

  // remove(target:string|number):(string|number|null){
  //   this.checkType(target)
  //   if (this.level === 1 && target === this.data && this.occurence === 1 && !this.left && !this.right) {
  //     throw "cannot delete root"
  //   }
  //   if (target === this.data && this.occurence > 1) {
  //     this.occurence -= 1;
  //     return this.data
  //   }
  //   if (target < this.data) {
  //     if (!this.left) {
  //       return null
  //     } else {
  //       if(target === this.left.data && this.left.occurence === 1) {
  //         if(!this.left.left && !this.left.right) {
  //           // delete a node with no child
  //           this.left = null
  //           return target
  //         } else if (!this.left.right && this.left.left) {
  //           // delete a node with only left child
  //           this.left = this.left.left
  //           return target
  //         } else if (!this.left.left && this.right) {
  //           //delete a node with only right child
  //           this.left = this.left.right
  //           return target
  //         } else {
  //           // delete a node with two children
  //           return -100

  //         }

  //       } else{
  //         return this.left.remove(target);
  //       }
  //     }
  //   } else if (target > this.data) {
  //     if (!this.right) {
  //       return null
  //     } else {
  //       if(target === this.right.data && this.right.occurence === 1) {
  //         if(!this.right.left && !this.right.right) {
  //           // delete a node with no child
  //           this.right = null
  //           return target
  //         } else if (!this.right.right && this.right.left) {
  //           // delete a node with only left child
  //           this.right = this.right.left
  //           return target
  //         } else if (!this.right.left && this.right) {
  //           //delete a node with only right child
  //           this.right = this.right.right
  //           return target
  //         } else {
  //           // delete a node with two children
  //           return -100

  //         }

  //       } else{
  //         return this.right.remove(target);
  //       }
  //     }
  //   }
  //   if (target > this.data && !this.right) {
  //     return null
  //   }
  //   return -1100000
  // }


  inorderTraverse():(string|number)[]{
    if (!this.root) {
      return [];
    }
    let arr:(string|number)[] = [];

    // create a stack, push root to it the first thing in the while loop
    const stack = new MyStack<BSTNode>;
    let currentNode:(BSTNode|null) = this.root;

    // getting to the left-est node
    while (currentNode || stack.getSize() > 0) {
      // going to the the left-est node
      // adding every node on the way to stack
      while(currentNode){
        stack.push(currentNode);
        currentNode = currentNode.getLeftChild();
      }

      // exited the inner while node
      // meaning that currentNode is currently empty

      // when stack is not empty, but currentNode is null
      // that means we are at left-est node
      if (stack.getSize() > 0 && !currentNode) {

        // get the top of the stack
        // this is the node before "no left node"
        const popped = stack.pop()

        // put the data into the output array
        if (popped){
          arr.push(popped.getData())

          // also put the right node of the latest on top of the stack
          const poppedRight = popped.getRightChild()
          if (poppedRight) {
            currentNode = poppedRight
          }
        }
      }
    }
    return arr;
  }

  remove(target: string | number): string | number | null {
    // Initialize current node as root and parent node as null
    let currentNode: BSTNode | null = this.root;
    let parentNode: BSTNode | null = null;

    // Find the node to remove and its parent
    while (currentNode !== null) {
      if (currentNode.getData() === target) {
        break;
      } else if (target < currentNode.getData()) {
        parentNode = currentNode;
        currentNode = currentNode.getLeftChild();
      } else {
        parentNode = currentNode;
        currentNode = currentNode.getRightChild();
      }
    }

    // If node not found, return null
    if (currentNode === null) {
      return null;
    }

    if (currentNode.getOccurence() > 1) {
      currentNode.reduceOccurence()
      return currentNode.getData()
    }

    // Case 1: Node has no children
    if (currentNode.getLeftChild() === null && currentNode.getRightChild() === null) {
      if (parentNode === null) {
        // Node is root
        this.root = null;
      } else if (currentNode === parentNode.getLeftChild()) {
        parentNode.setLeftChild(null);
      } else {
        parentNode.setRightChild(null);
      }
      return currentNode.getData();
    }

    // Case 2: Node has one child
    if (currentNode.getLeftChild() === null || currentNode.getRightChild() === null) {
      const childNode: BSTNode | null = currentNode.getLeftChild() || currentNode.getRightChild();
      if (parentNode === null) {
        // Node is root
        this.root = childNode;
      } else if (currentNode === parentNode.getLeftChild()) {
        parentNode.setLeftChild(childNode);
      } else {
        parentNode.setRightChild(childNode);
      }
      return currentNode.getData();
    }

    // Case 3: Node has two children
    const inorderSuccessor: (BSTNode|null) = this.findInorderSuccessor(currentNode);
    if (inorderSuccessor !== null) {

      const tempData: string | number = inorderSuccessor.getData();
      this.remove(inorderSuccessor.getData());
      currentNode.setData(tempData);
      return currentNode.getData();
    }
    return null
  }

}
