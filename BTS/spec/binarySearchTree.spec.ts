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
  });
  describe("initialises with string", () => {
    it("initialises without error", () => {

      const bst = new BinarySearchTree("Root");
  
      expect(bst.getData()).toBe("Root");
      expect(bst.getLeftChild()).toBe(null);
      expect(bst.getRightChild()).toBe(null);
    })
  });
  describe("throws when type mismatch", () => {
    it("throws when adding string child to number node", () => {
      const bst = new BinarySearchTree(42);
      expect(()=> bst.addChild("wrong type")).toThrow("type mismatch")
    });
    it("thros when adding number child to string node", () => {
      const bst = new BinarySearchTree("root");
      expect(()=> bst.addChild(42)).toThrow("type mismatch")
    })

  })
})