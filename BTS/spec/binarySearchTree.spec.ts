import {BinarySearchTree} from '../src/binarySearchTree';

describe("initialisation", () => {
  describe("number as data", () => {
    it("initialises without error", () => {
      const bst = new BinarySearchTree(34);
  
      expect(bst.getRoot()!.getData()).toBe(34);
      expect(bst.getRoot()!.getLeftChild()).toBe(null);
      expect(bst.getRoot()!.getRightChild()).toBe(null);
      expect(bst.getRoot()!.getLevel()).toBe(1);
      expect(bst.getRoot()!.getOccurence()).toBe(1);
    });
    describe("adding Child", () => {
      it("add childs without duplicate", () => {
        const bst = new BinarySearchTree(34);
        bst.addChild(42);
        bst.addChild(30);
        bst.addChild(50);

        expect(bst.getRoot()!.getData()).toBe(34);
        expect(bst.getRoot()!.getLeftChild()).not.toBe(null);
        expect(bst.getRoot()!.getRightChild()).not.toBe(null);
  
        expect(bst.getRoot()!.getLeftChild()!.getData()).toBe(30);
        expect(bst.getRoot()!.getLeftChild()!.getLevel()).toBe(2);
        expect(bst.getRoot()!.getLeftChild()!.getOccurence()).toBe(1);
        expect(bst.getRoot()!.getRightChild()!.getData()).toBe(42);
        expect(bst.getRoot()!.getRightChild()!.getLevel()).toBe(2);
        expect(bst.getRoot()!.getRightChild()!.getOccurence()).toBe(1);
  
        expect(bst.getRoot()!.getRightChild()!.getRightChild()).not.toBe(null);
        expect(bst.getRoot()!.getRightChild()!.getRightChild()!.getData()).toBe(50);
        expect(bst.getRoot()!.getRightChild()!.getRightChild()!.getLevel()).toBe(3);
        expect(bst.getRoot()!.getRightChild()!.getRightChild()!.getOccurence()).toBe(1);
      });
      it("add child with duplicates", () => {
        const bst = new BinarySearchTree(34);
        bst.addChild(42);
        bst.addChild(30);
        bst.addChild(42);
  
        expect(bst.getRoot()!.getLeftChild()).not.toBe(null);
        expect(bst.getRoot()!.getRightChild()).not.toBe(null);
        
  
        expect(bst.getRoot()!.getLeftChild()!.getData()).toBe(30);
        expect(bst.getRoot()!.getLeftChild()!.getLevel()).toBe(2);
        expect(bst.getRoot()!.getLeftChild()!.getOccurence()).toBe(1);
        expect(bst.getRoot()!.getRightChild()!.getData()).toBe(42);
        expect(bst.getRoot()!.getRightChild()!.getLevel()).toBe(2);
        expect(bst.getRoot()!.getRightChild()!.getOccurence()).toBe(2);
        expect(bst.getRoot()!.getRightChild()!.getRightChild()).toBe(null);
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
        expect(inorderArray).toStrictEqual([2, 30, 40, 41, 42, 50, 60, 94, 100]);
      })
    });
    // describe.skip("removeChild", () => {
    //   it("removes the root node", () => {
    //     const bst = new BinarySearchTree();
    //     bst.addChild(50);
    //     expect(() => bst.remove(50)).toThrow("cannot delete root");
    //   });
    //   it("removes a non-existing target from left", () => {
    //     const bst = new BinarySearchTree();
    //     bst.addChild(50);
    //     bst.addChild(100);
    //     bst.addChild(40);
    //     bst.addChild(10);
    //     bst.addChild(4);

    //     const removed = bst.remove(5);
    //     expect(removed).toBe(null);
    //     const inorderArray = bst.inorderTraverse();
    //     expect(inorderArray.length).toBe(5);
    //     expect(inorderArray).toStrictEqual([4, 10, 40, 50, 100]);
    //   });
    //   it("removes from a left leaf of root", () => {
    //     const bst = new BinarySearchTree(50);
    //     bst.addChild(100);
    //     bst.addChild(4);

    //     const removed = bst.remove(4);
    //     expect(removed).toBe(4);
    //     const inorderArray = bst.inorderTraverse();
    //     expect(inorderArray.length).toBe(2);
    //     expect(inorderArray).toStrictEqual([50, 100]);
    //   });
    //   it("removes from a leaf from left branch of root", () => {
    //     const bst = new BinarySearchTree(50);
    //     bst.addChild(100);
    //     bst.addChild(30);
    //     bst.addChild(4);

    //     const removed = bst.remove(4);
    //     expect(removed).toBe(4);
    //     const inorderArray = bst.inorderTraverse();
    //     expect(inorderArray.length).toBe(3);
    //     expect(inorderArray).toStrictEqual([30, 50, 100]);
    //   });
    //   it("reduces occurence from left branch of root", () => {
    //     const bst = new BinarySearchTree(50);
    //     bst.addChild(100);
    //     bst.addChild(30);
    //     bst.addChild(4);
    //     bst.addChild(4);

    //     expect(bst.findNodeByValue(4)!.getOccurence()).toBe(2);

    //     const removed = bst.remove(4);
    //     expect(removed).toBe(4);
    //     const inorderArray = bst.inorderTraverse();
    //     expect(inorderArray.length).toBe(4);
    //     expect(inorderArray).toStrictEqual([4, 30, 50, 100]);

    //     expect(bst.findNodeByValue(4)).not.toBeNull;
    //     expect(bst.findNodeByValue(4)!.getOccurence()).toBe(1);
    //   });
    // });
  });
  describe("initialises with string", () => {
    it("initialises without error", () => {

      const bst = new BinarySearchTree("Root");
  
      expect(bst.getRoot()!.getData()).toBe("Root");
      expect(bst.getRoot()!.getLeftChild()).toBe(null);
      expect(bst.getRoot()!.getRightChild()).toBe(null);
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