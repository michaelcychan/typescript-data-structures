import {MyNode} from '../src/node';

describe('MyNode', () => {
  it('creates a new number node', () => {
    const node3 = new MyNode(3);

    expect(node3.getValue()).toBe(3);
    expect(node3.getNext()).toBe(null);
  })
  it('links two nodes', () => {
    const node42 = new MyNode(42);
    const node3 = new MyNode(3, node42);

    expect(node3.getNext()).toBe(node42)
    expect(node42.getNext()).toBe(null)
  })
  it('links three nodes', () => {
    const node42 = new MyNode(42);
    const node21 = new MyNode(21, node42);
    const node3 = new MyNode(3, node21);

    expect(node3.getNext()).toBe(node21)
    expect(node3.getNext()!.getNext()).toBe(node42)
    expect(node42.getNext()).toBe(null)
  })
  it('set new value', () => {
    const nodeA = new MyNode(1);
    nodeA.setValue(42);
    expect(nodeA.getValue()).toBe(42)
  })
  it('reset link', () => {
    const node42 = new MyNode(42);
    const node21 = new MyNode(21, node42);
    const node3 = new MyNode(3, node21);

    expect(node3.getNext()).toBe(node21)
    expect(node3.getNext()!.getNext()).toBe(node42)
    expect(node42.getNext()).toBe(null)
    node3.setNext(node42);
    expect(node3.getNext()).toBe(node42)
  })
})