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
      tree30.addChild(tree10);
      tree50.addChild(tree30);
      
      expect(tree50.stringify()).toBe("50\n-- 30\n-- -- 10\n");
    })
  })
})