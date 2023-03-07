import {Tree} from '../src/tree';

describe("Tree", () => {
  it("initialises with data", () => {
    const tree50 = new Tree(50);

    expect(tree50.getValue()).toBe(50)
  });
  describe("add a child", () => {
    it("add a Tree child", () => {
      const tree50 = new Tree(50);
      const tree30 = new Tree(30);
      
      tree50.addChild(tree30);
      
      expect(tree50.getChildren()).toContain(tree30);
    });
    it("add a number child", () => {
      const tree50 = new Tree(50);
      const tree30 = new Tree(30);
      
      tree50.addChild(30);
      
      expect(tree50.getChildren()[0]).toStrictEqual(tree30);
    });
  });
  describe("removeChild", () => {
    it("removes a child by node (same value but two distinct nodes)", () => {
      const tree50 = new Tree(50);
      const tree30 = new Tree(30);
      tree50.addChild(tree30);

      const tree30ToBeRemoved = new Tree(30);

      tree50.removeChild(tree30ToBeRemoved);
      expect(tree50.getChildren().length).toBe(0)
    });
    it("removes a child by value", () => {
      const tree50 = new Tree(50);
      const tree30 = new Tree(30);
      tree50.addChild(tree30);

      tree50.removeChild(30);
      expect(tree50.getChildren().length).toBe(0)
    });
  });
  describe("stringify", () => {
    it("stringify tree with only root", () => {
      const tree50 = new Tree(50);
      expect(tree50.stringify()).toBe("50\n");
    })

    it("stringify the tree", () => {
      const tree50 = new Tree(50);
      const tree30 = new Tree(30);
      const tree10 = new Tree(10);
      const tree1 = new Tree(1);
      const tree2 = new Tree(2);

      const tree20 = new Tree(20);

      tree10.addChild(tree2);
      tree10.addChild(tree1);
      tree30.addChild(tree10);
      tree50.addChild(tree30);
      tree30.addChild(tree20);
      
      expect(tree50.stringify()).toBe("50\n-- 30\n-- -- 10\n-- -- -- 2\n-- -- -- 1\n-- -- 20\n");
    })
  })
  describe("depthFirstTraversalRecursive", () => {
    it("traverses a tree with only root", () => {
      const treeRoot = new Tree(50);

      expect(treeRoot.depthFirstTraversalRecursive().length).toBe(1)
      expect(treeRoot.depthFirstTraversalRecursive()[0]).toBe(50);
    })
    it("traverses all nodes and adds return an flattend array", () => {
      const treeRoot = new Tree(50);
      const tree30 = new Tree(30);
      const tree10 = new Tree(10);
      const tree1 = new Tree(1);
      const tree2 = new Tree(2);

      const tree20 = new Tree(20);

      tree10.addChild(tree2);
      tree10.addChild(tree1);
      tree30.addChild(tree10);
      treeRoot.addChild(tree30);
      tree30.addChild(tree20);

      expect(treeRoot.depthFirstTraversalRecursive().length).toBe(6);
      expect(treeRoot.depthFirstTraversalRecursive()).toStrictEqual([50, 30, 10, 2, 1, 20]);
    });
    describe("breadthFirstTraversal", () => {
      it("traverses a tree with only root", () => {
        const treeRoot = new Tree(50);
  
        expect(treeRoot.breadthFirstTraversal().length).toBe(1)
        expect(treeRoot.breadthFirstTraversal()[0]).toBe(50);
      });
      it("traverses all nodes and adds return an flattend array", () => {
        const treeRoot = new Tree(50);
        const tree30 = new Tree(30);
        const tree10 = new Tree(10);
        const tree1 = new Tree(1);
        const tree2 = new Tree(2);
  
        const tree20 = new Tree(20);
  
        tree10.addChild(tree2);
        tree10.addChild(tree1);
        tree30.addChild(tree10);
        treeRoot.addChild(tree30);
        tree30.addChild(tree20);
  
        expect(treeRoot.breadthFirstTraversal().length).toBe(6);
        expect(treeRoot.breadthFirstTraversal()).toStrictEqual([50, 30, 10, 20, 2, 1]);
      });
    })

  })
})