import {BinarySearchTree} from '../src/binarySearchTree';

describe("initialisation", () => {
  describe("number as data", () => {
    it("initialises without error", () => {
      const bst = new BinarySearchTree(34);
  
      expect(bst.getData()).toBe(34);
      expect(bst.getLeftChild()).toBe(null);
      expect(bst.getRightChild()).toBe(null);
      expect(bst.getLevel()).toBe(1);
      expect(bst.getOccurence()).toBe(1);
    });
    describe("adding Child", () => {
      it("add childs without duplicate", () => {
        const bst = new BinarySearchTree(34);
        bst.addChild(42);
        bst.addChild(30);
        bst.addChild(50);
  
        expect(bst.getLeftChild()).not.toBe(null);
        expect(bst.getRightChild()).not.toBe(null);
  
        expect(bst.getLeftChild()!.getData()).toBe(30);
        expect(bst.getLeftChild()!.getLevel()).toBe(2);
        expect(bst.getLeftChild()!.getOccurence()).toBe(1);
        expect(bst.getRightChild()!.getData()).toBe(42);
        expect(bst.getRightChild()!.getLevel()).toBe(2);
        expect(bst.getRightChild()!.getOccurence()).toBe(1);
  
        expect(bst.getRightChild()!.getRightChild()).not.toBe(null);
        expect(bst.getRightChild()!.getRightChild()!.getData()).toBe(50);
        expect(bst.getRightChild()!.getRightChild()!.getLevel()).toBe(3);
        expect(bst.getRightChild()!.getRightChild()!.getOccurence()).toBe(1);
      });
      it("add child with duplicates", () => {
        const bst = new BinarySearchTree(34);
        bst.addChild(42);
        bst.addChild(30);
        bst.addChild(42);
  
        expect(bst.getLeftChild()).not.toBe(null);
        expect(bst.getRightChild()).not.toBe(null);
        
  
        expect(bst.getLeftChild()!.getData()).toBe(30);
        expect(bst.getLeftChild()!.getLevel()).toBe(2);
        expect(bst.getLeftChild()!.getOccurence()).toBe(1);
        expect(bst.getRightChild()!.getData()).toBe(42);
        expect(bst.getRightChild()!.getLevel()).toBe(2);
        expect(bst.getRightChild()!.getOccurence()).toBe(2);
        expect(bst.getRightChild()!.getRightChild()).toBe(null);
      })
    });
    describe("findNodeByValue", () => {
      it("returns a correct node from left", () => {
        const bst = new BinarySearchTree(50);
        bst.addChild(46);
        bst.addChild(44);
        bst.addChild(40);
        bst.addChild(42);
  
  
        const targetNode = bst.findNodeByValue(42)
        expect(targetNode).not.toBe(null);
        expect(targetNode!.getData()).toBe(42);
        expect(targetNode!.getLevel()).toBe(5);
      });
      it("returns null if absent", () => {
        const bst = new BinarySearchTree(50);
        bst.addChild(46);
        bst.addChild(44);
        bst.addChild(40);
        bst.addChild(42);
  
        const targetNode = bst.findNodeByValue(35)
        expect(targetNode).toBe(null);
      });
    });
    describe("inorder traverse", ()=> {
      it("simple traverse inorder and returns an array with ascending order", () => {
        const bst = new BinarySearchTree(50);
        bst.addChild(100);
        bst.addChild(2);


        const inorderArray = bst.inorderTraverse();
        expect(inorderArray.length).toBe(3);
        expect(inorderArray).toStrictEqual([2, 50, 100]);
      })
      it("traverse inorder and returns an array with ascending order", () => {
        const bst = new BinarySearchTree(50);
        bst.addChild(40);
        bst.addChild(30);
        bst.addChild(42);
        bst.addChild(41);
        bst.addChild(100);
        bst.addChild(94);
        bst.addChild(60);
        bst.addChild(2);


        const inorderArray = bst.inorderTraverse();
        expect(inorderArray.length).toBe(9);
        expect(inorderArray).toStrictEqual([2, 30, 40, 41, 42, 50, 60, 94, 100]);
      })
    })
  });
  describe("initialises with string", () => {
    it("initialises without error", () => {

      const bst = new BinarySearchTree("Root");
  
      expect(bst.getData()).toBe("Root");
      expect(bst.getLeftChild()).toBe(null);
      expect(bst.getRightChild()).toBe(null);
    })
  });
  describe("edge cases", () => {
    describe("throws when type mismatch", () => {
      it("throws when adding string child to number node", () => {
        const bst = new BinarySearchTree(42);
        expect(()=> bst.addChild("wrong type")).toThrow("type mismatch")
      });
      it("thros when adding number child to string node", () => {
        const bst = new BinarySearchTree("root");
        expect(()=> bst.addChild(42)).toThrow("type mismatch")
      })
    });
    describe("findNodeByValue", () => {
      it("searches string in number node", () => {
        const bst = new BinarySearchTree(50);
        expect(()=> bst.findNodeByValue("target")).toThrow("type mismatch")
      });
      it("searches number in string node", () => {
        const bst = new BinarySearchTree("root");
        expect(()=> bst.findNodeByValue(70)).toThrow("type mismatch")
      });
    })
  })
})