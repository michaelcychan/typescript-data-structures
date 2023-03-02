import { TwoWayLinkedList } from '../src/twoWayLinkedList';

describe('TwoWayLinkedList', () => {
  it('initialises with no value', () => {
    const myList = new TwoWayLinkedList();

    expect(myList.getHead()).toBe(null)
    expect(myList.getTail()).toBe(null)
  })
  describe('initialises with numbers', () => {
    it('initialises with a given value', () => {
      const myList = new TwoWayLinkedList(72);

      expect(myList.getHead()).not.toBe(null)
      expect(myList.getTail()).not.toBe(null)
      expect(myList.getHead()!.getValue()).toBe(72)
      expect(myList.getTail()!.getValue()).toBe(72)
    })
    describe('length', () => {
      it('returns 0 for empty list', () => {
        const myList = new TwoWayLinkedList();
        expect(myList.length()).toBe(0)
      })
      it('returns 1 for a list with single element', () => {
        const myList = new TwoWayLinkedList(72);
        expect(myList.length()).toBe(1)
      })
      it('returns the number of nodes for a list with multiple nodes', () => {
        const myList = new TwoWayLinkedList(72);
        myList.addHead(37)
        myList.addHead(24)
        myList.addHead(15)
        myList.addHead(2)
        expect(myList.length()).toBe(5)
      })
    })
    describe('stringify', () => {
      it('returns empty string for empty list', () => {
        const myList = new TwoWayLinkedList();
        expect(myList.stringify()).toBe("")
      })
      it('returns a string for list with one node', () => {
        const myList = new TwoWayLinkedList(45);
        expect(myList.stringify()).toBe("45")
      })
      it('returns a string for list with multiple nodes', () => {
        const myList = new TwoWayLinkedList(45);
        myList.addHead(37)
        myList.addHead(24)
        myList.addHead(15)
        myList.addHead(2)
        expect(myList.stringify()).toBe("2-15-24-37-45")
      })
    })
    describe('addHead', () => {
      it('adds a head to an empty list', () => {
        const myList = new TwoWayLinkedList();

        myList.addHead(5)
        expect(myList.stringify()).toBe("5")
        expect(myList.getHead()!.getValue()).toBe(5)
        expect(myList.getTail()!.getValue()).toBe(5)
      })
      it('adds a head to a list with one element', () => {
        const myList = new TwoWayLinkedList(67);

        myList.addHead(5)
        expect(myList.stringify()).toBe("5-67")
        expect(myList.getHead()!.getValue()).toBe(5)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(67)
        expect(myList.getTail()!.getPrev()!.getValue()).toBe(5)
      })
    })
    describe('addTail', () => {
      it('adds a tail to an empty list', () => {
        const myList = new TwoWayLinkedList();

        myList.addTail(95)
        expect(myList.stringify()).toBe("95")
        expect(myList.getHead()!.getValue()).toBe(95)
        expect(myList.getTail()!.getValue()).toBe(95)
      })
      it('adds a tail to a list with one element', () => {
        const myList = new TwoWayLinkedList(34);

        myList.addTail(95)
        expect(myList.stringify()).toBe("34-95")
        expect(myList.getHead()!.getValue()).toBe(34)
        expect(myList.getHead()!.getNext()!.getValue()).toBe(95)
        expect(myList.getTail()!.getValue()).toBe(95)
        expect(myList.getTail()!.getNext()).toBe(null)
      })
    })
    describe('removeHead', () => {
      it('returns null if attempting to remove from an empty list', () => {
        const myList = new TwoWayLinkedList();
        const removed = myList.removeHead();

        expect(removed).toBe(null);
        expect(myList.length()).toBe(0);
      })
      it('returns original head node if attempting to remove from a list with one node', () => {
        const myList = new TwoWayLinkedList(55);
        const removed = myList.removeHead();

        expect(removed!).toBe(55)
        expect(myList.length()).toBe(0)
        expect(myList.getHead()).toBe(null)
        expect(myList.getTail()).toBe(null)
      })
      it('returns original head node if attempting to remove from a list with multiple', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeHead();

        expect(removed!).toBe(55)
        expect(myList.length()).toBe(4)
        expect(myList.getHead()!.getValue()).toBe(66)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(95)
        expect(myList.stringify()).toBe("66-73-86-95")
      })
    })
    describe('removeTail', () => {
      it('returns null if attempting to remove from an empty list', () => {
        const myList = new TwoWayLinkedList();
        const removed = myList.removeTail();

        expect(removed).toBe(null)
        expect(myList.length()).toBe(0)
      })
      it('returns original tail node if attempting to remove from a list with one node', () => {
        const myList = new TwoWayLinkedList(55);
        const removed = myList.removeTail();

        expect(removed!).toBe(55)
        expect(myList.length()).toBe(0)
        expect(myList.getHead()).toBe(null)
        expect(myList.getTail()).toBe(null)
      })
      it('returns original tail node if attempting to remove from a list with multiple', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeTail();

        expect(removed!).toBe(95)
        expect(myList.length()).toBe(4)
        expect(myList.getHead()!.getValue()).toBe(55)
        expect(myList.getTail()!.getValue()).toBe(86)
        expect(myList.getTail()!.getNext()).toBe(null)
        expect(myList.stringify()).toBe("55-66-73-86")
      })
    })
    describe('removeByValue', () => {
      it('returns null if attempting to remove from an empty list', () => {
        const myList = new TwoWayLinkedList();
        const removed = myList.removeByValue(8);

        expect(removed).toBe(null)
        expect(myList.length()).toBe(0)
      })
      it('returns original head node if attempting to remove head from a list with one node', () => {
        const myList = new TwoWayLinkedList(55);
        const removed = myList.removeByValue(55);

        expect(removed!).toBe(55)
        expect(myList.length()).toBe(0)
        expect(myList.getHead()).toBe(null)
        expect(myList.getTail()).toBe(null)
      })
      it('returns original head node if attempting to remove from a list with multiple nodes', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeByValue(55);

        expect(removed!).toBe(55)
        expect(myList.length()).toBe(4)
        expect(myList.getHead()!.getValue()).toBe(66)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(95)
        expect(myList.stringify()).toBe("66-73-86-95")
      })
      it('returns original tail node if attempting to remove from a list with multiple nodes', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeByValue(95);

        expect(removed!).toBe(95)
        expect(myList.length()).toBe(4)
        expect(myList.getHead()!.getValue()).toBe(55)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(86)
        expect(myList.stringify()).toBe("55-66-73-86")
      })
      it('returns one middle node if attempting to remove from a list with multiple nodes', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeByValue(73);

        expect(removed!).toBe(73)
        expect(myList.length()).toBe(4)
        expect(myList.getHead()!.getValue()).toBe(55)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(95)
        expect(myList.getTail()!.getNext()).toBe(null)
        expect(myList.stringify()).toBe("55-66-86-95")
      });
      it('returns null if the target is not in the list', () => {
        const myList = new TwoWayLinkedList(55);
        myList.addTail(66)
        myList.addTail(73)
        myList.addTail(86)
        myList.addTail(95)

        const removed = myList.removeByValue(54);

        expect(removed).toBe(null);
        expect(myList.length()).toBe(5)
        expect(myList.getHead()!.getValue()).toBe(55)
        expect(myList.getHead()!.getPrev()).toBe(null)
        expect(myList.getTail()!.getValue()).toBe(95)
        expect(myList.getTail()!.getNext()).toBe(null)
        expect(myList.stringify()).toBe("55-66-73-86-95")
      })
    })
  });
  describe('With strings as value', () => {
    it('initialises with a given value', () => {
      const myList = new TwoWayLinkedList('Input');

      expect(myList.getHead()).not.toBe(null);
      expect(myList.getTail()).not.toBe(null);
      expect(myList.getHead()!.getValue()).toBe('Input');
      expect(myList.getTail()!.getValue()).toBe('Input');
    })
  });
  describe('stringify', () => {
    it('returns a string for list with one node', () => {
      const myList = new TwoWayLinkedList("Input");
      expect(myList.stringify()).toBe("Input")
    })
    it('returns a string for list with multiple nodes', () => {
      const myList = new TwoWayLinkedList('Tail');
      myList.addHead('SecondLast')
      myList.addHead("Middle")
      myList.addHead("Second")
      myList.addHead("Head")
      expect(myList.stringify()).toBe("Head-Second-Middle-SecondLast-Tail");
    })
  });
})